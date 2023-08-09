import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserProvider"
import { useNavigate } from "react-router-dom"


export default function MyProfilePage() {
    
    const { user } = useContext(UserContext) 
    const navigate = useNavigate()

    useEffect(() => {
        if(!user.logged) {
            navigate('/')
        }
    })
    return (
        <p></p>
    )
};
