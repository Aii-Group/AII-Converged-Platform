import React, { useEffect, useState, useMemo } from 'react'

import { Menu, MenuProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { findActiveKey, renderMenuItems } from '@/utils/system'
import menu from '@/utils/menu'

type MenuItem = Required<MenuProps>['items'][number]

const Sidebar: React.FC = () => {
  const { t, i18n } = useTranslation()
  const menuItems: MenuItem[] = useMemo(() => renderMenuItems(menu, t), [menu, i18n.language])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([location.pathname])

  useEffect(() => {
    setSelectedKeys(findActiveKey(menu, location.pathname))
  }, [menu, location.pathname])

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setSelectedKeys([e.key])
  }

  return (
    <div className="sidebar-horizontal">
      <Menu
        className="!border-0"
        defaultSelectedKeys={['app-1']}
        selectedKeys={selectedKeys}
        mode="horizontal"
        items={menuItems}
        onClick={handleMenuClick}
      />
    </div>
  )
}

export default Sidebar
