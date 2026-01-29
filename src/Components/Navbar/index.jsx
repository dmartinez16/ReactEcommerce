import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCarContext } from "../../Context";

let ContentLeft = [
    { name: "Shopi", to: "/", class: "font-semibold text-lg" },
    { name: "All", to: "/"},
    { name: "Clothes", to: "/clothes"},
    { name: "Electronics", to: "/electronics"},
    { name: "Furnitures", to: "/furniture"},
    { name: "Toys", to: "/toys"},
    { name: "Others", to: "/others"},
]
 
let ContentRight = [
    { name: "My Orders", to: "/my-orders" },
    { name: "My Account", to: "/my-account" },
    { name: "Sign In", to: "/signin" },
]
 

const NavBar = () => {
  const activeStyle = {
    textDecoration: "underline",
  };
  const context = useContext(ShoppingCarContext)
  return (
    <nav className="flex justify-between font-light px-8 py-4 items-center text-sm fixed top-0 z-10 w-full">
      <ul className="flex gap-3 items-center">
        {ContentLeft.map((item, index) => (
          <li key={index} className={item.class ?? ""}>
            <NavLink to={item.to} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="flex gap-3 items-center">
        <li>dmartinezing16@gmail.com</li>

        {ContentRight.map((item, index) => (
          <li key={index}>
            <NavLink to={item.to} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
              {item.name}
            </NavLink>
          </li>
        ))}

        <li>
          {context.count}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
