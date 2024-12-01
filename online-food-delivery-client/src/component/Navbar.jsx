import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import  "./navbar.css";
import { Person } from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const Navigate= useNavigate()
    const {auth}= useSelector(store=>store);
    const handleAvatarClick=()=> {
       if (auth.user.role==="ROLE_CUSTOMER"){
        Navigate("/my-profile")
        }else{
            Navigate("admin/restaurant")
        }
    }
  return (
    <div className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>


<div className='lg:mr-10 cursor-pointer flex item-center space-x-4'>
    <li onClick={()=>Navigate("/")} className=
    "logo font-semibold text-gray-300 text-2xl">
        food express
    </li>

</div>
<div className="flex item-center space-x-2 lg:space-x-10">
<div className=''>
    <IconButton>
        <SearchIcon sx={{fontSize:"1.5rem"}}/>

    </IconButton>
</div>
<div className=''>
    {auth.user?<Avatar onClick={handleAvatarClick} sx={{bgcolor :"white", color:pink.A400}}>{auth.user?.fullName[0].toUpperCase()}

    </Avatar>:<IconButton onClick={()=>Navigate("/account/login")}>
    
    <Person/></IconButton>}

</div>
<div className=''>
<IconButton>
    <Badge color="primary" badgeContent={3}>
    <AddShoppingCartIcon sx={{fontSize:"1.5rem"}}/>


    </Badge>

    </IconButton>
</div>
 </div>

</div>


  );
};
export default Navbar;

