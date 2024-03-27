import React from 'react'
import { Footer, Header } from './componenets'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
        {/* In Outlet components will change DYNAMICALLY while Header and Footer will remains the same */}
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout