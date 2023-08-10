import { FormEvent, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

export default function SignIn() {
    const usernameField = useRef<HTMLInputElement>(null)
    const passwordField = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    const { user, setUser } = useContext(UserContext)
    const baseURL = import.meta.env.VITE_APP_BASE_API

    useEffect(() => {
        if(user.username){
            navigate('/')
        }
    }, [user])

    async function handleUserData(e: FormEvent){
        e.preventDefault();
        const res = await fetch(`${baseURL}/signin`, {
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
            establishUser(usernameField.current!.value, data.access_token);
            usernameField.current!.value = '';
            passwordField.current!.value = '';
        } else {
            window.alert('Invalid UserData')
        }
    }

    function establishUser(username: string, token: string){
        setUser({
                logged: true,
                username: username,
                token: token
            })
        localStorage.setItem("localUser", JSON.stringify( username ))
        localStorage.setItem("localToken", JSON.stringify( token ))
    }

    return (
        <>
            <h1>Sign In</h1>
            <form onSubmit={handleUserData} className="sign-component">
                <input type="text" ref={usernameField} placeholder="username" />
                <input type="password" ref={passwordField} placeholder="password" />
                <input type="submit" value="Sign In" />
            </form>
        </>
    )
}