import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateRestaurant } from '../admincomponent/CreateRestaurant'
import { Admin } from '../admincomponent/admin/Admin'

export const AdminRoute = () => {
  return (
    <div>
<Routes>

<Route path='/*'element ={false?<CreateRestaurant/>:<Admin/>}>

</Route>

</Routes>


    </div>
  )
}
