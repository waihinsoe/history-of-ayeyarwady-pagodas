import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
    const user = localStorage.getItem("user");
    console.log("user : ", user);

    return user ? <Outlet /> : <Navigate to={"/login"} replace />;
};
