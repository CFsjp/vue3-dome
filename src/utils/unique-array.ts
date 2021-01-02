// const a = [1, 2, 3, 4, 2, 3, 1]

export function unique(arr: Array<any>) {
  // 适用于基础类型的数组
  return [...new Set(arr)]

  // return arr.filter((item, index, arr) => arr.indexOf(item) === index)

  // return arr.reduce((arr, b) => (arr.includes(b) ? arr : [...arr, b]), [])
}

export function uniqueArrayByItem(arr: Array<any>) {
  /**
   * 去掉数组中相同的对象或者数组
   * const a = [
   *  { id: 1, name: '何' },
   *  { id: 1, name: '何' },
   *  { id: 1, name: '何' },
   *  { id: 1, name: '王' },
   *  { id: 1, name: '王' },
   *  [1, 2, 3],
   *  [1, 2, 3]
   * ]
   *
   * 结果：[
   *  { id: 1, name: '何' },
   *  { id: 1, name: '王' },
   *  [1, 2, 3]
   * ]
   */

  const tem = [...new Set(arr.map(c => JSON.stringify(c)))]
  return tem.map(el => JSON.parse(el))

  // let res:any = {}
  // arr.forEach((item) => {
  //   item.sort((a:any, b:any) => a - b)
  //   res[item] = item
  // })
  // return Object.values(res)
}

// export function uniqueArrayByKey(arr: Array<any>, key: number) {
//   /**
//    * 以数组对象中某1个键值对为条件去重
//    * @param arr：要去重的数组 @param key：以第几个key为条件去重
//    * const a = [
//    *  { id: 1, name: '何' },
//    *  { id: 2, name: '何' },
//    *  { id: 3, name: '何' },
//    *  { id: 1, name: '王' },
//    *  { id: 2, name: '王' },
//    * ]
//    *
//    * 结果：[
//    *  { id: 1, name: '何' },
//    *  { id: 1, name: '王' }
//    * ]
//    */

//   const obj: any = {}
//   const result = arr.reduce((cur, next) => {
//     obj[next[Object.keys(next)[key]]]
//       ? ''
//       : (obj[next[Object.keys(next)[key]]] = true && cur.push(next))
//     return cur
//   }, [])
// }

export function uniqueArrayByKey(arr: Array<any>, key: string) {
  const map = new Map()
  arr.forEach(item => {
    if (!map.has(item[key])) {
      map.set(item[key], item)
    }
  })
  return [...map.values()]
}
