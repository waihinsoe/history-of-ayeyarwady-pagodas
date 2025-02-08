import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PagodasData from "../../data/pagodas.json";
import Navbar from "@/components/common/Navbar";

export default function PagodaDetail() {
    const { pagodaId } = useParams();
    const [pagoda, setPagoda] = useState<any>({});

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);

        const foundPagoda = PagodasData.find(
            (item) => item.id === Number(pagodaId)
        );

        setPagoda(foundPagoda);
    }, [pagodaId]); // Add pagodaId as a dependency

    return (
        <div>
            <Navbar />
            <div className="max-w-3xl mx-auto py-10 flex  flex-col px-5">
                <h1 className=" text-xl lg:text-2xl font-extrabold mb-10 leading-9">
                    {pagoda.name}
                </h1>
                <img
                    src={pagoda.image}
                    className="aspect-[10/8] object-cover rounded-lg mb-10"
                />
                <p className="leading-10 indent-10 text-justify">
                    {pagoda.history}
                </p>
            </div>
        </div>
    );
}
