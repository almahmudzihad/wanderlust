import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/bookings/${user.id}`,
    {
      headers: { authorization: `Bearer ${token}` },
      cache: "no-store",
    }
  );

  const bookings = await res.json();

  if (!bookings.length)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          No Bookings Found
        </h1>
        <p className="text-gray-500 mb-6">
          You haven’t booked any destination yet.
        </p>

        <Link
          href="/destinations"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition"
        >
          Explore Destinations
        </Link>
      </div>
    );

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-4 py-16">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            My Bookings
          </h1>

          <p className="text-gray-500">
            Manage and view all your travel bookings
          </p>

        </div>

        {/* Booking List */}
        <div className="space-y-6">

          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >

              {/* Image */}
              <div className="md:w-[280px] h-[220px] relative">

                <Image
                  src={booking?.destinationImage}
                  alt={booking.destinationName}
                  fill
                  className="object-cover"
                  unoptimized
                />

              </div>

              {/* Content */}
              <div className="flex-1 p-6 space-y-3">

                <h3 className="text-2xl font-bold text-gray-800">
                  {booking.destinationName}
                </h3>

                <p className="text-gray-500">
                  📅 Departure Date:{" "}
                  <span className="font-medium text-gray-700">
                    {booking.deprecarDate}
                  </span>
                </p>

                <p className="text-gray-500">
                  💰 Price:{" "}
                  <span className="font-semibold text-emerald-600">
                    ${booking.price}
                  </span>
                </p>

                <p className="text-gray-400 text-sm">
                  Booking ID: {booking._id}
                </p>

                {/* Actions */}
                <div className="pt-3">
                  <BookingCancelAlert bookingId={booking._id} />
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default MyBookingPage;