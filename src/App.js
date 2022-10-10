import { BrowserRouter, Routes, Route } from "react-router-dom"
import appContext from "./Contexts/AppContext.js"
import { useState } from "react"
import LoginScreen from "./Pages/Login/LoginScreen.jsx"
import SignUpScreen from "./Pages/SignUp/SignUpScreen.jsx"
import HomeScreen from "./Pages/Home/HomeScreen.jsx"
import ProfileScreen from "./Pages/Profile/ProfileScreen.jsx"

import AboutUsScreen from "./Pages/AboutUs/AboutUsScreen.jsx"
import SettingsScreen from "./Pages/Settings/SettingsScreen.jsx"
import HelpScreen from "./Pages/Help/HelpScreen.jsx"

import PublishScreen from "./Pages/Publish/PublishScreen.jsx"
import VisitsScreen from "./Pages/Visits/VisitsScreen.jsx"
import PlacesScreen from "./Pages/Places/PlacesScreen.jsx"
import Themes from "./Components/Theme/Theme.js"
import {ThemeProvider} from "styled-components"
import Global from "./Components/Theme/Global.js"
import EditScreen from "./Pages/EditScreen/EditScreen.jsx"
import EditPublishScreen from "./Pages/EditPublishScreen/EditPublishScreen.jsx"

export default function App(){
    //login
   const [email, setEmail]=useState("")
   const [password, setPassword]=useState("")
   const [countries , setCountries]=useState([])
   const [name , setName]=useState("")
   const [country , setCountry]=useState("")
   const [urlImage , setUrlImage]=useState("")
    const [token , setToken]=useState()
    const [login , setLogin]=useState()

    //layout
    const [view , setView]=useState(false)
    const[viewNavBarr , setViewNavBarr]=useState("list-outline")
    const [appear , setAppear]=useState(false)
    const [desappear , setDesappear]=useState(true)

    //Publishes
  
    const  [options , setOptions]=useState([])
    const [userPublishes , setUserPublishes ]=useState([])
    const [publishes , setPublishes ]=useState([])
    const [user , setUser]=useState([])
    const [choose , setChoose]=useState("")
    const [localizationName , setLocalizationName]=useState("")
    const [latitude , setLatitude ]=useState(0)
    const [longitude , setLongitude ]=useState(0)
    const [autocomplete , setAutocomplete]=useState("")

    //Options
    const  [optionName , setOptionName]=useState("")
    const  [nameOption , setNameOption]=useState("")

    //Theme
    const  [theme , setTheme]=useState("ligth")

    return(<>
    
    <appContext.Provider value={{email , setEmail , password , setPassword , appear, setAppear,desappear,setDesappear, view , setView , setViewNavBarr , viewNavBarr, name , setName , token , setToken , name , setName    , country , setCountry , urlImage , setUrlImage , options , setOptions , login , setLogin , publishes , setPublishes , user , setUser , userPublishes , setUserPublishes ,choose , setChoose , setCountries , countries , latitude , setLatitude , longitude , setLongitude  , setLocalizationName , localizationName,optionName,setOptionName , theme , setTheme  , autocomplete , setAutocomplete , nameOption , setNameOption}} >
    <ThemeProvider theme={Themes[theme]} >
        <Global/>
   <BrowserRouter>
    <Routes>
        
        <Route  path="/" element={<LoginScreen/>}></Route> 
        <Route  path="/sign-up" element={<SignUpScreen/>}></Route> 
        <Route  path="/home" element={<HomeScreen/>}></Route> 
        <Route  path="/profile/:id" element={<ProfileScreen/>}></Route> 
        <Route  path="/settings" element={<SettingsScreen/>}></Route> 
        <Route  path="/aboutUs" element={<AboutUsScreen/>}></Route> 
        <Route  path="/help" element={<HelpScreen/>}></Route> 
        <Route  path="/publish" element={<PublishScreen/>}></Route> 
        <Route  path="/visits" element={<VisitsScreen/>}></Route> 
        <Route  path="/places" element={<PlacesScreen/>}></Route> 
        <Route  path="/edit/:userId" element={<EditScreen/>}></Route> 
        <Route  path="/editPublish/:publishId" element={<EditPublishScreen/>}></Route> 
       
    </Routes>    
    </BrowserRouter>
   
    </ThemeProvider>
    </appContext.Provider>
    
    </>)
}
//  <Route  path="/home/:idDaOption" element={<OptionScreen/>}></Route> 
