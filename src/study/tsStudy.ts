class Person {
  // 实例属性 实例.name去获取
  name: string
  age: number

  // 静态属性 Person.sex 去获取
  static sex: string

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(this.name, '早上好!!!')
  }
}

const person = new Person('盛俊鹏', 18)

person.sayHello()

console.log(person.name)
console.log(Person.sex)

function fn<T>(a: T): T {
  console.log(typeof a)
  return a
}

fn(10)

interface List {
  length: number
}

function fn2<T extends List>(a: T): number {
  console.log(a.length)
  return a.length
}

fn2('123')
