import Layout from './layout'
import HomePage from './pages/HomePage'
import RestaurantsPage from './pages/RestaurantsPage'
import MoviesPage from './pages/MoviesPage'
import BooksPage from './pages/BooksPage'

const routerConfig = [
  {
    path: 'category-noter',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'restaurants', element: <RestaurantsPage /> },
      { path: 'movies', element: <MoviesPage /> },
      { path: 'books', element: <BooksPage /> },
    ],
  },
]

export default routerConfig
