import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context/index';
import Home  from '../Home/index';
import MyAccount from '../Account/index';
import MyOrder from '../MyOrder/index';
import MyOrders from '../MyOrders/index';
import SignIn from '../SignIn/index';
import NotFound from '../NotFound/index';
import Navbar from '../../Components/Navbar/index';
import CheckOutSideMenu from '../../Components/CheckOutSideMenu';

import './App.css';


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/Shoes", element: <Home /> },
    { path: "/Furniture", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ])

  return routes
}


const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App;

