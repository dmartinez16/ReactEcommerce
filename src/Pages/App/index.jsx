import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Navbar from '../../Components/Navbar'


const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home/> },
      { path: '/my-account', element: <MyAccount/> },
      { path: '/my-order', element: <MyOrder/> },
      { path: '/my-orders', element: <MyOrders/> },
      { path: '/singin', element: <SingIn/> },
      { path: '/*', element: <NotFound/> },
    ])
    return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
  )
}

export default App
