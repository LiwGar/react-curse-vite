import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/index"

const Navbar = () => {

    const context = useContext(ShoppingCartContext); /*Quiero que leas el estado global*/

    const activeStyle =  "text-black font-bold";

    // Sign Out
    const signOut = localStorage.getItem("sign-out");
    const parsedSignOut = JSON.parse(signOut);
    const isUserSignOut = context.signOut || parsedSignOut;

    // SignOut Function 
    const handleSignOut = () => {
      const stringifiedSignOut = JSON.stringify(true);
      localStorage.setItem("sign-out", stringifiedSignOut);
      context.setSignOut(true);
    }

    const renderView = () => {

        if (isUserSignOut) {
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
                    <li>
                        satoshinakamoto@email.com
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
                    <NavLink to='/'
                        onClick={() => context.setSearchByCategory('')}>
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
                <li className="flex justify-center items-center text-sm font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg> {context.cartProducts.length}  
                </li>
            </ul>
        </nav>
    )
};

export default Navbar; 
