import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <main id="main-container">
            <Navbar/>
            <div className="container">{children}</div>
        </main>
    )
}

export default Layout
