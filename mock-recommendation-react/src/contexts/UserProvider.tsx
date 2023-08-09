import { Dispatch, SetStateAction, createContext, useState } from "react";
import { CurrentUser } from "../types";


interface UserContextValues {
    user: CurrentUser,
    setUser: Dispatch<SetStateAction<CurrentUser>>
}

export const UserContext = createContext({} as UserContextValues)

export default function UserProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
    const [user, setUser] = useState<CurrentUser>({username: '', token: '', logged: false})

    const value = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
};
