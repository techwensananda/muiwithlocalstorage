import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AdminRoute({ children }) {
    const isLoggedIn = useAuth();
    const auth = useSelector((state) => state.auth);
   

    return isLoggedIn  ? children : <Navigate to="/" />;
}
