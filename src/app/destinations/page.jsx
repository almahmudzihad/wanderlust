import DestinationCard from '@/components/DestinationCard';
import React from 'react'

const DestinationsPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/destinations`)
    const destinations = await res.json()
    
  return (
    <div className="max-w-7xl mx-auto">
            <h1 className='text-4xl font-bold text-center my-10'>All destinations</h1>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}/>)
                }

            </div>

        </div>

  )
}

export default DestinationsPage