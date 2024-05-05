import { Link } from 'react-router-dom'
import Icon from '../Icon'

const Tab = ({
  text,
  iconText,
  path
}: {
  text: string
  iconText: string
  path: string
}) => {
  return (
    <Link
      to={path}
      className={` flex flex-grow cursor-pointer items-center justify-start`}
    >
      <div className='mr-2 text-5xl'>
        <Icon iconText={iconText} />
      </div>
      <div className='text-2xl'>{text}</div>
    </Link>
  )
}

export default Tab
