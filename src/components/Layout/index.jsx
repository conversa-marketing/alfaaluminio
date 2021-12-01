import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import WhatsAppBtn from '../WhatsAppBtn'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <WhatsAppBtn />
            <Footer />
        </>
    )
}

export default Layout;
