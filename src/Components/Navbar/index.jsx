import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/index";
import ShoppingCart from "../ShoppingCart";

const Navbar = () => {

    const context = useContext(ShoppingCartContext); /*Quiero que leas el estado global*/

    const activeStyle =  "text-black font-bold";

    // Sign Out
    const signOut = localStorage.getItem("sign-out");
    const parsedSignOut = JSON.parse(signOut);
    const isUserSignOut = context.signOut || parsedSignOut;

    // Account
    const account = localStorage.getItem("account");

    const parsedAccount = JSON.parse(account);
    
    // Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
    const noAccountInLocalStage = context.account ? Object.keys(context.account).length === 0 : true;
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalStage;

    // SignOut Function 
    const handleSignOut = () => {
      const stringifiedSignOut = JSON.stringify(true);
      localStorage.setItem("sign-out", stringifiedSignOut);
      context.setSignOut(true);
    }

    const renderView = () => {

        if (hasUserAnAccount && !isUserSignOut) {
          return ( 
            <li>
              <NavLink
                to='/sign-in'
                className={({ isActive }) =>
                isActive ? activeStyle : undefined}
                onClick={() => handleSignOut()}>
                Sign Out
              </NavLink>
            </li>
          )
        } else {
          
            return (
                <>
                    <li className='text-black/60'>
                        {parsedAccount?.email}
                    </li>
                    <li>
                        <NavLink to="/my-orders"
                            className={({ isActive }) => 
                            isActive ? activeStyle : undefined}>
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-account"
                            className={({ isActive }) => 
                            isActive ? activeStyle : undefined}>
                            My Account
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined}
                        onClick={() => handleSignOut()}>
                        Sign Out
                    </NavLink>
                    </li>
                </>
            )
        }
    }

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-3 px-7 top-0 text-base
                      text-black bg-gradient-to-r from-green-500 to-violet-600 shadow-sm shadow-slate-700">
            <ul className="flex items-center gap-4">
                <li className="font-extrabold text-xl italic text-black">
                    <NavLink to={`${isUserSignOut ? "/sign-in" : "/"}`}>
                        SHOPstr
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        onClick={() => context.setSearchByCategory('')}
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/shoes'
                        onClick={() => context.setSearchByCategory('shoes')}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furniture'
                        onClick={() => context.setSearchByCategory('furniture')}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-4">
                {renderView()}
                <li className="flex items-center">
                    <ShoppingCart/>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar; 
