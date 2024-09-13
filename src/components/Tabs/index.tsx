import { Dispatch, SetStateAction } from 'react'
import Tab from '../Tab'

const TabsArray = [
  {
    iconText: 'home',
    text: 'Home',
    path: '/category-noter'
  },
  {
    iconText: 'restaurant',
    text: 'Restaurants',
    path: 'restaurants'
  },
  {
    iconText: 'movie',
    text: 'Movies',
    path: 'movies'
  },
  { iconText: 'menu_book', text: 'Books', path: 'books' }
]

const Tabs = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className='flex flex-col gap-4'>
      {TabsArray.map((TabDefinition) => {
        return (
          <Tab
            key={`tab_${TabDefinition.iconText}`}
            iconText={TabDefinition.iconText}
            text={TabDefinition.text}
            path={TabDefinition.path}
            setOpen={setOpen}
          />
        )
      })}
    </div>
  )
}

export default Tabs
