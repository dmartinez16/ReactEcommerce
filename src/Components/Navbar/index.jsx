import { NavLink } from "react-router-dom";

const Navbar = () => {

   const navLinkClass = ({ isActive }) =>
    isActive ? "underline font-semibold underline-offset-4" : "";

    return (
        <nav className="flex justify-between item-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg"><NavLink to='/'>Shopi</NavLink></li>
                <li><NavLink to='/' className={navLinkClass}>All</NavLink></li>
                <li><NavLink to='/clothes' className={navLinkClass}>Clothes</NavLink></li>
                <li><NavLink to='/electronics' className={navLinkClass}>Electronics</NavLink></li>
                <li><NavLink to='/furniture' className={navLinkClass}>Furniture</NavLink></li>
                <li><NavLink to='/toys' className={navLinkClass}>Toys</NavLink></li>
                <li><NavLink to='/others' className={navLinkClass}> Others </NavLink></li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="font-semibold">dmartinezing16@gmail.com</li>
                <li><NavLink to='/my-orders' className={navLinkClass}>My Orders</NavLink></li>
                <li><NavLink to='/my-account' className={navLinkClass}>My Account</NavLink></li>
                <li><NavLink to='/SingIn' className={navLinkClass}>My Sing out</NavLink></li>
                <li> </li>
            </ul>
        </nav>
    )
}

export default Navbar