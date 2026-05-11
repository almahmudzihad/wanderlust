import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";

import Image from "next/image";

const DestinationDetels = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`http://localhost:5000/destinations/${id}`, {
        cache: 'no-store'
    });

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

        <EditModal destination={destination} />
        <DeleteAlert destination={destination} />
    </div>

    {/* Hero Section */}
    <div className="max-w-7xl mx-auto relative rounded-[40px] overflow-hidden group">

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />

        <Image
            src={destination.imageUrl}
            alt={destination.destinationName}
            width={1400}
            height={800}
            className="w-full h-[350px] md:h-[650px] object-cover group-hover:scale-105 duration-700"
        />

        {/* Floating Glass Card */}
        <div className="absolute bottom-6 left-6 md:left-10 z-20 backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6 md:p-8 w-[90%] md:w-fit">

            <span className="bg-orange-500 text-white text-sm px-4 py-1 rounded-full">
                {destination.category}
            </span>

            <h1 className="text-4xl md:text-7xl font-black mt-4 leading-tight">
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
        <div className="sticky top-10 h-fit">

            <div className="relative overflow-hidden bg-gradient-to-b from-orange-500 to-orange-700 rounded-[35px] p-8 shadow-2xl">

                {/* Blur Circle */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/20 rounded-full blur-3xl" />

                <p className="text-orange-100 uppercase tracking-[3px] text-sm">
                    Starting From
                </p>

                <h2 className="text-6xl font-black mt-3">
                    ${destination.price}
                </h2>

                <p className="mt-2 text-orange-100">
                    Per Person
                </p>

                {/* Divider */}
                <div className="border-t border-white/20 my-8" />

                {/* Details */}
                <div className="space-y-5">

                    <div className="flex items-center justify-between">
                        <span className="text-orange-100">
                            Tour Type
                        </span>

                        <span className="font-semibold">
                            {destination.category}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-orange-100">
                            Duration
                        </span>

                        <span className="font-semibold">
                            {destination.duration}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-orange-100">
                            Destination
                        </span>

                        <span className="font-semibold">
                            {destination.city}
                        </span>
                    </div>

                </div>

                {/* Buttons */}
                <div className="space-y-4 mt-10">

                    <button className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:scale-105 duration-300">
                        Book Now
                    </button>

                    <button className="w-full border border-white/40 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black duration-300">
                        Save Wishlist
                    </button>

                </div>

            </div>
        </div>

    </div>
</section>
    );
};

export default DestinationDetels;