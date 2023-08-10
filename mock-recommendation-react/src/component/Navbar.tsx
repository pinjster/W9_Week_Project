import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";
import Searchbar from "./Searchbar";


export default function Navbar(){

    const { user } = useContext(UserContext) 

    return (
        <ul className="navbar-list">
            <li><NavLink to="/">Home</NavLink></li>
            { user.logged ? 
            <li><NavLink to="/my-profile">Profile</NavLink></li>
            : 
            <li><NavLink to="/sign-up">Sign Up!</NavLink></li>
            }
            <li><Searchbar /></li>
            { user.logged ? 
            <li><NavLink to="/my-profile">{ user.username }</NavLink></li>
            : <li><NavLink to="/sign-in">Sign In</NavLink></li> }
            { user.logged && <li><NavLink to="/sign-out">Sign Out</NavLink></li> }
        </ul>
    )
}