import { useEffect } from "react";
import { useNavigate } from "react-router";

function RedirectToLogin() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/login", { replace: true });
  }, []);
  return null;
}
export default RedirectToLogin;
