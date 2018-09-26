import axios from 'axios'
import qs from 'qs'

const apiBase = ''
const Post = async (url, params) => {
  let { data } = await axios.post(url, qs.stringify(params))
  // if (data.code === 20001) {
  //   data.code = 0
  // }
  return data
}
const Get = async (url, params) => {
  let { data } = await axios.get(url, {params})
  // if (data.code === 20001) {
  //   data.code = 0
  //   console.log('登陆信息已经失效post!')
  // }
  return data
}

export const registerService = (params) => {
  return Post(`${apiBase}/v1/register`, params)
}

export const sendVerifyCodeService = (params) => {
  return Post(`${apiBase}/v1/sendVerifyCode`, params)
}