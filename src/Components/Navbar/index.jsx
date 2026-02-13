import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCarContext } from "../../Context";
import { CreditCardIcon } from '@heroicons/react/24/outline'

let ContentLeft = [
    { name: "All", to: "/"},
    { name: "Men's Clothing", to: "/mensclothing"},
    { name: "Jewelery", to: "/jewelery"},
    { name: "Electronics", to: "/electronics"},
    { name: "Women's clothing", to: "/womensclothing"}
]
 
let ContentRight = [
    { name: "My Orders", to: "/my-orders" },
]
 

const NavBar = () => {
  const activeStyle = {
    textDecoration: "underline",
  };
  const context = useContext(ShoppingCarContext)
  return (
    <nav className="flex justify-between font-light px-8 py-4 items-center text-sm fixed top-0  w-full -z-50">
      <ul className="flex gap-2 items-center">
        <li className="font-semibold text-lg" >Shopi</li>
        {ContentLeft.map((item, index) => (
          <li key={index + 1} className={item.class ?? ""}>
            <NavLink to={item.to} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="flex gap-2 items-center">
        <li className="font-bold">d.martinez@gmail.com</li>

        {ContentRight.map((item, index) => (
          <li key={index + 1}>
            <NavLink to={item.to} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
              {item.name}
            </NavLink>
          </li>
        ))}

        <li className="flex flex-row gap-2">
          <CreditCardIcon className='size-5 text-black'></CreditCardIcon>
          {context.count}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
