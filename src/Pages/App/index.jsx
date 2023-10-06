import { useContext } from 'react'
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from '../../Context/index';
import Home  from '../Home/index';
import MyAccount from '../Account/index';
import MyOrder from '../MyOrder/index';
import MyOrders from '../MyOrders/index';
import SignIn from '../SignIn/index';
import Navbar from '../../Components/Navbar/index';
import CheckOutSideMenu from '../../Components/CheckOutSideMenu';

import './App.css';


const AppRoutes = () => {

  const context = useContext(ShoppingCartContext);

  // Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  // Sign Out
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
 
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalStage = context.account ? Object.keys(context.account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalStage;
  const isUserSignOut = context.signOut || parsedSignOut;

  let routes = useRoutes([
    { path: "/", element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={"/Sign-in"}/> },
    { path: "/clothes", element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={"/Sign-in"}/> },
    { path: "/Shoes", element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={"/Sign-in"}/> },
    { path: "/electronics", element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={"/Sign-in"}/> },
    { path: "/Furniture", element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={"/Sign-in"}/> },
    { path: "/others", element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={"/Sign-in"}/> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
  ])

  return routes
}


const App = () => {

  initializeLocalStorage();

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

