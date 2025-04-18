import http from '@/utils/http'
import { ReqLoginForm, ResLogin } from '@/interface'

export const login = (userInfo: ReqLoginForm) => {
  return http.post<ResLogin>('/login', userInfo)
}
