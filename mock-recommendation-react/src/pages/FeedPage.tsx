import Body from "../component/Body"
import { useContext } from "react"
import { UserContext } from "../contexts/UserProvider"

export default function FeedPage() {
    
    const { user } = useContext(UserContext) 

    return(
        <>
        { user.logged ? <h1>Must Be Logged In</h1> : 
        <Body navbar={true} >
            <h1>My Feed</h1>
        </Body>
        }
        </>
    )
}