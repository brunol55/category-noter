import Tab from '../Tab'

const Tabs = () => {
  return (
    <div className='flex'>
      <Tab icon='home' className='bg-home' path='/category-noter' />
      <Tab icon='restaurant' className='bg-restaurants' path='restaurants' />
      <Tab icon='movie' className='bg-movies' path='movies' />
      <Tab icon='menu_book' className='bg-books' path='books' />
    </div>
  )
}

export default Tabs
