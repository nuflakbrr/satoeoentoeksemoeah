import React from 'react'
import { PulseLoader } from 'react-spinners'

export default function Spinner({ loading, message }) {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <PulseLoader
                color="#ffff"
                size={15}
                loading={loading}
            />
            <p className="text-lg text-center dark:text-white">{message}</p>
        </div>
    )
}
