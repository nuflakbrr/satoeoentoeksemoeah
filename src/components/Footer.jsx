import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <footer className='text-gray-600 body-font py-5'>
                <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
                    <p className='text-sm text-gray-200 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4'>
                        © {year} —
                        <a
                            href='https://instagram.com/kbrnugroho'
                            className='text-gray-200 ml-1'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            Naufal Akbar Nugroho
                        </a>
                    </p>
                    <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
                        <a
                            className='ml-3 text-gray-500'
                            href='https://twitter.com/nuflakbrr'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <svg
                                fill='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className='w-5 h-5'
                                viewBox='0 0 24 24'
                            >
                                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                            </svg>
                        </a>
                        <a
                            className='ml-3 text-gray-500'
                            href='https://instagram.com/kbrnugroho'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className='w-5 h-5'
                                viewBox='0 0 24 24'
                            >
                                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                                <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                            </svg>
                        </a>
                        <a
                            className='ml-3 text-gray-500'
                            href='https://www.linkedin.com/in/nuflakbrr/'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <svg
                                fill='currentColor'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='0'
                                className='w-5 h-5'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    stroke='none'
                                    d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                                ></path>
                                <circle cx='4' cy='4' r='2' stroke='none'></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    )
}
