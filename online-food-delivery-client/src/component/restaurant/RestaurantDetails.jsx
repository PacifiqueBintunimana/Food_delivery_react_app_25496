import { Divider, FormControl, FormControlLabel,  Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import MenuCard from './MenuCard';
import Grid from '@mui/material/Grid2';
const RestaurantDetails = () => {
    
  /* const theme = useTheme();
   const dispatch = useDispatch()
   const { restaurant } = useSelector(state => state.restaurants)
   const navigate = useNavigate()

   const { restaurantId } = useParams()

   useEffect(() => {
      dispatch(fetchRestaurantById(restaurantId))
   }, [restaurantId])
*/
   const categories = [
      "pizza",
      "biriyani",
      "burger",
      "chicken",
      "rice"
   ]

   const foodTypes = [
      { label: "All", value: "all" },
      { label: "Vegetarain Only", value: "vegetarain" },
      { label: "Non-Vegetarain", value: "non_vegetarain" },
      { label: "Seasonal", value: "seasonal" },
   ]

   const [foodType, setFoodType] = useState('all')

const handleFilter = (e) => {
      console.log(e.target.value,e.target.name)
 }

   const menucard = [1, 1, 1, 1]
  return (
    <div className=' px-5 lg:px-20 py-6'>
    <section>
       <h3 className=' text-gray-500 py-2'>home/rwanda/rwandan food</h3>
       <div>
       <Grid container spacing={2}>
  <Grid item xs={12}>
    <img 
      className='w-full h-[40vh] object-cover' 
      src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400" 
      alt="Restaurant" 
    />
  </Grid>
  <Grid item xs={12} lg={6}>
    <img 
      className='w-full h-[40vh] object-cover' 
      src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400" 
      alt="Restaurant" 
    />
  </Grid>
  <Grid item xs={12} lg={6}>
    <img 
      className='w-full h-[40vh] object-cover' 
      src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400" 
      alt="Restaurant" 
    />
  </Grid>
</Grid>
       </div>
       <div className=' pt-3 pb-5'>
          <h1 className=' text-4xl font-semibold '>{/*restaurant?.name,{restaurant?.description}*/} fast food snaks</h1>
             <p className=' text-gray-500 flex items-center mt-1'>
                
                ojdfiokw'nsfjmjmjdfkk   oampokepfiuh34pxqaxiuqherfjckpsnhigjroe qw0j990iihg0skobpij0fckhirkkij     jivjro  lposohqjjio
             ojdfiokw'nsfjmjmjdfkk   oampokepfiuh34pxqaxiuqherfjckpsnhigjroe qw0j990iihg0skobpij0fckhirkkij     jivjro  lposohqjjio
             ojdfiokw'nsfjmjmjdfkk   oampokepfiuh34pxqaxiuqherfjckpsnhigjroe qw0j990iihg0skobpij0fckhirkkij     jivjro  lposohqjjio
             </p>
             <div>
                          <p className=' text-gray-500 flex items-center gap-3'>
             <AccessTimeIcon /><span> {/*color='warning' restaurant?.openingHours*/} yuiopoiuytyuoi(Today)</span></p>
            <p className=' text-gray-500 flex items-center gap-3'><PlaceIcon  /> <span>{/*restaurant?.address.street*/}hjkl;'lkjhhjkml,;.</span></p>
             </div>
          
       </div>
    </section>
    <Divider />
    <section className=' pt-[2rem] lg:flex relative'>
       <div className=' space-y-10 lg:w-[20%] filter'>
          <div className=' box space-y-5 lg:sticky top-28'>
             <div>
                <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                   Food Type
                </Typography>
                <FormControl className=' py-10 space-y-5' component={"fieldset"}>
                   <RadioGroup onChange={handleFilter} name=' food_type' value={foodType}>
                      {
                         foodTypes.map((item) => (
                            <FormControlLabel
                               key={item.value}
                               value={item.value}
                               control={<Radio />}
                               label={item.label}
                            />
                         ))
                      }
                   </RadioGroup>
                </FormControl>
             </div>
             <Divider />
             <div>
                <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                   Food Category
                </Typography>
                <FormControl className=' py-10 space-y-5' component={"fieldset"}>
                   <RadioGroup onChange={handleFilter} name=' food_type' value={foodType}>
                      {
                         categories.map((item) => (
                            <FormControlLabel
                               key={item}
                               value={item}
                               control={<Radio />}
                               label={item}
                            />
                         ))
                      }
                   </RadioGroup>
                </FormControl>
             </div>
          </div>
       </div>
       <div className=' space-y-5 lg:w-[80%] lg:pl-10 sm:mt-6'>
          {
             menucard.map((item) => 
                <MenuCard />
             )
          } 
       </div>
    </section>
 </div>
  );
}

export default RestaurantDetails