import { NavLink } from "react-router-dom"
import UserNavigation from "./UserNavigation"

export default function Header() {
  return (
    <header style={{minHeight: "100px", width: "100%", margin: "auto", display: "flex", justifyContent: "space-evenly"}}>

        <NavLink to="/">Home</NavLink>
        <NavLink to='/login'>Login</NavLink>

        <UserNavigation/>
    </header>
  )
}
