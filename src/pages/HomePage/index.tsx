import HomeCard from '../../components/HomeCard'

function HomePage() {
  return (
    <div className='flex flex-col gap-8 px-14 pb-24 pt-12 md:gap-16 md:pb-36'>
      <HomeCard icon='restaurant' text='Restaurants' />
      <HomeCard icon='movie' text='Movies' />
      <HomeCard icon='book' text='Books' />
    </div>
  )
}

export default HomePage
