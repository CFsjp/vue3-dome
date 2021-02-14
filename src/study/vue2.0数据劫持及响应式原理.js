// Vue 2.0 vue 如何实现 响应式原理

// 函数劫持,数组方法劫持---这里使用继承，子可以使用父上的方法
const oldArrayPrototype = Array.prototype
const proto = Object.create(oldArrayPrototype)
const arrayFunc = ['push', 'shift', 'pop', 'unshift']
arrayFunc.forEach(method => {
  proto[method] = function() {
    // 函数重写，内部继续调用老的方法
    updateView() // 切片编程
    oldArrayPrototype[method].call(this, ...arguments)
  }
})

function observer(target) {
  if (typeof target !== 'object' || target === null) {
    return target
  }

  if (Array.isArray(target)) {
    // 数组函数劫持后，将对象实例指向新的实例上去
    Object.setPrototypeOf(target, proto)
    // target.__proto__ = proto
  }

  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

function defineReactive(target, key, value) {
  observer(value) // value是对象，则使用递归
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newVal) {
      if (newVal !== val) {
        observer(value) // newVal是对象，则使用递归
        updateView()
        value = newVal
      }
    }
  })
}

function updateView() {
  console.log('更新视图')
}
