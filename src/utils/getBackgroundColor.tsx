import { Location } from 'react-router-dom'

const getBackgroundColor = (location: Location) => {
  const pathname = location.pathname
  switch (pathname) {
    case '/':
      return 'bg-home'
    case '/restaurants':
      return 'bg-restaurants'
    case '/movies':
      return 'bg-movies'
    case '/books':
      return 'bg-books'
    default:
      return ''
  }
}

export default getBackgroundColor
