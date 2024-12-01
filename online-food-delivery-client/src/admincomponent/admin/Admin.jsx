import React from 'react'
import AdminSideBar from './AdminSideBar'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import LogOutIcon from '@mui/icons-material/Logout'


import { Dashboard, ShoppingBag } from '@mui/icons-material'
/*const menu=[


    {title:"dashboard",icon:<Dashboard/>,path:"/"},
    {title:"Oders",icon:<ShoppingBag/>,path:"/"},
    {title:"profile",icon:<AccountBoxIcon/>,path:"/"},
    {title:"users ",icon:<PeopleIcon/>,path:"/"},
    {title:"event and announcement",icon:<EventIcon/>,path:"/"},
    {
      title: 'Logout',
      icon: <LogOutIcon />,
      path: 'logout'
  },

    
    


]*/
export const Admin = () => {
  return (
    <div>

        <div classNam="lg flex justify-between">

            <div>
                <AdminSideBar/>
            </div>
            <div className='lg:w-[80%]'>

            </div>
        </div>
    </div>
  )
}
