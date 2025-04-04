import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App'
import UserRegistration from "../components/user/UserRegistration";
import Feedback from "../components/user/Feedback";
import UserLogin from "../components/user/UserLogin";
import UserHome from "../components/user/UserHome";
import Contact from "../components/common/Contact";
import UserEditProfile from "../components/user/UserEditProfile";
import AllContacts from "../components/admin/AllContacts";

const RoutePath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/user-registration' element={<UserRegistration/>}></Route>
        <Route path='/user-login' element={<UserLogin/>}></Route>
        <Route path='/userhome' element={<UserHome/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/feedback' element={<Feedback/>}></Route>
        <Route path='/usereditprofile' element={<UserEditProfile/>}></Route>

        <Route path='/allcontacts' element={<AllContacts/>}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default RoutePath;
