import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Icon from '../components/Icon'

const Layout = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='h-screen w-screen p-8'>
      <Sidebar open={open} setOpen={setOpen} />
      <button
        className='absolute text-3xl'
        type='button'
        onClick={() => setOpen(true)}
      >
        <Icon iconText='menu' />
      </button>
      <Outlet />
    </div>
  )
}

export default Layout
