import { API_URL } from "../../config/api";
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import axios from "axios";

export const registerUser=(reqData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try {
        const{data}=await axios.post(`${API_URL}/auth/signup`,reqData.userData)
        if(data.jwt)localStorage.setItem("jwt",data.jwt);
        if(data.role==="ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        }
        else{
            reqData.navigate("/")
        }
        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
        console.log("registered successfully" ,data)

    } catch (error) {
        dispatch({type:REGISTER_FAILURE,payload:error})
       console.log("error",error) 
    }
}
export const LoginUser=(reqData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try {
        const{data}=await axios.post(`${API_URL}/auth/signin`,reqData.userData)
        if(data.jwt)localStorage.setItem("jwt",data.jwt);
        if(data.role==="ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        }
        else{
            reqData.navigate("/")
        }
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
        console.log("login success" ,data)

    } catch (error) {
        dispatch({type:LOGIN_FAILURE,payload:error})
       console.log("error",error) 
    }
}
export const getUser=(jwt)=>async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try {
        const{data}=await axios.get(`${API_URL}/api/users/profile`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        })
       
      
        dispatch({type:GET_USER_SUCCESS,payload:data})
        console.log("user profile" ,data)
    } catch (error) {
        dispatch({type:GET_USER_FAILURE,payload:error})
       console.log("error",error) 
    }
}
export const addToFavorite=({jwt,restaurantId})=>async(dispatch)=>{
    dispatch({type:ADD_TO_FAVORITE_REQUEST})
    try {
        const{data}=await axios.put(`${API_URL}/api/restaurants/${restaurantId}/add-favorite`,{},{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        })
       
      
        dispatch({type:ADD_TO_FAVORITE_SUCCESS,payload:data})
        console.log("added to favorite" ,data)
    } catch (error) {
        dispatch({type:ADD_TO_FAVORITE_FAILURE,payload:error})
       console.log("error",error) 
    }
}
export const logout=()=>async(dispatch)=>{
    dispatch({type:ADD_TO_FAVORITE_REQUEST})
    try {
     localStorage.clear();
      
        dispatch({type:LOGOUT})
        console.log("Logout success" ,)
    } catch (error) {
       console.log("error",error) 
    }
}