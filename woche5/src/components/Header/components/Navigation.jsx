import {NavLink} from 'react-router-dom'

export default function Navigation(){
    return (
        <nav>
            <ul>
                <NavLink to="/" style={({ isActive }) => ({color: isActive ? "red" : "blue"})}>
                    <li>Homepage</li>
                </NavLink>
                <NavLink to="/article" style={({ isActive }) => ({ color: isActive ? "red" : "blue" })
                }>
                    <li>Articles</li>
                </NavLink>
            </ul>
        </nav>
    )
}