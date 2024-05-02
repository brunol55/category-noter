import { Outlet, useLocation } from 'react-router-dom'
import Tabs from '../components/Tabs'
import getBackgroundColor from '../utils/getBackgroundColor'

const Layout = () => {
  const location = useLocation()
  const backgroundColor = getBackgroundColor(location)

  return (
    <div
      className={`grid h-screen w-screen grid-rows-[80px_auto] text-white  ${backgroundColor}`}
    >
      <Tabs />
      <Outlet />
    </div>
  )
}

export default Layout
