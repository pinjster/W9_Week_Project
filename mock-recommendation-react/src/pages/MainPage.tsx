import Body from "../component/Body"
import { useContext } from "react"
import { UserContext } from "../contexts/UserProvider"

export default function MainPage(){

    const { user } = useContext(UserContext) 

    return (
        <Body navbar={true}>
            <h1>Welcome { user.logged && <span>{ user.username }</span> } </h1>
            <div className="main-items">
            </div>
        </Body>
    )
}