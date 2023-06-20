import React from 'react'
import InfoIcon from '@mui/icons-material/Info'
import ModeIcon from '@mui/icons-material/Mode'
import LogoutIcon from '@mui/icons-material/Logout'

export const SideBarData = [
  {
    title: 'About',
    icon: <InfoIcon />,
    link: '/about',
  },
  {
    title: 'Customize profile',
    icon: <ModeIcon />,
    link: '/edit',
  },
  
  {
    title: 'Logout',
    icon: <LogoutIcon />,
    link: '/logout',
  },
]
