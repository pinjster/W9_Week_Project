import Body from "../component/Body"
import SignUp from "../component/SignUp"


export default function SignUpPage(){
    return (
        <Body navbar={false}>
            <SignUp />
        </Body>
    )
}