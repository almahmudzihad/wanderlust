import { BookingCancelAlert } from '@/components/BookingCancelAlert';
import BookingCard from '@/components/BookingCard';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  });
  const user = session?.user;
  console.log(session.user.id);
  const res = await fetch(`http://localhost:5000/bookings/${user.id}`)
  const bookings = await res.json() 
  if(!bookings.length) return <h1 className='text-4xl font-bold text-center my-10'>No Bookings Found</h1>

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className='text-4xl font-bold text-center my-10'>My Bookings</h1>
      <div>
        
      </div>
      

      <div className=" mt-10">
        {bookings.map((booking) => (
          <div key={booking._id} className="flex items-center gap-5 mt-5 bg-gray-100">
            <Image
              className="h-[260px] "
              alt={booking.destinationName}
              src={booking?.destinationImage}
              height={400}
              width={400}
              unoptimized 
            />
            <div className="p-4 space-y-3">
              <h3 className="text-lg font-bold">{booking.destinationName}</h3>
              <p className="text-sm text-gray-500">Duration date : {booking.deprecarDate}</p>
              <p className="text-sm text-gray-500">Price: {booking.price}</p>
              <p className="text-sm text-gray-500">Booking id: {booking._id}</p>
              <BookingCancelAlert bookingId={booking._id} />

            </div>
            <div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBookingPage