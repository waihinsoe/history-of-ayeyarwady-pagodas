import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("user");
        return navigate("/login");
    };

    return (
        <div className="bg-primary p-5 sticky top-0 z-50 ">
            <div className="max-w-6xl mx-auto flex  justify-between">
                <h1
                    className="scroll-m-20 text-2xl font-extrabold tracking-tight  text-white cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    History of Pagodas
                </h1>
                <Button variant={"outline"} onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </div>
    );
}
