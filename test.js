// 取两个对象的差集

const data = [
  { key: 1, title: 'test1' },
  { key: 2, title: 'test2' },
  { key: 3, title: 'test3' },
  { key: 4, title: 'test4' },
  { key: 5, title: 'test5' },
  { key: 6, title: 'test6' },
  { key: 7, title: 'test7' }
]

const exist = [
  { key: 1, title: 'test1' },
  { key: 2, title: 'test2' },
  { key: 3, title: 'test3' }
]

const mark = {}
exist.forEach(item => {
  console.log(item.key)
  mark[item.key] = true
})
console.log(mark)

const remain = data.filter(item => {
  const { key } = item
  console.log(key)
  return !mark[key]
})

console.log(remain)
