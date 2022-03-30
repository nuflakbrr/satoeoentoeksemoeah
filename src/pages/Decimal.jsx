import React, { useState, useEffect } from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'

import { Alert, Chat, Footer, Modal, SEO, Sidebar, Spinner } from '../components'

export default function Decimal() {
    const [loading, setLoading] = useState(false)
    const [popUpStack, setPopUpStack] = useState([])
    const [desimal, setDesimal] = useState(0)
    const [option, setOption] = useState(0)
    const [hasil, setHasil] = useState(0)

    // LOADING
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    // HANDLE POPUP
    const pushPopUp = (element) => {
        setPopUpStack([...popUpStack, element])
    }

    const popPopUp = () => {
        setPopUpStack(popUpStack.slice(0, -1))
    }

    const openModal = () => {
        pushPopUp(<Modal title='Kalkulator Konversi Desimal' desc='Kalkulator Konversi Bilangan Sistem Desimal adalah alat bantu hitung untuk mengkonversi bilangan sistem dari Desimal ke Heksadesimal, Biner, ataupun Oktal.' onClose={popPopUp} />)
    }

    // CALCULATE
    const calculate = (e) => {
        e.preventDefault()
        const decimalToBiner = parseInt(desimal, 10).toString(2)
        const decimalToOktal = parseInt(desimal, 10).toString(8)
        const decimalToHeksa = parseInt(desimal, 10).toString(16)

        if (option === 'biner') {
            setHasil(decimalToBiner)
        } else if (option === 'oktal') {
            setHasil(decimalToOktal)
        } else if (option === 'heksadesimal') {
            setHasil(decimalToHeksa)
        }
    }

    return (
        <>
            <SEO title='Kalkulator Konversi Desimal - SATOE OENTOEK SEMOEAH' desc='Salah satu studi kasus alat hitung Konversi Bilangan Desimal oleh Naufal Akbar Nugroho' keyword='Desimal, Konversi, Kalkulator Desimal' url='https://satoeoentoeksemoeah.vercel.app/convert/decimal' />
            <div className='dark:bg-gray-900 min-h-screen lg:overflow-x-auto overflow-x-hidden'>
                {popUpStack}
                <Sidebar />
                {loading ? (
                    <div className='flex justify-center items-center h-screen'>
                        <div className='w-full max-w-md'>
                            <div className='flex flex-col justify-center items-center h-full'>
                                <Spinner loading={loading} message={'Loading...'} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <Chat text='Selamat datang di Kalkulator Konversi Desimal! Kalkulator Konversi Desimal adalah sebuah alat bantu hitung untuk menentukan hasil konversi bilangan desimal ke heksadesimal, biner, ataupun oktal. Selamat mencoba!' />
                        <div className='relative md:ml-64'>
                            <section className='text-gray-300'>
                                <div className='container flex flex-col px-5 py-10 mx-auto lg:items-center'>
                                    <div className='border-2 p-5 rounded-lg lg:w-2/4 md:w-1/2 w-full'>
                                        <div className='flex justify-center items-center border-b'>
                                            <h1 className='font-bold text-xl mb-2'>Kalkulator Konversi Desimal</h1>
                                            <button type='button' onClick={openModal} className='bg-blue-700 hover:bg-blue-800 transition duration-500 ease-in-out transform p-1.5 mb-2 rounded-lg ml-2'><BsInfoCircleFill /></button>
                                        </div>
                                        <form onSubmit={calculate}>
                                            <div className='mt-2 flex flex-col'>
                                                <label htmlFor='Nominal' className='mb-2'>Nominal</label>
                                                <input type='text' onChange={(e) => setDesimal(e.target.value)} value={desimal} id='nominal' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                                            </div>
                                            <div className='mt-2 flex flex-col'>
                                                <label htmlFor='Konversi' className='mb-2'>Konversi</label>
                                                <select className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 rounded outline-none transition duration-100 px-3 py-2' onChange={(e) => setOption(e.target.value)} value={option}>
                                                    <option value='heksadesimal'>Heksadesimal</option>
                                                    <option value='biner'>Biner</option>
                                                    <option value='oktal'>Oktal</option>
                                                </select>
                                            </div>
                                            <div className='mt-2 flex flex-col justify-end items-end'>
                                                <button type='submit' className='flex items-center px-5 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-blue-700 rounded-lg hover:bg-blue-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2'>
                                                    Hitung Konversi
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='border-2 p-5 mt-5 rounded-lg lg:w-2/4 md:w-1/2 w-full'>
                                        <div className='flex justify-center items-center border-b'>
                                            <h1 className='font-bold text-xl mb-2'>Hasil</h1>
                                        </div>
                                        <div className='mt-2'>
                                            <Alert color='bg-blue-700' icons={<BsInfoCircleFill />} result={`Hasil Akhir : ${hasil}`} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <Footer />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
