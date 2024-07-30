import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black h-12'>
        <div className='text-yellow-200 flex justify-between items-center'>
            <h1 className='text-2xl m-2'>Next.js</h1>
            <ul className='mr-4 flex gap-4'>
                <a className='hover:text-white' href="">Home</a>
                <a className='hover:text-white' href="">About</a>
                <a className='hover:text-white' href="">Contact</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar