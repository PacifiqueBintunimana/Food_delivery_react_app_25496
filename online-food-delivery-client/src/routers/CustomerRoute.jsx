import { Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import Home from "../component/home/Home";
import RestaurantDetails from "../component/restaurant/RestaurantDetails";
import Cart from "../component/cart/Cart";
import Profile from "../component/profile/Profile";
import Auth from "../component/Auth/Auth";

const CustomerRoute = () => {

  /*  const { token } = useSelector(state => state.auth)
    const navigate = useNavigate()

    const isTokenExpired = () => {
        if (!token) return true
        try {
            const decodedToken = jwtDecode(token)
            const currentTime = Date.now() / 1000
            return decodedToken.exp < currentTime
        } catch (error) {
            return true
        }
    }

    useEffect(() => {
        if (isTokenExpired()) {
            localStorage.removeItem('jwtToken');
            toast.error('Session expired, please login again')
            navigate('/account/login')  
        }
    }, [])*/

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/'element={<Home/>}/>
                <Route path='/account/:register'element={<Home/>}/>
                <Route path='/restaurant/:city/:title/id'element={<RestaurantDetails/>}/>
                <Route path='/cart'element={<Cart/>}/>
                <Route path='/my-profile/*'element={<Profile/>}/>
            
            {/**/}
                </Routes>
            
                <Auth/>
        </div>
    )
}

export default CustomerRoute;