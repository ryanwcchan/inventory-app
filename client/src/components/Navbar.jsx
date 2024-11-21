import React from 'react'

function NavItem({text}) {
    return (
        <li className='text-3xl font-bold hover:text-red-600 cursor-pointer'>{text}</li>
    )
}

export default function Navbar() {
  return (
    <nav className='bg-black px-[3rem] p-[2rem] flex justify-between items-center '>
        <div>
            <h1 className='text-5xl font-bold text-white hover:text-red-600 cursor-pointer'>HIS</h1>
            <p className='text-gray-400 font-semibold text-2xl'>Home Inventory System</p>
        </div>
        <ul className='flex text-white gap-[4rem]'>
            <NavItem text='Home'/>
            <NavItem text='Inventory'/>
            <NavItem text='Profile'/>
        </ul>
    </nav>
  )
}
