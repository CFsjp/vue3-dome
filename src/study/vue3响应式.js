// vue3 响应式原理

const toProxy = new WeakMap() // 弱引用映射表 es6 放置的是原对象：代理过的对象
const toRaw = new WeakMap() // 被代理过的对象：原对象

// 判断是不是对象
function isObject (val) {
  return typeof val === 'object' && val !== null
}

function hasOwn (target, key) {
  return target.haWenProperty(key)
}

// 1.响应式的核心方法
function reactive (target) {
  // 创建响应式对象
  return createReativeObject(target)
}

// 创建响应式对象的方法
function createReativeObject (target) {
  if (!isObject(target)) {
    return target
  }

  const proxy = toProxy.get(target) // 如果已经代理过了 就将代理过的结果返回即可
  if (proxy) {
    return proxy
  }
  if (toRaw.has(target)) {
    return target
  }

  const baseHandler = {
    get (target, key, receiver) {
      console.log('获取数据')
      // proxy + reflect 反射
      const result = Reflect.get(target, key, receiver)

      track(target, key) // 如果目标上的这个key变化了 重新让数组中的

      return isObject(result) ? reactive(result) : result // 递归
    },
    set (target, key, value, receiver) {
      const hadKey = hasOwn(target, key)
      const oldValue = target[key]
      const res = Reflect.set(target, key, value, receiver)
      if (!hadKey) {
        console.log('新增属性')
        trigger(target, 'add', key)
      } else if (oldValue !== value) { // 不相等，则修改；否则，不修改
        console.log('修改属性')
        trigger(target, 'set', key)
      } // 为了屏蔽无意义的修改
      console.log('设置数据')
      return res
    },
    deleteProperty (target, key) {
      return Reflect.deleteProperty(target, key)
      console.log('删除数据')
    }
  }
  const observed = new Proxy(target, baseHandler) // es6
  toProxy.set(target, observed)
  toRaw(observed, target)
  return observed
}

const proxy = reactive({ a: { name: 'sjp' } }) // 多层代理
// proxy.name
proxy.name = '123'
// delete proxy.name
// 需要记录一下 如果对象代理过了 就不要在new

let proxyArr = reactive([1, 2, 3])
proxyArr.push(4)

// 重点 --------------------
// 栈 先进后出
const activeEffectStacks = [] // 栈型结果
const targetsMap = new WeakMap()

function track (target, key) { // 如果这个target中的key变化了 就执行数组中的方法
  let effect = activeEffectStacks[activeEffectStacks.length - 1]
  if (effect) { // 有对应关系 创建关联
    let depsMap = targetsMap.get(target)
    if (!depsMap) {
      targetsMap.set(target, depsMap = new Map())
    }
    const deps = depsMap.get(key)
    if (!deps) {
      depsMap.set(key, deps = new Set())
    }
    if (!deps.has(effect)) {
      deps.add(effect)
    }
  }
  // 没有就什么都不做
}

function trigger (target, type, key) {
  const depsMap = targetsMap.get(target)
  if (depsMap) {
    const deps = depsMap.get(key)
    if (deps) {
      deps.forEach(effect => {
        effect()
      })
    }
  }
}

// 响应式 副作用
function effect (fn) {
  // 需要把fn写成响应式的函数
  const effect = createReactiveEffect(fn)
  effect()
}
function createReactiveEffect (fn) {
  const effect = function () { // 创建的响应式的effect
    return run(effect, fn) // 运行 1.让fn运行， 第二个就是把这个effect存到栈中
  }
  return effect
}
function run (effect, fn) {
  try {
    activeEffectStacks.push(effect)
    fn()
  } finally {
    activeEffectStacks.pop(effect)

  }
}

// 依赖收集 发布订阅
const obj = reactive({ name: 'sjp' })
effect(() => { // effect 会执行两次，默认先执行一次 之后依赖的数据变化了 会再次执行
  console.log(obj.name)
})
obj.name = 'wyl'