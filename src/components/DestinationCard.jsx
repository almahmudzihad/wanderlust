import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

import { FiExternalLink } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";

const DestinationCard = ({ destination }) => {
  const {
    _id,
    imageUrl: image,
    price,
    destinationName,
    duration,
    country,
  } = destination;

  return (
    <div className="group overflow-hidden rounded-xl border border-white/20 bg-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl m-2">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-102"
          alt={destinationName}
          src={image}
          height={400}
          width={400}
          unoptimized
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

        {/* Price Badge */}
        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-cyan-600 shadow-md backdrop-blur-md">
          ${price}
        </div>

        {/* Country */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-md">
          <LuMapPin className="text-lg" />
          {country}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        
        {/* Title */}
        <div>
          <h2 className="line-clamp-1 text-2xl font-extrabold text-gray-800 transition duration-300 group-hover:text-cyan-600">
            {destinationName}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <FaRegCalendar className="text-cyan-500" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gray-200"></div>

        {/* Button */}
        <Link href={`/destinations/${_id}`}>
          <Button
            radius="full"
            className="w-full bg-cyan-500 font-semibold text-white transition-all duration-300 hover:bg-cyan-600"
          >
            <FiExternalLink className="text-lg" />
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;