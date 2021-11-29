---
title: WebAssembly 内存管理
date: 2021-06-14
tags: 
  - tech
author: Tricter
location: 南京
---

在使用`WASM`的过程中，大多数时候是不需要考虑内存的，`JS`为我们处理了大部分数据类型，借由`Embind`也可以直接进行各种参数的传递。但在计算密集型应用中，还是会涉及到数据的传递，比如将数据从JS传递到WASM中，或者从WASM中取回数据。

JS中有解释器和GC，帮助我们管理内存，但在WASM中我们还是需要像C++中那样手动管理内存。从Tfjs中可以学习一下如何完成这样的事。


首先我们在js中将数据传给WASM

```js
    const size = util.sizeFromShape(shape);
    const numBytes = size * util.bytesPerElement(dtype);
    const memoryOffset = this.wasm._malloc(numBytes);

    this.wasm.tfjs.registerTensor(id, size, memoryOffset);
    this.wasm.HEAPU8.set(
        new Uint8Array(
            (values as backend_util.TypedArray).buffer,
            (values as backend_util.TypedArray).byteOffset, numBytes),
        memoryOffset);
```

在WASM中，我们可以这样接收数据：

```c++
void register_tensor(const size_t tensor_id, const size_t size,
                     void *memory_offset) {
    ...
    float* dataFromJS = reinterpret_cast<const float *>(memory_offset);
    ...
}
```

当然我们还需要从WASM中获取数据

```js
    const {memoryOffset, dtype, shape, stringBytes} = this.dataIdMap.get(dataId);
    const bytes = this.wasm.HEAPU8.slice(
        memoryOffset,
        memoryOffset + util.sizeFromShape(shape) * util.bytesPerElement(dtype));
    return new Float32Array(bytes.buffer)
```

还需要注意的一点是，我们需要手动将创建的数据释放，`this.wasm._free(data.memoryOffset)`。