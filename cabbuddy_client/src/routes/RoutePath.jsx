import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App'
import UserRegistration from "../components/user/UserRegistration";
const RoutePath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/user-registration' element={<UserRegistration/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePath;
