---
title: Drop the reference
date: 2022-11-16
tags: 
  - Rust
author: Tricster
location: Nanjing
---

# Background

These days I've been reading the async tests in [wasmtime](https://github.com/bytecodealliance/wasmtime/blob/main/tests/all/async_functions.rs).

And I am confused about [this line](https://github.com/bytecodealliance/wasmtime/blob/8426904129d04f6c2f7457eb59a86e41bcc48c42/tests/all/async_functions.rs#L272):

```rust
move |mut caller, _params, _results| {
    assert_eq!(*caller.data(), 0);
    *caller.data_mut() = 1;
    let dtor = SetOnDrop(caller);
    Box::new(async move {
        // why drop it here?
        drop(&dtor);
        tokio::task::yield_now().await;
        Ok(())
    })
}
```

In this test, we want to know if all the Rust bits are destroyed when cancelling the future. However, if we drop it right before the `yield`, how can we know if the rust bits are destroyed? That means, we call the destructor **before cancelling the future**.

After [discussing with other developers](https://github.com/bytecodealliance/wasmtime/pull/5267), I know what happens here.


# Drop the reference

The point here is that we are actually drop the reference of something, not the thing itself. 
When dropping the reference, the referent is not dropped. Think of this, you borrow something, and return it, that thing will not be destroyed.

With that said, take a look at this:

```rust 
{
  let item = Item::new();
  println!("create item");
  // this does nothing
  drop(&item);
  println!("leave the scope");
  // when leaving the scope, item will be dropped.
}
```

But why do we need this? Let's go back to the original code.

```rust
move |mut caller, _params, _results| {
    assert_eq!(*caller.data(), 0);
    *caller.data_mut() = 1;
    // create the dtor
    let dtor = SetOnDrop(caller);
    Box::new(async move {
        // force moving dtor into the closure. without this, dtor will be 
        // destoryed when returning the boxed future. What we really want is 
        // destroying dtor at the end of the future.
        drop(&dtor);
        tokio::task::yield_now().await;
        Ok(())
    })
}
```

I think this is a tricky way to extend the lifetime of something and it's a bit subtle and confusing. There are other ways to finish this test. But that makes the test tests what it's supposed to test.

Another thing, just discuss with other people, and you will get answers and maybe some chances to contribute.