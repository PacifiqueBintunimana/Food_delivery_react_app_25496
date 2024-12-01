//import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/DarkTheme';
import Navbar from './component/Navbar';
import Home from './component/home/Home';
import RestaurantDetails from './component/restaurant/RestaurantDetails';
import Cart from './component/cart/Cart';
import CustomerRoute from './routers/CustomerRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/state/authentication/Action';
import Routers from './routers/Routers';

function App() {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
  const{auth}=useSelector(store=>store)
  useEffect(()=>{dispatch(getUser(auth.jwt || jwt))

  },[auth.jwt])
  return (
   <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
   
   <Routers/>
   </ThemeProvider>
     
    
    
   
  );
}

export default App;
