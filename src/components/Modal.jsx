import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function Modal({ title, desc, onClose }) {
    return (
        <div className='fixed bg-gray-400/60 w-full h-full z-20'>
            <div className='flex justify-center items-center my-20'>
                <div className='p-8 bg-white shadow-md hover:shodow-lg rounded-2xl max-w-xl'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <svg xmlns='http://www.w3.org/2000/svg'
                                className='w-32 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50' fill='none'
                                viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                            </svg>
                            <div className='flex flex-col ml-3'>
                                <div className='font-medium leading-none'>{title}</div>
                                <p className='text-sm text-gray-600 leading-none mt-1'>{desc}</p>
                            </div>
                        </div>
                        <button type='button' onClick={onClose} className='flex bg-red-500 p-2 ml-4 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full'><AiOutlineClose /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
