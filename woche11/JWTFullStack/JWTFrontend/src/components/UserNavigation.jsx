import { NavLink } from "react-router-dom";


export default function UserNavigation() {
  return (
    <>
        <NavLink to={"/shop"}>Shop</NavLink>
        <NavLink to={"/shoppingcart"}>Cart</NavLink>
    </>
  )
}
