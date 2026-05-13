"use client";
import { authClient } from '@/lib/auth-client';
const BookingCard = ({ destination }) => {
      const { data: session } = authClient.useSession();

    const handelbooking = async () => {
        const bookingData = { 
            userId: session?.user.id,
            userName: session?.user.name,
            userImage: session?.user.image,
            destinationId: destination._id,
            destinationName: destination.destinationName,
            price: destination.price,
            deprecarDate: destination.departureDate,

         };

        const res = await fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        });
        const result = await res.json();
        console.log(result);
    }

  return (
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

                    <button onClick={handelbooking} className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:scale-105 duration-300">
                        Book Now
                    </button>

                    <button className="w-full border border-white/40 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black duration-300">
                        Save Wishlist
                    </button>

                </div>

            </div>
        </div>
  )
}

export default BookingCard