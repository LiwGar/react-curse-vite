import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home  from '../Home/Index';
 import MyAccount from '../Account/Index';
 import MyOrder from '../MyOrder/Index';
 import MyOrders from '../MyOrders/Index';
 import SignIn from '../SignIn/index';
 import NotFound from '../NotFound/index';
 import Navbar from '../../Components/Navbar/Index'
 import './App.css';


const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Home /> }, 
    { path: '/my-account', element: <MyAccount />}, 
    { path: '/my-order', element: <MyOrder />}, 
    { path: '/my-orders', element: <MyOrders />}, 
    { path: '/sign-in', element: <SignIn />}, 
    { path: '/*', element: <NotFound />}, 
  ])
  return routes;
};


const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App;

