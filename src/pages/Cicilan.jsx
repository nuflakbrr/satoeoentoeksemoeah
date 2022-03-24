import React, { useState } from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'

import { Alert, Chat, Footer, Modal, SEO, Sidebar } from '../components'

export default function Cicilan() {
    const [popUpStack, setPopUpStack] = useState([])
    const [nominal, setNominal] = useState(0)
    const [bunga, setBunga] = useState(0)
    const [periode, setPeriode] = useState(0)
    const [hasil, setHasil] = useState(0)

    // HANDLE POPUP
    const pushPopUp = (element) => {
        setPopUpStack([...popUpStack, element])
    }

    const popPopUp = () => {
        setPopUpStack(popUpStack.slice(0, -1))
    }

    const openModal = () => {
        pushPopUp(<Modal title='Kalkulator Cicilan Bank' desc='Adalah alat bantu hitung Cicilan Bank (Kredit). Dengan adanya alat bantu ini, Anda dapat menghitung angsuran yang harus dibayar apabila melakukan "peminjaman" ke Bank.' onClose={popPopUp} />)
    }

    // CALCULATE
    const calculate = (e) => {
        e.preventDefault()
        const formValid = nominal > 0 && bunga > 0 && periode > 0
        if (!formValid) {
            return
        }
        const cicilan = nominal / periode + ((nominal / periode) * (bunga / 100))
        setHasil(cicilan)
    }

    return (
        <>
            <SEO title='Kalkulator Cicilan Bank - SATOE OENTOEK SEMOEAH' desc='Salah satu studi kasus alat hitung Cicilan Bank oleh Naufal Akbar Nugroho' keyword='Cicilan Bank, Kredit, Kalkulator Cicilan Bank' url='https://satoeoentoeksemoeah.vercel.app/cicilan' />
            <div className='dark:bg-gray-900 min-h-screen lg:overflow-x-auto overflow-x-hidden'>
                {popUpStack}
                <Sidebar />
                <Chat text='Selamat datang di Kalkulator Cicilan Bank! Kalkulator Cicilan Bank adalah sebuah alat bantu hitung untuk menentukan hasil jumlah yang kita angsur apabila meminjam uang atau kredit. Selamat mencoba!' />
                <div className='relative md:ml-64'>
                    <section className='text-gray-300'>
                        <div className='container flex flex-col px-5 py-10 mx-auto lg:items-center'>
                            <div className='border-2 p-5 rounded-lg lg:w-2/4 md:w-1/2 w-full'>
                                <div className='flex justify-center items-center border-b'>
                                    <h1 className='font-bold text-xl mb-2'>Kalkulator Cicilan Bank</h1>
                                    <button type='button' onClick={openModal} className='bg-blue-700 hover:bg-blue-800 transition duration-500 ease-in-out transform p-1.5 mb-2 rounded-lg ml-2'><BsInfoCircleFill /></button>
                                </div>
                                <form onSubmit={calculate}>
                                    <div className='mt-2 flex flex-col'>
                                        <label htmlFor='Nominal' className='mb-2'>Nominal (ex: 5000000)</label>
                                        <input type='text' onChange={(e) => setNominal(e.target.value)} value={nominal} id='nominal' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                                    </div>
                                    <div className='mt-2 flex flex-col'>
                                        <label htmlFor='Bunga' className='mb-2'>Bunga (ex: 25)</label>
                                        <input type='text' onChange={(e) => setBunga(e.target.value)} value={bunga} id='bunga' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' />
                                    </div>
                                    <div className='mt-2 flex flex-col'>
                                        <label htmlFor='Periode' className='mb-2'>Periode</label>
                                        <select className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 rounded outline-none transition duration-100 px-3 py-2' onChange={(e) => setPeriode(e.target.value)} value={periode}>
                                            <option value='6'>6</option>
                                            <option value='12'>12</option>
                                            <option value='18'>18</option>
                                            <option value='24'>24</option>
                                            <option value='30'>30</option>
                                            <option value='36'>36</option>
                                        </select>
                                    </div>
                                    <div className='mt-2 flex flex-col justify-end items-end'>
                                        <button type='submit' className='flex items-center px-5 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-blue-700 rounded-lg hover:bg-blue-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2'>
                                            Hitung Cicilan
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
                                        hasil > 0
                                            ? <Alert color='bg-blue-700' icons={<BsInfoCircleFill />} result={`Hasil Akhir : Rp ${hasil}`} />
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
