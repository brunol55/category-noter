import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routesConfig from '../router'

const router = createBrowserRouter(routesConfig)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
