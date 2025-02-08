import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({ name: "", password: "" });
    const [error, setError] = useState("");

    const handleLogin = () => {
        const { name, password } = form;
        const isValid = name.trim() && password.trim();
        if (!isValid) return;

        if (name === "admin") {
            if (password === "admin") {
                localStorage.setItem("user", JSON.stringify(form));
                return navigate("/");
            } else {
                return setError("Wrong password!");
            }
        } else {
            return setError("User doesn't exist!");
        }
    };

    const isDisabled = form.name.length > 0 && form.password.length > 0;
    return (
        <div className="grid place-items-center h-screen p-4 bg-gray-100">
            <Card className="w-full max-w-[350px]">
                <CardHeader>
                    <CardTitle className="text-center text-xl">
                        Login Account
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {error && (
                        <Alert variant="destructive" className="mb-4">
                            <div className="flex items-center gap-4">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{error}</AlertDescription>
                            </div>
                        </Alert>
                    )}
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter your name"
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button
                        className="w-full"
                        onClick={handleLogin}
                        disabled={!isDisabled}
                    >
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
