import React from 'react'
import Image from 'next/image'
import { speakers } from "@/utils/data";

export default function Card() {
  return (
    <div className="flex flex-col items-center md:flex-row md:space-x-2">
      {speakers.map(speaker => (
        <div key={speaker.position} className="mt-4 max-w-64 md:max-w-sm justify-center bg-white overflow-hidden hover:shadow-md rounded-t hover:rounded">
          <div className='overflow-hidden'>
            <div className='transform-transition duration-300 hover:scale-110'>
                <Image 
                src={speaker.image}
                alt={speaker.name}
                layout='responsive'
                className="object-cover w-full h-auto rounded-b hover:rounded-none"
                />
            </div>
          </div>
          <div className="flex flex-grow flex-row items-end justify-between p-1 pt-4 bg-transparent">
            <div>
              <div className=" text-l font-bold tracking-tight text-gray-900">{speaker.name}</div>
              <div className="mb-3 text-xs font-light text-gray-700 tracking-tight">{speaker.designation}</div>
            </div>
          </div>    
        </div>  
      ))}
    </div>
  )
}
