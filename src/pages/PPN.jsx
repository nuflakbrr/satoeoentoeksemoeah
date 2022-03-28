import React, { useState, useEffect } from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'

import { Alert, Chat, Footer, Modal, SEO, Sidebar, Spinner } from '../components'

export default function PPN() {
    const [loading, setLoading] = useState(false)
    const [popUpStack, setPopUpStack] = useState([])
    const [nominal, setNominal] = useState(0)
    const [ppn, setPpn] = useState(0)
    const [diskon, setDiskon] = useState(0)
    const [total, setTotal] = useState(0)

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
        pushPopUp(<Modal title='Kalkulator PPN' desc='Adalah alat bantu hitung PPN. Pajak Pertambahan Nilai adalah pungutan yang dibebankan atas transaksi jual-beli barang dan jasa yang dilakukan oleh Pengusaha Kena Pajak (PKP).' onClose={popPopUp} />)
    }

    // CALCULATE
    const calculate = (e) => {
        e.preventDefault()
        const formValid = nominal > 0 && ppn > 0 && diskon > 0
        if (!formValid) {
            return
        }
        const total = nominal - (nominal * (ppn / 100)) - (nominal * (diskon / 100))
        setTotal(total)
    }

    return (
        <>
            <SEO title='Kalkulator PPN - SATOE OENTOEK SEMOEAH' desc='Salah satu studi kasus alat hitung PPN oleh Naufal Akbar Nugroho' keyword='PPN, Kredit, Kalkulator PPN' url='https://satoeoentoeksemoeah.vercel.app/pajak' />
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
                        <Chat text='Selamat datang di Kalkulator PPN! Kalkulator PPN adalah sebuah alat bantu hitung untuk menentukan hasil jumlah yang harus kita bayar apabila melakukan transaksi. Selamat mencoba!' />
                        <div className='relative md:ml-64'>
                            <section className='text-gray-300'>
                                <div className='container flex flex-col px-5 py-10 mx-auto lg:items-center'>
                                    <div className='border-2 p-5 rounded-lg lg:w-2/4 md:w-1/2 w-full'>
                                        <div className='flex justify-center items-center border-b'>
                                            <h1 className='font-bold text-xl mb-2'>Kalkulator Pajak PPN</h1>
                                            <button type='button' onClick={openModal} className='bg-blue-700 hover:bg-blue-800 transition duration-500 ease-in-out transform p-1.5 mb-2 rounded-lg ml-2'><BsInfoCircleFill /></button>
                                        </div>
                                        <form onSubmit={calculate}>
                                            <div className='mt-2 flex flex-col'>
                                                <label htmlFor='Nominal' className='mb-2'>Nominal (ex: 500000)</label>
                                                <input type='text' onChange={(e) => setNominal(e.target.value)} value={nominal} id='nominal' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                                            </div>
                                            <div className='mt-2 flex flex-col'>
                                                <label htmlFor='PPN' className='mb-2'>PPN (ex: 10)</label>
                                                <input type='text' onChange={(e) => setPpn(e.target.value)} value={ppn} id='ppn' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' />
                                            </div>
                                            <div className='mt-2 flex flex-col'>
                                                <label htmlFor='Diskon' className='mb-2'>Diskon (ex: 25)</label>
                                                <input type='text' onChange={(e) => setDiskon(e.target.value)} value={diskon} id='diskon' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' />
                                            </div>
                                            <div className='mt-2 flex flex-col justify-end items-end'>
                                                <button type='submit' className='flex items-center px-5 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-blue-700 rounded-lg hover:bg-blue-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2'>
                                                    Hitung PPN
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
                                                total > 0
                                                    ? <Alert color='bg-blue-700' icons={<BsInfoCircleFill />} result={`Hasil Akhir : Rp ${total}`} />
                                                    : <Alert color='bg-blue-700' icons={<BsInfoCircleFill />} result='Silahkan masukkan nominal' />
                                            }
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
