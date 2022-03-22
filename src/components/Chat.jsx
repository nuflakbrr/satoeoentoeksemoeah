import React from 'react'
import Me from '../assets/images/Me.png'

export default function Chat({ text }) {
    return (
        <div className='flex flex-col p-5'>
            <div className='flex items-end justify-end'>
                <div className='flex flex-col md:text-md text-sm max-w-sm mx-2 items-center'>
                    <span className='px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-700 text-white'>{text}</span>
                </div>
                <img src={Me} alt='Naufal Akbar Nugroho' className='md:w-18 md:h-18 w-16 h-16 rounded-full' />
            </div>
        </div>
    )
}
