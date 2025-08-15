import microApp from '@micro-zoe/micro-app'
import { useUserStore } from '@/stores/system'

window.microApp = microApp

const ConvergedPlatformToken = useUserStore.getState().userInfo?.accessToken

microApp.start({
  iframe: true,
  'keep-alive': true,
})

// 统一下发数据
microApp.setGlobalData(
  {
    ConvergedPlatformToken,
  },
  () => {
    console.log('数据已经发送完成')
  },
)
