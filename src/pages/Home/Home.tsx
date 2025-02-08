import { Button } from "@/components/ui/button";
import PagodasData from "../../data/pagodas.json";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Link, useNavigate } from "react-router";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Navbar from "@/components/common/Navbar";
import { motion } from "motion/react";

export default function Home() {
    const navigate = useNavigate();
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const handleOnClick = (id: number) => {
        navigate(`/${id}`);
    };

    return (
        <div>
            <Navbar />
            <div className=" max-w-6xl mx-auto py-10 flex flex-col items-center px-5">
                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl self-start mb-10">
                    Popular
                </h1>
                <Carousel
                    setApi={setApi}
                    className="w-full max-w-5xl"
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {PagodasData.slice(0, 5).map((pagoda, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card
                                        onClick={() => handleOnClick(pagoda.id)}
                                        className="cursor-pointer"
                                    >
                                        <CardHeader>
                                            <CardTitle className="leading-7 line-clamp-1">
                                                {pagoda.name}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex aspect-video items-center justify-center p-6">
                                            <img
                                                src={pagoda.image}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
                <div className="py-2 text-center text-sm text-muted-foreground mt-3 mb-10">
                    Slide {current} of {count}
                </div>
                <div className="grid place-items-center gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
                    {PagodasData.map((pagoda) => (
                        <motion.div
                            key={pagoda.id}
                            whileInView={{ scale: 1 }}
                            initial={{ scale: 0 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="leading-7 line-clamp-1">
                                        {pagoda.name}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <img
                                        className="object-cover aspect-square rounded-lg transition-transform duration-300 hover:scale-105"
                                        src={pagoda.image}
                                    />
                                </CardContent>
                                <CardFooter className="flex justify-end">
                                    <Link to={`/${pagoda.id}`}>
                                        <Button className="capitalize">
                                            see more
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
