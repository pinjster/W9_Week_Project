
interface LoggedStatus {
    login: boolean
}

export default function Navbar({ login }: LoggedStatus){

    return (
        <ul className="navbar-list">
            <li><a href="/">Home</a></li>
            { login ? 
            <li><a href="/user">Profile</a></li>
            : 
            <li><a href="/sign-up">Sign Up!</a></li>
            }
            { login ? 
            <li><a href="/my-feed">My Feed</a></li>: <li><a href="/sign-in">Sign In</a></li> }
        </ul>
    )
}