import { Link } from 'react-router-dom'

const Tab = ({
  className,
  icon,
  path,
}: {
  className: string
  icon: string
  path: string
}) => {
  return (
    <Link
      to={path}
      className={`material-symbols-outlined flex flex-grow cursor-pointer items-center justify-center ${className} text-2xl md:text-5xl`}
    >
      {icon}
    </Link>
  )
}

export default Tab
