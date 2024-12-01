import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card, Chip, IconButton } from '@mui/material';

const RestaurantCard =() => {
  return (
    <Card className=" w-[18rem] relative">
    <div className="relative">
      <Chip   
        size="small"      
        color={true ? "success" : "error"}   
        label={true ? "open" : 'closed'}   
        className="absolute z-10 top-2 left-2"   // Ensure it's positioned within the card
      />
      <img  
        className="w-full h-[10rem] rounded-t-md object-cover"  
        src="https://th.bing.com/th?id=OIP.Vu-NDZBxKrZU1aPTbeejbgAAAA&w=154&h=104&c=7&bgcl=ac8939&r=0&o=6&dpr=1.5&pid=13.1" 
        alt="Restaurant" 
      />
    </div>
    <div className='p-4 textPart lg:flex w-full justify-between'> 
      <div className="space-y-1">     
        <p className="font-semibold text lg">fast food</p>  
        <p className="text-gray-500 text-sm">
          craving it all dive into our global fla     
        </p>  
      </div> 
      <div>     
        <IconButton> 
          {true ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
        </IconButton>  
      </div>  
    </div>  
  </Card>
  )
}

export default RestaurantCard


