import React from 'react'
import logoImge from '../../assets/images/logo.png'
import styleFooter from './Footer.module.scss'
export default function Footer() {
  return (
    <footer className={`${styleFooter.footer1} bg-white p-5 md:px-20 relative bottom-0 right-0 left-0`}>
        <div className='  mx-auto'>
            <div className='md:flex md:justify-between  border-b-2 py-8'>
                <div className='flex items-center'>
                    <img className='w-[50px]' src={logoImge} alt="" />
                    <h3 className='text-2xl font-medium '>Recipe</h3>
                </div>
                <h3 className='text-2xl text-blue-700 font-medium'>Route</h3>
            </div>
            <div>
                <p className='text-gray-400 sm:text-center p-5'> &copy; 2025 Nagy Osama <sup>TM</sup>. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    
  )
}
