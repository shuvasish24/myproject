import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Aboutpage from './Pages/Aboutpage'
import Contactpage from './Pages/Contactpage'
import Footer from './components/Footer'


function App() {
  const router =createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Home/></>,
    },
    {
      path: '/about',
      element: <><Navbar/><Aboutpage/></>,
    },
    {
      path: '/contact',
      element: <><Navbar/><Contactpage/></>,
    },

   ])

  return (
    <>
    <RouterProvider router={router} />
     <Footer/>
    </>
  )
}

export default App
