import { NavLink } from "react-router-dom";

const Navbar = () => {

    const activeStyle =  "text-rose-700 font-extrabold";

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-4 px-7 text-base
                      text-black bg-gradient-to-r from-green-500 to-violet-600">
            <ul className="flex items-center gap-4">
                <li className="font-extrabold text-lg text-black">
                    <NavLink to='/'>
                        SHOPstr
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined}>
                        Funitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-4">
                <li>
                    satoshinakamoto@email.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined}>
                        Sign in
                    </NavLink>
                </li>
                <li>
                    CAR 0
                </li>
            </ul>
        </nav>
    )

};

export default Navbar; 
