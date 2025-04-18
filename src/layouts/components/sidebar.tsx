import React, { useMemo } from 'react'

import { Menu, MenuProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { renderMenuItems } from '@/utils/system'
import menu from '@/utils/menu'

type MenuItem = Required<MenuProps>['items'][number]

const Sidebar: React.FC = () => {
  const { t, i18n } = useTranslation()
  const menuItems: MenuItem[] = useMemo(() => renderMenuItems(menu, t), [menu, i18n.language])

  return (
    <div className="sidebar-horizontal">
      <Menu
        className="!border-0 dark:!border dark:!border-dark-colorBorder"
        defaultSelectedKeys={['app-1']}
        mode="horizontal"
        items={menuItems}
      />
    </div>
  )
}

export default Sidebar
