import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home  from '../Home/Index';
 import MyAccount from '../Account/Index';
 import MyOrder from '../MyOrder/Index';
 import MyOrders from '../MyOrders/Index';
 import SingIn from '../SingIn';
 import NotFound from '../NotFound';
 import './App.css';


const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Home /> }, 
    { path: '/my-account', element: <MyAccount />}, 
    { path: '/my-order', element: <MyOrder />}, 
    { path: '/my-orders', element: <MyOrders />}, 
    { path: '/sing-in', element: <SingIn />}, 
    { path: '/*', element: <NotFound />}, 
  ])
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App;

