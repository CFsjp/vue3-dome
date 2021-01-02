/**
 * data时间库，所有有关时间的封装都放在此文件中
 *
 * @function monthTime(num) // 获取距今的月份值
 * @param num // 传入的月份值
 */

// 传入一个距离现在月份的值，然后你想要的的份
export function monthTime(num) {
  const date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth()

  month += num

  if (month > 12) {
    year = parseInt(month / 12) + year
    month = month % 12
    date.setFullYear(year)
  }
  date.setMonth(month)

  return date
}
