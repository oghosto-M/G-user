import FirstPage from "../Components/First-Page/FirstPage";
import About from "./../Components/AboutPage/about";
import ContactUs from "./../Components/ContactUs/contactUs";
import Login from "./../Components/Login-Register/Login/login";
import Register from "./../Components/Login-Register/Register/register";
import Error from "./../Components/Error404NotFound/errorNotFound";
let routes = [
        {path:'/G-user', element:<FirstPage></FirstPage>},    
        {path:'/about', element:<About></About>},
        {path:'/cotactus', element:<ContactUs></ContactUs>},
        {path:'/login', element:<Login></Login>},  
        {path:'/register', element:<Register></Register>},  
        {path:'/controler', element:'product'},  
        {path:'*', element:<Error></Error>},
]
export default routes