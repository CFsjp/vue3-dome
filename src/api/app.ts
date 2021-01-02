import { get, post } from '@/utils/request.ts'
/**
 * 请求方式示例
 * @param pramas：请求传入的参数
 */

export const login = (pramas: object) => post('/login', pramas)

export const out = () => get('/out')

export const getUserInfo = () => post('/api/servlet/l/user/v1/userInfo')
