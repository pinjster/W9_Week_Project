import Body from "../component/Body"
import LoginInterface from "../interfaces/LoginInterface"
import { allItems } from "../types/MediaType"
import Media from "../component/Media"

export default function FeedPage({ login }: LoginInterface) {
    
    return(
        <>
        { login ? <h1>Must Be Logged In</h1> : 
        <Body navbar={true} login={login}>
            <h1>My Feed</h1>
            <div className="feed-items">
                { allItems.map((item , i) => <Media key={i} item={item} />) }
            </div>
        </Body>
        }
        </>
    )
}