import React from 'react'
import './Layout.module.scss'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import Tabs from '../Tabs/Tabs'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function Layout() {
  return (
    <div>
      <Header/>
      <Tabs/>
      <div className='sm:ml-[270px] px-3 my-5'>
          <Outlet/>
      </div>
      <Sidebar/>
      <Footer/>
    </div>
  )
}
