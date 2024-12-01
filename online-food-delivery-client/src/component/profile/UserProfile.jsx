import { AccountCircle } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useEffect } from 'react'

const UserProfile=()=> {
/*
  const dispatch = useDispatch()
  const { userData, jwt } = useSelector(state => state.auth)
  const navigate = useNavigate()

 useEffect(() => {
    if (!jwt) {
      toast.success("Logged out successfully")
      setTimeout(() => {
        navigate('/account/login'); 
      }, 2000);
    }
  }, [user, navigate]);
*/
  const handleLogout = () => {
    
  }

  return (
    <div className=' min-h-[80vh] flex flex-col justify-center items-center'>
      <div className=' flex flex-col items-center justify-center'>
          <AccountCircle sx={{ fontSize: '9rem'}}/>
          <h1 className=' py-5 text-2xl font-semibold'>paccy </h1>
          <p>paccy@gmail.com</p>
          <Button variant='contained' sx={{ margin: "2rem 0rem", backgroundColor: "red", color: 'white', outline: 'none', border: 'none' }} onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default UserProfile;