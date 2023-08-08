import Body from "../component/Body"
import SignIn from "../component/SignIn"


export default function SignInPage(){
    return (
        <Body navbar={true} login={false}>
            <SignIn />
        </Body>
    )
}