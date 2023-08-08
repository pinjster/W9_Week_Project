

interface FooterProps {
    login: boolean
}

export default function Footer({login}: FooterProps){

    return(
        <div className="footer-component">
            <hr />
            <h6>By Benjamin Copen</h6>
            <ul>
                <li><a href="/">Home</a></li>
                { login ? <li><a href="/user">Profile</a></li> : <li><a href="/sign-up">Profile</a></li>}
                <li><a href="/sign-in">Sign In</a></li>
                { login ? <li><a href="/">Sign Up</a></li> : <li><a href="/sign-up">Sign Up</a></li>}
                { login ? <li><a href="/my-feed">My Feed</a></li>: <li><a href="/sign-in">My Feed</a></li> }
            </ul>
        </div>
    )
}