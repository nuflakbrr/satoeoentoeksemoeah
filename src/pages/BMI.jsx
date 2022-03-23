import React, { useState } from 'react'
import { BsInfoCircleFill, BsFillCheckCircleFill } from 'react-icons/bs'
import { AiFillAlert } from 'react-icons/ai'

import { Footer, Sidebar, SEO, Modal, Alert, Chat } from '../components'

export default function BMI() {
    const [popUpStack, setPopUpStack] = useState([])
    const [height, setHeight] = useState(0)
    const [mass, setMass] = useState(0)
    const [bmi, setBmi] = useState(0)

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

    // CALCULATE
    const calculate = (e) => {
        e.preventDefault()
        const formValid = height > 0 && mass > 0
        if (!formValid) {
            return
        }
        const bmi = mass / (height * height)
        setBmi(bmi)
    }

    return (
        <>
            <SEO title='Kalkulator BMI - SATOE OENTOEK SEMOEAH' desc='Salah satu studi kasus alat hitung BMI oleh Naufal Akbar Nugroho' keyword='BMI, Kalkulator BMI' url='https://satoeoentoeksemoeah.vercel.app/bmi' />
            <div className='dark:bg-gray-900 min-h-screen lg:overflow-x-auto overflow-x-hidden'>
                {popUpStack}
                <Sidebar />
                <Chat text='Selamat datang di Kalkulator BMI! Kalkulator BMI adalah sebuah alat bantu hitung untuk menentukan apakah anda memiliki berat badan yang ideal atau bahkan obesitas. Selamat mencoba!' />
                <div className='relative md:ml-64'>
                    <section className='text-gray-300'>
                        <div className='container flex flex-col px-5 py-10 mx-auto lg:items-center'>
                            <div className='border-2 p-5 rounded-lg lg:w-2/4 md:w-1/2 w-full'>
                                <div className='flex justify-center items-center border-b'>
                                    <h1 className='font-bold text-xl mb-2'>Kalkulator BMI</h1>
                                    <button type='button' onClick={openModal} className='bg-blue-700 hover:bg-blue-800 transition duration-500 ease-in-out transform p-1.5 mb-2 rounded-lg ml-2'><BsInfoCircleFill /></button>
                                </div>
                                <form onSubmit={calculate}>
                                    <div className='mt-2 flex flex-col'>
                                        <label htmlFor='Berat Badan' className='mb-2'>Berat Badan (ex: 60)</label>
                                        <input type='text' onChange={(e) => setMass(e.target.value)} id='weight' value={mass} className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                                    </div>
                                    <div className='mt-2 flex flex-col'>
                                        <label htmlFor='Berat Badan' className='mb-2'>Tinggi Badan (ex: 1.7)</label>
                                        <input type='text' onChange={(e) => setHeight(e.target.value)} id='height' value={height} className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' />
                                    </div>
                                    <div className='mt-2 flex flex-col justify-end items-end'>
                                        <button type='submit' className='flex items-center px-5 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-blue-700 rounded-lg hover:bg-blue-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2'>
                                            Hitung BMI
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className='border-2 p-5 mt-5 rounded-lg lg:w-2/4 md:w-1/2 w-full'>
                                <div className='flex justify-center items-center border-b'>
                                    <h1 className='font-bold text-xl mb-2'>Hasil</h1>
                                </div>
                                <div className='mt-2'>
                                    {
                                        ((bmi > 0) && (bmi <= 18.5)) ? <Alert color='bg-red-500' icons={<AiFillAlert />} result='Kekurangan Berat Badan (Kurus)' />
                                            : ((bmi >= 18.5) && (bmi <= 25)) ? <Alert color='bg-green-500' icons={<BsFillCheckCircleFill />} result='Berat Badan Normal' />
                                                : ((bmi >= 25) && (bmi <= 30)) ? <Alert color='bg-yellow-500' icons={<AiFillAlert />} result='Kelebihan Berat Badan (Gemuk)' />
                                                    : bmi > 30 ? <Alert color='bg-red-500' icons={<AiFillAlert />} result='Obesitas' />
                                                        : <Alert color='bg-blue-700' icons={<BsInfoCircleFill />} result='Silahkan masukkan nominal' />
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        </>
    )
}
