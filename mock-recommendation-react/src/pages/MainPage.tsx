import Body from "../component/Body"
import { useContext } from "react"
import { UserContext } from "../contexts/UserProvider"

export default function MainPage(){

    const { user } = useContext(UserContext) 

    return (
        <Body navbar={true}>
            <h1>Welcome</h1>
            { user.logged ? <span>{ user.username }</span> : <br /> }
            <div className="main-items">
            </div>
        </Body>
    )
}