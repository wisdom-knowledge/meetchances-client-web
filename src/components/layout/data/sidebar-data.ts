import { IconHome } from '@tabler/icons-react'
// removed team switching assets
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: '',
    email: '',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [],
  navGroups: [
    {
      title: '通用',
      items: [
        {
          title: '主页',
          url: '/home',
          icon: IconHome,
        },
      ],
    },
  ],
}
