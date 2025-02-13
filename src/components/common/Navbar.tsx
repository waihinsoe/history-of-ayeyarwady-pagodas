import { useNavigate } from "react-router";

export default function Navbar() {
    const navigate = useNavigate();

    // const handleLogout = () => {
    //     localStorage.removeItem("user");
    //     return navigate("/login");
    // };

    return (
        <div className="bg-primary p-5  ">
            <div className="max-w-6xl mx-auto flex  justify-between items-center">
                <h1
                    className="scroll-m-20 text-lg lg:text-2xl font-extrabold tracking-tight  text-white cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    History Of Ayeyarwady Pagodas
                </h1>

                {/* <Button variant={"outline"} onClick={handleLogout}>
                    Logout
                </Button> */}
            </div>
        </div>
    );
}
