import React from 'react'
import RestaurantCard from '../restaurant/RestaurantCard'
function Favorite  ()  {
  return ( 
  
  <div className=' p-8'>
<h1 className='py-5 text-xl font-semibold text-center'>my favorites</h1>

<div className='flex flex wrap gap-3 justify-center'>
    {[1,1,1].map((item)=><RestaurantCard/>)}
</div>


  {/*
    favorites.length > 0 ? (
      <div className="flex flex-wrap lg:gap-10 gap-3 justify-center">
        {favorites?.map((restaurant, index) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </div>
    ) : <h1 className="text-center text-2xl mt-14">No favorites yet</h1>
  */}
</div>
)
}

export default Favorite