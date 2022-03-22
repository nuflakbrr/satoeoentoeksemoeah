import React from 'react'

export default function Alert({ color, icons, result }) {
    return (
        <div>
            <div className={`text-white px-6 py-4 border-0 rounded relative ${color}`}>
                <span className='text-xl inline-block mr-5 align-middle'>
                    {icons}
                </span>
                <span className='inline-block align-middle md:text-md text-sm'>
                    <b className='capitalize'>{result}</b>
                </span>
            </div>
        </div>
    )
}
