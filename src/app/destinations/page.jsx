import DestinationCard from "@/components/DestinationCard";
import React from "react";
import Link from "next/link";

const DestinationsPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/destinations`,
    { cache: "no-store" }
  );

  const destinations = await res.json();

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 text-gray-900 px-4 py-16">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-emerald-600 uppercase tracking-[8px] font-semibold mb-3">
            Travel Destinations
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-5">
            Explore Amazing Places<br className="hidden md:block" />
            Around The World
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            Discover breathtaking landscapes, hidden gems, and unforgettable
            travel experiences curated for adventure lovers.
          </p>

        </div>

        {/* Top Actions */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">

          <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-gray-200 shadow-sm">

            <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></div>

            <p className="text-gray-700 font-medium">
              <span className="text-emerald-600 font-bold">
                {destinations.length}
              </span>{" "}
              destinations available
            </p>

          </div>

          <Link
            href="/add-destination"
            className="bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-full shadow-md"
          >
            + Add Destination
          </Link>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {destinations.map((destination) => (
            <div
              key={destination._id}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <DestinationCard destination={destination} />

            </div>
          ))}

        </div>

        {/* Empty State */}
        {destinations.length === 0 && (
          <div className="text-center py-24 bg-white border border-gray-100 rounded-3xl shadow-sm">

            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              No Destinations Found
            </h2>

            <p className="text-gray-500 mb-6">
              Start adding amazing travel destinations.
            </p>

            <Link
              href="/add-destination"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Add Destination
            </Link>

          </div>
        )}

      </div>
    </section>
  );
};

export default DestinationsPage;