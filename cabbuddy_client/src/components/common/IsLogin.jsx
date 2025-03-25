import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const IsLogin = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("key");
  useEffect(() => {
    if (!token || token == null) {
      Swal.fire("Please login before continue ... 🚗🚕");

      navigate("/user-login");
    }
  }, []);
  return <></>;
};

export default IsLogin;
