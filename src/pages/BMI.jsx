import React, { useState } from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'

import { Footer, Navbar, SEO, Modal } from '../components'

export default function BMI() {
    const [popUpStack, setPopUpStack] = useState([])

    // HANDLE POPUP
    const pushPopUp = (element) => {
        setPopUpStack([...popUpStack, element])
    }

    const popPopUp = () => {
        setPopUpStack(popUpStack.slice(0, -1))
    }

    const openModal = () => {
        pushPopUp(<Modal title='Tentang Kalkulator BMI' desc='Kalkulator BMI adalah alat bantu hitung BMI (Body Mass Index). BMI sendiri adalah angka yang menjadi penilaian standar untuk menentukan apakah berat badan Anda tergolong normal, kurang, berlebih, atau obesitas.' onClose={popPopUp} />)
    }

    return (
        <>
            <SEO />
            <div className='dark:bg-gray-900 min-h-screen lg:overflow-x-auto overflow-x-hidden'>
                {popUpStack}
                <Navbar />
                <section className='text-gray-300'>
                    <div className='container flex flex-col px-5 py-24 mx-auto lg:items-center'>
                        <div className='border-2 p-5 rounded-lg lg:w-2/4 md:w-1/2 w-full'>
                            <div className='flex justify-center items-center border-b'>
                                <h1 className='font-bold text-xl'>Kalkulator BMI</h1>
                                <button type='button' onClick={openModal} className='bg-blue-800 p-1.5 mb-2 rounded-lg ml-2'><BsInfoCircleFill /></button>
                            </div>
                            <div>
                                <label htmlFor='Berat Badan'>Berat Badan</label>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}
