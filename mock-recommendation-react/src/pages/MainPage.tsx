import Body from "../component/Body"
import LoginInterface from "../interfaces/LoginInterface"
import { allItems } from "../types/MediaType"
import Media  from "../component/Media"

export default function MainPage({ login }: LoginInterface){
    return (
        <Body navbar={true} login={login}>
            <h1>Welcome</h1>
            <div className="main-items">
            { allItems.map((item , i) => <Media key={i} item={item} />) }
            </div>
        </Body>
    )
}