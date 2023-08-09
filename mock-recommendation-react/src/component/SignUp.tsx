import { FormEvent, useContext, useRef } from "react";
import { UserContext } from "../contexts/UserProvider";


export default function SignUp() {
    
    const usernameField = useRef<HTMLInputElement>(null);
    const passwordField = useRef<HTMLInputElement>(null);
    const emailField = useRef<HTMLInputElement>(null);
    const fnameField = useRef<HTMLInputElement>(null);
    const lnameField = useRef<HTMLInputElement>(null);

    const { setUser } = useContext(UserContext)

    async function handleRegisterData(e: FormEvent){
        e.preventDefault();
        const res = await fetch('https://matrix-fakebook-123.onrender.com/api/register', {
          method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username: usernameField.current!.value,
                  password: passwordField.current!.value,
                  email: emailField.current!.value,
                  first_name: fnameField.current!.value,
                  last_name: lnameField.current!.value
                })
        })
          if(res.ok){
            const data = await res.json()
            console.log(data);
            setUser({
                logged: true,
                username: usernameField.current!.value,
                token: ''
            })
            resetForm()
          } else {
            window.alert('FAIL')
          }
      }

      function resetForm(){
        usernameField.current!.value = ''
        passwordField.current!.value = ''
        emailField.current!.value = ''
        fnameField.current!.value = ''
        lnameField.current!.value = ''
      }

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleRegisterData} className="sign-component">
                <input type="text" ref={ fnameField } placeholder="First name"/> <br />
                <input type="text" ref={ lnameField } placeholder="Last name"/> <br />
                <input type="text" ref={ usernameField } placeholder="username"/> <br />
                <input type="email" ref={ emailField } placeholder="email" /> <br />
                <input type="password" ref={ passwordField } placeholder="password"/> <br />
                <input type="submit" value="Sign Up" />
            </form>
        </>
            
        )
}