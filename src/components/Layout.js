import React from 'react'
import Navbar from './Navbar'
import Head from './Head'

import "../styles/main.css"
import HandleScroll from './HandleScroll'

const Layout = ({ children }) => {
    return (
        <main id="main-container" theme="dark">
            <Head/>
            <Navbar/>
            <HandleScroll/>
            <div className="container">{children}</div>
        </main>
    )
}

export default Layout
