import React from 'react'
import error from '../../assets/images/404.jpg'
export default function NotFound() {
  return (
    <div className='flex justify-center'>
      <img src={error} alt="" />
    </div>
  )
}
