import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserProvider';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/base/Snackbar';

export default function SignOutPage() {
    
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        setUser({username: "", token: "", logged: false})
        localStorage.removeItem("localUser")
        localStorage.removeItem("localToken")
        navigate('/')
    })

    return (
        <Snackbar>{ <p>Successfully Logged Out</p> }</Snackbar>
    )
};
