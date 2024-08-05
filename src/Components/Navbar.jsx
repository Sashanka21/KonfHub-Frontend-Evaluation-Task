import React from 'react'
import Icons from '../CustomComponent/Icons';

const Navbar = ({data}) => {
  return (
    <div className='flex justify-between items-center mx-14'>
    <img
      src={data.navbar_icon}
      onError={(e) => {
        e.target.src = logo;
      }}
      loading='lazy'
      alt='navbar_icon'
    />
    <Icons string='login' width='20' height='20' />
  </div>
  )
}

export default Navbar
