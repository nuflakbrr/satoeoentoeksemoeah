import React from 'react'
import { Footer, Navbar, SEO } from '../components'

export default function About() {
    return (
        <>
            <SEO title='Tentang - SATOE OENTOEK SEMOEAH' desc='' />
            <div className='dark:bg-gray-900 min-h-screen'>
                <Navbar />
                <Footer />
            </div>
        </>
    )
}
