import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
//import { useState } from 'react'
import MainPage from "./pages/MainPage"
import UserPage from "./pages/UserPage"
import SignUpPage from "./pages/SignUpPage"
import SignInPage from "./pages/SignInPage"
import FeedPage from "./pages/FeedPage"



function App() {
  //const [ login, loginUser ] = useState(false);
  const login = false

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage login={login} /> } />
        <Route path="/sign-in" element={ <SignInPage /> } />
        <Route path="/sign-up" element={ <SignUpPage /> } />
        <Route path="/user" element={ <UserPage login={login} /> } />
        <Route path="/my-feed" element={ <FeedPage login={login} /> } />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App