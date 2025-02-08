import Login from "@/pages/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute";
import Home from "@/pages/Home/Home";
import PagodaDetail from "@/pages/Home/PagodaDetail";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/:pagodaId" element={<PagodaDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
