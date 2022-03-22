import React from 'react'

export default function Alert({ color, icons, result }) {
    return (
        <div>
            <div className={`text-white px-6 py-4 border-0 rounded relative mb-4 ${color}`}>
                <span className='text-xl inline-block mr-5 align-middle'>
                    {icons}
                </span>
                <span className='inline-block align-middle mr-8'>
                    <b className='capitalize'>{result}</b>
                </span>
            </div>
        </div>
    )
}
