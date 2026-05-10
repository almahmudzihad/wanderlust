import Image from "next/image";

const DestinationDetels = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`http://localhost:5000/destinations/${id}`, {
        cache: 'no-store'
    });

    const destination = await res.json();

    return (
        <section className="min-h-screen bg-[#0b1120] text-white px-4 md:px-10 py-10">

            {/* Hero */}
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden">

                <Image
                    src={destination.imageUrl}
                    alt={destination.destinationName}
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute bottom-0 left-0 p-6 md:p-10 z-10">
                    <span className="bg-orange-500 px-4 py-1 rounded-full text-sm">
                        {destination.category}
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mt-4">
                        {destination.destinationName}
                    </h1>

                    <p className="mt-3 text-gray-300">
                        {destination.city}, {destination.country}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="grid lg:grid-cols-3 gap-8 mt-10">

                {/* Left */}
                <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8">

                    <h2 className="text-3xl font-bold mb-5">
                        About Tour
                    </h2>

                    <p className="text-gray-300 leading-8">
                        {destination.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-5 mt-10">

                        <div className="bg-white/5 p-5 rounded-2xl">
                            <p className="text-gray-400">Duration</p>
                            <h3 className="text-xl font-semibold mt-1">
                                {destination.duration}
                            </h3>
                        </div>

                        <div className="bg-white/5 p-5 rounded-2xl">
                            <p className="text-gray-400">Departure Date</p>
                            <h3 className="text-xl font-semibold mt-1">
                                {destination.departureDate}
                            </h3>
                        </div>

                    </div>
                </div>

                {/* Right Card */}
                <div className="bg-orange-500 rounded-3xl p-8 h-fit">

                    <p className="text-lg">Starting From</p>

                    <h2 className="text-5xl font-bold mt-2">
                        ${destination.price}
                    </h2>

                    <button className="w-full bg-white text-black py-4 rounded-2xl mt-8 font-semibold hover:scale-105 transition">
                        Book Now
                    </button>

                </div>
            </div>
        </section>
    );
};

export default DestinationDetels;