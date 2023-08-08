import Navbar from "./Navbar"
import Footer from "./Footer"

interface BodyProps {
    navbar: boolean,
    login: boolean,
    children: JSX.Element | JSX.Element[]
}

export default function Body({navbar, children, login}: BodyProps) {
    
    return (
        <div className="body-component">
            { navbar && <Navbar login={login} />}
            {children}
            { <Footer login={login} /> }
        </div>
    )
}