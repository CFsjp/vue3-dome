import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { DEVHOST, PROHOST } from '@/config/index'
import { ElMessage } from 'element-plus'

const baseUrl = process.env.NODE_ENV === 'development' ? DEVHOST : PROHOST

class HttpRequest {
  constructor() {
    this.queue = {}
  }
  public queue: any
  getInsideConfig() {
    const config = {
      baseURL: baseUrl,
      headers: {}
    }
    return config
  }
  destroy(url: string) {
    delete this.queue[url]
    // if (!Object.keys(this.queue).length) {
    //   // hide loading
    // }
  }
  interceptors(instance: any, url?: string) {
    // 请求拦截
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 添加全局的loading...
        // if (!Object.keys(this.queue).length) {
        // }
        if (url) {
          this.queue[url] = true
        }
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
    // 响应拦截
    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (url) {
          this.destroy(url)
        }
        const { data, status } = res
        if (data.type === 'application/octet-stream') {
          return Object.assign(
            {},
            {
              data,
              status
            },
            { header: res.headers }
          )
        }
        return { data, status }
      },
      (error: any) => {
        if (url) {
          this.destroy(url)
        }
        if (error && error.request) {
          const status = error.request.status
          switch (status) {
            case 400:
              ElMessage.error('请求错误')
              break
            case 401:
              ElMessage.error('接口配置未经授权！')
              break
            case 403:
              ElMessage.error('拒绝访问')
              break
            case 404:
              ElMessage.error('请求地址出错')
              break
            case 408:
              ElMessage.error('请求超时')
              break
            case 500:
              ElMessage.error('服务器内部错误')
              break
            case 501:
              ElMessage.error('服务未实现')
              break
            case 502:
              ElMessage.error('网关错误')
              break
            case 503:
              ElMessage.error('服务不可用')
              break
            case 504:
              ElMessage.error('网关超时')
              break
            case 505:
              ElMessage.error('HTTP版本不受支持')
              break
            default:
              ElMessage({
                message: '未知错误！',
                type: 'error',
                duration: 3000
              })
              break
          }
        }
        return Promise.reject(error)
      }
    )
  }
  async request(options: AxiosRequestConfig) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    await this.interceptors(instance, options.url)
    return instance(options)
  }
}

const serve = new HttpRequest()

export const post = (url: string, params?: any) => {
  return serve.request({
    url,
    params,
    method: 'POST'
  })
}

export const get = (url: string, params?: any) => {
  return serve.request({
    url,
    params,
    method: 'GET'
  })
}

export const download = (url: string, filename: string, params?: any) => {
  return serve
    .request({
      url,
      params,
      method: 'POST',
      responseType: 'blob'
    })
    .then(res => {
      const content = res.data
      const blob = new Blob([content])
      if ('download' in document.createElement('a')) {
        const elink = document.createElement('a')
        elink.download = filename
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href)
        document.body.removeChild(elink)
      } else {
        navigator.msSaveBlob(blob, filename)
      }
    })
    .catch(r => {
      console.error(r)
      ElMessage.error('下载失败')
    })
}
