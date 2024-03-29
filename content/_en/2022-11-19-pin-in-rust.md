---
title: Why rust needs pin?
date: 2022-11-19
tags:
  - Rust
author: Tricster
location: Nanjing
---

If you ever looked into the Future trait in Rust, you will notice that `poll` accepts `Pin<&mut Self>` instead of just `&mut Self`.

```rust
    fn poll(
        self: std::pin::Pin<&mut Self>,
        cx: &mut std::task::Context<'_>,
    ) -> std::task::Poll<Self::Output>;
```

What is `Pin` and why does rust need that?

# What is `Pin`?

In rust, there are two categories of types, depending on whether it is safe to move them around in the memory.
Most types can be moved around, which means that by doing so, no pointer will be invalidated.

At a high level, a `Pin<P>` ensures that the pointee of any pointer type P has a stable location in memory, meaning it cannot be moved elsewhere and its memory cannot be deallocated until it gets dropped.

Let's consider a **self-referential structure** like this:

```rust
pub struct T {
    pub pointer: *const T,
}
```

And what will happen, if we move it?

```rust
fn main() {
    let mut a = T {
        pointer: std::ptr::null(),
        // _marker: std::marker::PhantomPinned,
    };
    a.pointer = &a;
    println!("{:p}: {:p}", &a, a.pointer);
    let c = a;
    println!("{:p}: {:p}", &c, c.pointer);
}
```

You will get:

```
// a: a.pointer
0x7ffdee3f5b70: 0x7ffdee3f5b70
// c: c.pointer
0x7ffdee3f5bd8: 0x7ffdee3f5b70
```

After moving, `T` is not self-referential anymore. It holds a pointer which points to a data field inside another object.

Here's a another example using `std::mem:swap`:

```rust

fn main() {
    let mut a = T {
        pointer: std::ptr::null(),
    };

    let mut b = T {
        pointer: std::ptr::null(),
    };
    a.pointer = &a;
    b.pointer = &b;

    println!("{:p}: {:p}", &a, a.pointer);
    println!("{:p}: {:p}", &b, b.pointer);
    // move a into b by swapping them
    std::mem::swap(&mut a, &mut b);
    println!("{:p}: {:p}", &a, a.pointer);
    println!("{:p}: {:p}", &b, b.pointer);

}
```

After running the above code, you will get this:

```plain
// before swapping
0x7ffecef36320: 0x7ffecef36320
0x7ffecef36328: 0x7ffecef36328
// after swapping
0x7ffecef36320: 0x7ffecef36328
0x7ffecef36328: 0x7ffecef36320
```

If we use `Pin<T>`, we could not actually obtain a `Box<T>` or `&mut T` to pinned data. This implies that we cannot use operations such as `std::mem::swap` which takes `&mut T` as parameters.

Here's an example of using `Pin` to construct `T`.

```rust
#[derive(Debug)]
pub struct T {
    pub pointer: *const T,
    _marker: std::marker::PhantomPinned,
}

fn main() {
    let mut a = T {
        pointer: std::ptr::null(),
        _marker: std::marker::PhantomPinned,
    };
    a.pointer = &a;
    let a = std::boxed::Box::pin(a);
    println!("Box: {:p}, a: {:p}, a.pointer: {:p}", &a, &*a, a.pointer);
    // we move a into c
    let c = a;
    println!("Box: {:p}, c: {:p}, c.pointer: {:p}", &c, &*c, c.pointer);
}
```

There are three things to notice: 
1. We add `std::marker::PhantomPinned` to `T`, which means that `T` can not be unpinned. It's the same with `unsafe impl !Unpin for T{}`.
2. Since `T` is unpinnable, we can not use `std::pin::Pin::new(&mut a)` to construct the `Pin<&mut T>`. Instead, we use `std::boxed::Box::pin(a)`.
3. When moving `a` into `c`, what we really do, is move the `Box`, not the `T` inside.

The output is reasonable considering tips above.

```
Box: 0x7ffd476154b8, a: 0x564cdb83bad0, a.pointer: 0x564cdb83bad0
Box: 0x7ffd47615530, c: 0x564cdb83bad0, c.pointer: 0x564cdb83bad0
```

The reason why `std::pin::Pin::new(T)` requires `T` to be unpinnable is pretty clear now. That prevents us from messing up the program by moving `Pin<T>` around when `T` is not unpinnable.

# Why does Future needs Pin?

In Rust, async machinery is implemented as a stackless state machine. It transforms local variables and current state into an anonymous sturct.
If the async block contains the reference like this:

```rust
async {
    let mut x = [0; 128];
    let read_into_buf_fut = read_into_buf(&mut x);
    read_into_buf_fut.await;
    println!("{:?}", x);
}
```

It will be transformed into:

```rust
struct ReadIntoBuf<'a> {
    buf: &'a mut [u8], // points to `x` below
}

struct AsyncFuture {
    x: [u8; 128],
    read_into_buf_fut: ReadIntoBuf<'_>,
}
```

If `AsyncFuture` is moved, then `read_into_buf_fut.buf` will point to somewhere invaild. That's why we need to **pin the Future**.

# References:

1. [Execellent post by couldflare.](https://blog.cloudflare.com/pin-and-unpin-in-rust/)
2. [Rust Async book.](https://rust-lang.github.io/async-book/04_pinning/01_chapter.html)
3. [Rust pin doc.](https://doc.rust-lang.org/nightly/core/pin/index.html)
4. [The Why, What, and How of Pinning in Rust](https://www.youtube.com/watch?v=DkMwYxfSYNQ)