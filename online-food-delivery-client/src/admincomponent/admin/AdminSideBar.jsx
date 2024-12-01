/*import { Divider, Drawer, useMediaQuery } from '@mui/material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import SettingsIcon from '@mui/icons-material/Settings'
import ProductIcon from '@mui/icons-material/Inventory'
import ReportIcon from '@mui/icons-material/Report'
import LogoutIcon from '@mui/icons-material/Logout'

const AdminSideBar = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)")
  const menu = [
    {
      title: 'Dashboard',
      icon: <DashboardIcon />,
      path: '/admin/dashboard'
    },
    {
      title: 'Users',
      icon: <PeopleIcon />,
      path: '/admin/users'
    },
    {
      title: 'Products',
      icon: <ProductIcon />,
      path: '/admin/products'
    },
    {
      title: 'Reports',
      icon: <ReportIcon />,
      path: '/admin/reports'
    },
    {
      title: 'Settings',
      icon: <SettingsIcon />,
      path: '/admin/settings'
    },
    {
      title: 'Logout',
      icon: <LogoutIcon />,
      path: '/logout'
    }
  ]
  
  return (
    <Drawer 
            open={open} 
            onClose={handleClose} 
            variant={isSmallScreen ? 'temporary' : 'permanent'} 
            anchor='left' 
            sx={{ 
                zIndex: 1000, 
                '& .MuiDrawer-paper': { 
                    position: 'relative',
                    width: isSmallScreen ? '50vw' : '20vw'
                }
            }}
        >
            <div className='h-full flex flex-col justify-center text-xl gap-8 pt-16'>
                {menu.map((item, i) => (
                    <React.Fragment key={item.title}>
                        <div 
                            onClick={() => handleNavigate(item)} 
                            className='px-5 flex items-center space-x-5 cursor-pointer hover:bg-gray-100'
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                        {i !== menu.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </div>
            </Drawer>
  )
}

export default AdminSideBar
*/
import React from 'react'

const AdminSideBar = () => {
  return (
    <div>AdminSideBar</div>
  )
}

export default AdminSideBar