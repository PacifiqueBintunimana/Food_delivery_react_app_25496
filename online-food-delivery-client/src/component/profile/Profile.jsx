import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Events from "./Events"
import Address from "./Address"
import { ProfileNavigation } from "./ProfileNavigation"
import Orders from "./Oders"
import UserProfile from "./UserProfile"
import Favorite from "./Favorite"


const Profile=()=> {

    const [openSideBar, setOpenSideBar] = useState(false)

    return (
        <div className=' lg:flex justify-between'>
            <div className=' sticky h-[80vh] lg:w-[20%]'>
                <ProfileNavigation open={openSideBar}/>
            </div>
            <div className=' lg:w-[80%]'>
                <Routes>
                    <Route path='/' element={<UserProfile />}/>
                    <Route path='/orders' element={<Orders />}/>
                    <Route path='/favorites' element={<Favorite />}/>
                    <Route path='/events' element={<Events />}/>
                    <Route path='/address' element={<Address />}/>
                </Routes>
            </div>
        </div>
    )
}

export default Profile