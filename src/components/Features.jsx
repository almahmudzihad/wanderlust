import Link from "next/link";
import DestinationCard from "./DestinationCard";

const Features = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/features`,
    {
      cache: "no-store",
    }
  );

  const features = await res.json();

  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50 text-gray-900 px-4 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">

          <div className="max-w-2xl">
            <p className="text-emerald-600 uppercase tracking-[8px] font-semibold mb-3">
              Featured Destinations
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Explore The World’s <br />
              Most Beautiful Places
            </h1>

            <p className="text-gray-600 text-lg">
              Handpicked travel experiences for adventure lovers,
              nature explorers, and dream vacation seekers.
            </p>
          </div>

          <div>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-black font-semibold px-6 py-3 rounded-full"
            >
              View All Destinations →
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <DestinationCard
              key={feature._id}
              destination={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;