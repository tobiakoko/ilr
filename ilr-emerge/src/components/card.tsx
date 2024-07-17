import React, { JSXElementConstructor } from 'react'
import Image from 'next/image'




interface Props {
    alt: string,
    image: JSX.Element,
    speaker: String,
    name: String,
  }

export default function Card({props: Props }:JSX.Element) {
  return (
    <div className='relative'>
        <div className='flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'>
            <div className='opacity:1'>
                <Image 
                    src={Props.image}
                    alt={Props.alt}
                    className="h-48 w-full object-cover"
                />
            </div>
            <div className='flex flex-grow flex-row items-end justify-between p-2'>
                <div>
                    <div className='text-zinc-950 dark:text-zinc-50'>{Props.speaker}</div>
                    <div className='text-zinc-700 dark:text-zinc-400'>{Props.name}</div>
                </div>
                <button className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 
                select-none appearance-none items-center justify-center rounded-lg 
                border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 
                hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]' type='button'>
                    <svg className='lucide lucide-plus' xmlns='http://www.w3.org/2000/svg' 
                    width={12} height={12} viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round"
                    >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}
