import { NavLink } from "react-router-dom"
import UserNavigation from "./UserNavigation";
import { UserContext } from "../layouts/MainLayout";
import { useContext } from "react";
export default function Header() {

  const {user}=useContext(UserContext)
  return (
    <header style={{minHeight: "100px", width: "100%", margin: "auto", display: "flex", justifyContent: "space-evenly"}}>

        <NavLink to="/">Home</NavLink>
        <NavLink to='/login'>Login</NavLink>

        {user === "authenticated" ?<UserNavigation/>: null}
    </header>
  )
}
