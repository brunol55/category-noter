import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { Dispatch, SetStateAction } from 'react'

const Tab = ({
  text,
  iconText,
  path,
  setOpen
}: {
  text: string
  iconText: string
  path: string
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Link
      to={path}
      className={` flex flex-grow cursor-pointer items-center justify-start`}
      onClick={() => setOpen(false)}
    >
      <div className='mr-2 text-5xl'>
        <Icon iconText={iconText} />
      </div>
      <div className='text-2xl'>{text}</div>
    </Link>
  )
}

export default Tab
