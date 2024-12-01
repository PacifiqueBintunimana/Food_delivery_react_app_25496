import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HomeIcon from '@mui/icons-material/Home'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import EventIcon from '@mui/icons-material/Event'
import LogOutIcon from '@mui/icons-material/Logout'
import { Divider, Drawer, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../state/authentication/Action'

const menu = [
    {
        title: 'Orders',
        icon: <ShoppingBagIcon />,
        path: 'orders'
    },
    {
        title: 'Favorites',
        icon: <FavoriteIcon />,
        path: 'favorites'
    },
    {
        title: 'Address',
        icon: <HomeIcon />,
        path: 'address'
    },
    {
        title: 'Payments',
        icon: <AccountBalanceWalletIcon />,
        path: 'payments'
    },
    {
        title: 'Notification',
        icon: <NotificationsActiveIcon />,
        path: 'notifications'
    },
    {
        title: 'Events',
        icon: <EventIcon />,
        path: 'events'
    },
    {
        title: 'Logout',
        icon: <LogOutIcon />,
        path: 'logout'
    },
]

export const ProfileNavigation = ({ open, handleClose }) => {
    const navigate = useNavigate()
    const isSmallScreen = useMediaQuery("(max-width: 900px)")
     const dispatch= useDispatch();
    const handleNavigate = (item) => {
        // Special handling for Logout
        if (item.title === 'Logout') {
            // Add your logout logic here (e.g., clear token, reset authentication)
           // navigate('/login')
           dispatch(logout());
            navigate("/");
        }else{

        // Navigate to the specific profile section
        navigate(`/my-profile/${item.path}`)
    }  }

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