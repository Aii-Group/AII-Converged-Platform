import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

export default [
  // user login
  {
    url: '/api/login',
    method: 'post',
    timeout: 10,
    response: ({ body }: { body: { username: string; password: string } }) => {
      const { username, password } = body

      const validUsername = 'admin'
      const validPassword = '123456'

      if (username === validUsername && password === validPassword) {
        return {
          code: 200,
          msg: 'Login successful',
          success: true,
          data: {
            userId: '1008',
            userName: 'admin',
            accessToken: Mock.Random.guid(),
          },
        }
      } else {
        return {
          code: 401,
          msg: 'Invalid username or password',
          success: false,
          data: null,
        }
      }
    },
  },
] as MockMethod[]
