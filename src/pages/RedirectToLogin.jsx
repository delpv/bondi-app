import { useEffect } from "react";
import { useNavigate } from "react-router";

function RedirectToLogin() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/login", { replace: true });
  }, [navigate]);
  return null;
}
export default RedirectToLogin;
