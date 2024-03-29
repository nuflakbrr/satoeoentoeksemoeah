import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

export default function AddFormModul({ addBook, onClose }) {
    return (
        <div>
            <div className="fixed bg-gray-400/60 w-full h-full z-20">
                <div className='lg:w-1/4 md:w-1/2 p-4 w-full my-20 container mx-auto border bg-white rounded'>
                    <div className='flex justify-end items-center'>
                        <button onClick={onClose} className='text-lg'>
                            <AiOutlineClose />
                        </button>
                    </div>
                    <h1 className='text-center text-2xl'>Form Tambah Buku</h1>
                    <div className='px-10 py-5'>
                        <form onSubmit={addBook}>
                            <div className='relative'>
                                <label htmlFor='bookName'>Nama Buku <span className='text-red-500'>*</span></label>
                                <input type='text' name='bookName' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                            </div>
                            <div className='relative mt-5'>
                                <label htmlFor='author'>Penulis Buku <span className='text-red-500'>*</span></label>
                                <input type='text' name='author' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                            </div>
                            <div className='relative mt-5'>
                                <label htmlFor='publisher'>Penerbit Buku <span className='text-red-500'>*</span></label>
                                <input type='text' name='publisher' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                            </div>
                            <div className='relative mt-5'>
                                <label htmlFor='price'>Harga Buku <span className='text-red-500'>*</span></label>
                                <input type='text' name='price' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                            </div>
                            <div className='relative mt-5'>
                                <label htmlFor='cover'>Cover Buku <span className='text-red-500'>*</span></label>
                                <input type='text' name='cover' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                            </div>
                            <div className='flex justify-end items-center relative mt-5'>
                                <button type='submit' className='inline-block bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-4 py-3'><FaPlus /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
