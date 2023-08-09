import { FormEvent, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

export default function SignIn() {
    const usernameField = useRef<HTMLInputElement>(null)
    const passwordField = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        if(user.username){
            navigate('/')
        }
    }, [user])

    async function handleUserData(e: FormEvent){
        e.preventDefault();
        const res = await fetch('https://matrix-fakebook-123.onrender.com/api/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameField.current!.value,
                password: passwordField.current!.value
            })
        })
        if(res.ok){
            const data = await res.json()
            setUser({
                logged: true,
                username: usernameField.current!.value.toString(),
                token: data.access_token
            })
            usernameField.current!.value = ''
            passwordField.current!.value = ''
        } else {
            window.alert('Invalid UserData')
        }
    }

    return (
        <>
            <h1>Sign In</h1>
            <form onSubmit={handleUserData} className="sign-component">
                <input type="text" ref={usernameField} placeholder="username" />
                <input type="password" ref={passwordField} placeholder="password" />
                <input type="submit" value="Sign In" onClick={ () => {

                }} />
            </form>
        </>
    )
}