import { Divider } from 'antd'

import { importImg } from '@/utils/common'
import { useLanguageStore, useThemeStore } from '@/stores/system'
import Sidebar from './sidebar'

import Actions from './actions'
import UserAvatar from './userAvatar'

const Header: React.FC = () => {
  const { theme } = useThemeStore()
  const { language } = useLanguageStore()
  const Logo = importImg('png', `asiainfo-${theme}-${language}.png`)
  return (
    <div className="header">
      <div className="flex items-center w-full">
        <div className="flex items-center w-226">
          <img src={Logo} alt="logo" className="h-40" />
        </div>
        <Sidebar />
      </div>
      <div className="flex items-center gap-16">
        <Actions />
        <Divider type="vertical" orientation="center" />
        <UserAvatar />
      </div>
    </div>
  )
}
export default Header
