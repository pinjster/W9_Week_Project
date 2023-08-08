import LoginInterface from "../interfaces/LoginInterface"

export default function UserPage({ login }: LoginInterface){
    
    return (
        <>
            <h3>Username</h3>
            <p>{login}</p>
        </>
    )
}