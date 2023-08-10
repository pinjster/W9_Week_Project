import { FormEvent, useContext, useRef } from "react";
import { UserContext } from "../contexts/UserProvider";
import { useNavigate } from "react-router-dom";


export default function SignUp() {
    
    const usernameField = useRef<HTMLInputElement>(null);
    const passwordField = useRef<HTMLInputElement>(null);
    const emailField = useRef<HTMLInputElement>(null);

    const { setUser } = useContext(UserContext)
    const baseURL = import.meta.env.VITE_APP_BASE_API
    const navigate = useNavigate()

    async function handleRegisterData(e: FormEvent){
        e.preventDefault();
        const res = await fetch(`${baseURL}/signup`, {
          method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username: usernameField.current!.value,
                  email: emailField.current!.value,
                  password: passwordField.current!.value,
                })
        })
          if(res.ok){
            const data = await res.json()
            establishUser(usernameField.current!.value ,data.access_token)
            resetForm()
            navigate('/')
          } else {
            window.alert('FAIL')
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

      function resetForm(){
        usernameField.current!.value = ''
        passwordField.current!.value = ''
        emailField.current!.value = ''
      }

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleRegisterData} className="sign-component">
                <input type="text" ref={ usernameField } placeholder="username"/> <br />
                <input type="email" ref={ emailField } placeholder="email" /> <br />
                <input type="password" ref={ passwordField } placeholder="password"/> <br />
                <input type="submit" value="Sign Up" />
            </form>
        </>
            
        )
}