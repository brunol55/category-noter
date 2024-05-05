import Tab from '../Tab'

const Tabs = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Tab iconText='home' text='Home' path='/category-noter' />
      <Tab iconText='restaurant' text='Restaurants' path='restaurants' />
      <Tab iconText='movie' text='Movies' path='movies' />
      <Tab iconText='menu_book' text='Books' path='books' />
    </div>
  )
}

export default Tabs
