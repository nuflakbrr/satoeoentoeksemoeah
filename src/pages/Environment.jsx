import React, { useState, useEffect } from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'
import withReactContent from 'sweetalert2-react-content'

import { Chat, Footer, Modal, SEO, Sidebar, Spinner, Card, AddForm, EditForm } from '../components'

export default function Environment() {
    // GET FULL YEAR
    const year = new Date().getFullYear()

    const [loading, setLoading] = useState(false)
    const [popUpStack, setPopUpStack] = useState([])
    const [search, setSearch] = useState('')
    const [filteredResults, setFilteredResults] = useState([])
    const [eventList, setEventList] = useState([
        { eventName: "Hari Laut dan Samudera Nasional", date: `${year}-01-15` },
        { eventName: "Hari Lahan Basah Sedunia", date: `${year}-02-02` },
        { eventName: "Hari Peduli Sampah Nasional", date: `${year}-02-21` },
        { eventName: "Hari Hutan Sedunia", date: `${year}-03-21` },
        { eventName: "Hari Air Sedunia", date: `${year}-03-22` },
        { eventName: "Hari Meteorologi Sedunia", date: `${year}-03-23` },
        { eventName: "Hari Bumi", date: `${year}-04-22` },
        { eventName: "Hari Burung Migratori Internasional", date: `${year}-05-03` },
    ])

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
        pushPopUp(<Modal title='Hari Lingkungan Hidup' desc='Hari Lingkungan Hidup adalah sistem sederhana managemen kegiatan. Anda dapat menambahkan, edit, dan hapus buku. Studi kasus ini dibuat menggunakan useState dari React.js' onClose={popPopUp} />)
    }

    const openForm = () => {
        pushPopUp(<AddForm key={2} addEvent={addEvent} onClose={popPopUp} />)
    }

    // SweetAlert
    const MySwal = withReactContent(Swal)
    function topRightAlert(icon, text) {
        MySwal.fire({
            position: 'top-end',
            icon: icon,
            text: text,
            showConfirmButton: false,
            timer: 1500
        })
    }

    // SEARCH EVENT
    function searchItems(searched) {
        setSearch(searched)
        const filteredEventList = eventList.filter(event => event.eventName.toLowerCase().includes(search.toLowerCase()))

        setFilteredResults(filteredEventList)
    }

    // ADD FORM
    function addEvent(event) {
        event.preventDefault()

        const eventName = event.target.eventName.value
        const date = event.target.date.value
        topRightAlert('success', `${eventName}, Kegiatan baru telah ditambahkan!`)

        setEventList([...eventList, { eventName, date }])
        popPopUp()
    }

    // EDIT FORM
    const openEditForm = (eventName, date, index) => {
        pushPopUp(<EditForm key={1} eventName={eventName} date={date} editEvent={editEvent} deleteEvent={deleteEvent} index={index} onClose={popPopUp} />)
    }

    function editEvent(event) {
        event.preventDefault()

        const eventName = event.target.eventName.value
        const date = event.target.date.value
        const index = event.target.index.value

        const newEventList = [...eventList]
        newEventList[index] = { eventName, date }

        setEventList(newEventList)

        if (eventName === eventList[index].eventName && date === eventList[index].date) {
            topRightAlert('warning', 'Tidak ada perubahan')
        } else {
            topRightAlert('success', `${eventName}, Kegiatan telah diubah!`)
        }

        popPopUp()
    }

    // DELETE FORM
    function deleteEvent(event, index) {
        const confirm = window.confirm('Apakah anda yakin ingin menghapus kegiatan ini?')
        const eventNameVal = eventList[index].eventName

        if (confirm === true) {
            event.preventDefault()

            const newEventList = [...eventList]
            newEventList.splice(index, 1)

            setEventList(newEventList)

            topRightAlert('success', `Kegiatan ${eventNameVal} telah dihapus!`)
            popPopUp()
        } else {
            topRightAlert('warning', `Kegiatan ${eventNameVal} tidak dihapus!`)
            popPopUp()
        }
    }

    return (
        <>
            <SEO title='Hari Lingkungan Hidup - SATOE OENTOEK SEMOEAH' desc='Salah satu studi kasus sistem managemen kegiatan sederhana oleh Naufal Akbar Nugroho' keyword='Hari Lingkungan Hidup, Kegiatan, Managemen Kegiatan' url='https://satoeoentoeksemoeah.vercel.app/book' />
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
                        <Chat text='Selamat datang di Hari Lingkungan Hidup! Hari Lingkungan Hidup adalah sebuah simulasi sistem managemen kegiatan sederhana. Anda dapat melakukan penambahan, edit, dan hapus buku. Selamat mencoba!' />
                        <div className='relative md:ml-64'>
                            <section className='text-gray-300'>
                                <div className='container flex flex-col px-5 py-10 mx-auto lg:items-center'>
                                    <div className='p-5 rounded-lg lg:w-2/4 md:w-1/2 w-full'>
                                        <div className='flex justify-center items-center'>
                                            <h1 className='font-bold text-4xl mb-4'>Hari Lingkungan Hidup</h1>
                                            <button type='button' onClick={openModal} className='bg-blue-700 hover:bg-blue-800 transition duration-500 ease-in-out transform p-1.5 mb-2 rounded-lg ml-2'><BsInfoCircleFill /></button>
                                        </div>
                                        <div className='flex'>
                                            <input placeholder='Coba cari disini...' onChange={(event) => searchItems(event.target.value)} className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2 mr-2' />
                                            <button type='button' onClick={openForm} className='inline-block bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-4 py-3'><FaPlus /></button>
                                        </div>
                                    </div>
                                    <div className='p-5 mt-5 w-full'>
                                        <div className="container">
                                            <div className='flex flex-wrap'>
                                                {
                                                    search.length > 1 ? (
                                                        filteredResults.map((event, index) => (
                                                            <Card key={index} eventName={event.eventName} date={event.date} index={index} openEditForm={openEditForm} />
                                                        ))
                                                    ) : (
                                                        eventList.map((event, index) => (
                                                            <Card key={index} eventName={event.eventName} date={event.date} index={index} openEditForm={openEditForm} />
                                                        ))
                                                    )
                                                }
                                            </div>
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
