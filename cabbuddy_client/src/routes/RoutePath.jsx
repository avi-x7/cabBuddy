import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App'
import UserRegistration from "../components/user/UserRegistration";
import Feedback from "../components/common/Feedback";

const RoutePath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/user-registration' element={<UserRegistration/>}></Route>
        <Route path='/feedback' element={<Feedback/>}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default RoutePath;
