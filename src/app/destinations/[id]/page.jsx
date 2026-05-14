import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import Image from "next/image";


const DestinationDetels = async ({ params }) => {
    const { id } = await params;
    const {token} = await auth.api.getToken({ headers: await headers() });
    console.log(token);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/destinations/${id}`, {
        headers : { authorization: `Bearer ${token}` },
    },
    {
        cache   : 'no-cache',
    }
);

    const destination = await res.json();

    return (
        <section className="min-h-screen bg-[#465069] text-white px-4 md:px-10 py-10 overflow-hidden">

    {/* Top Action */}
    <div className="max-w-7xl mx-auto flex items-center justify-between mb-8">
        <div>
            <p className="text-orange-400 uppercase tracking-[4px] text-sm">
                Explore Destination
            </p>

            <h1 className="text-3xl md:text-5xl font-bold mt-2">
                Travel Details
            </h1>
        </div>
        <div className="flex items-center gap-4">
            <EditModal destination={destination} />
            <DeleteAlert destination={destination} />
        </div>
    </div>

    {/* Hero Section */}
    <div className="max-w-7xl mx-auto relative rounded-[40px] overflow-hidden group">

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />

        <Image
            src={destination.imageUrl}
            alt={destination.destinationName}
            width={800}
            height={600}
            className="w-full h-[350px] md:h-[600px] object-cover group-hover:scale-105 duration-700"
        />

        {/* Floating Glass Card */}
        <div className="absolute bottom-6 left-6 md:left-10 z-20 backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6 md:p-8 w-[90%] md:w-fit">

            <span className="bg-orange-500 text-white text-sm px-4 py-1 rounded-full">
                {destination.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-black mt-4 leading-tight">
                {destination.destinationName}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-5 text-gray-200">

                <div className="flex items-center gap-2">
                    <span className="text-orange-400 text-xl">📍</span>
                    <p>{destination.city}, {destination.country}</p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-orange-400 text-xl">🕒</span>
                    <p>{destination.duration}</p>
                </div>

            </div>
        </div>
    </div>

    {/* Main Content */}
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mt-10">

        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">

            {/* About */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[30px] p-8">

                <h2 className="text-3xl font-bold mb-6">
                    About This Journey
                </h2>

                <p className="text-gray-300 leading-9 text-lg">
                    {destination.description}
                </p>

            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.03] border border-white/10 rounded-[30px] p-6 hover:-translate-y-2 duration-300">

                    <div className="text-4xl mb-4">📅</div>

                    <p className="text-gray-400">
                        Departure Date
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                        {destination.departureDate}
                    </h3>
                </div>

                <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.03] border border-white/10 rounded-[30px] p-6 hover:-translate-y-2 duration-300">

                    <div className="text-4xl mb-4">🌍</div>

                    <p className="text-gray-400">
                        Country
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                        {destination.country}
                    </h3>
                </div>

            </div>

        </div>

        {/* Right Booking Card */}
        <BookingCard destination={destination} />
        

    </div>
</section>
    );
};

export default DestinationDetels;