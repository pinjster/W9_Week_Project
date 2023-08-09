import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
//import { useState } from 'react'
import MainPage from "./pages/MainPage"
import UserPage from "./pages/UserPage"
import SignUpPage from "./pages/SignUpPage"
import SignInPage from "./pages/SignInPage"
import FeedPage from "./pages/FeedPage"
import SignOutPage from "./pages/SignOutPage"
import MyProfilePage from "./pages/MyProfilePage"
import FindMediaPage from "./pages/FindMediaPage"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/sign-in" element={ <SignInPage /> } />
        <Route path="/sign-up" element={ <SignUpPage /> } />
        <Route path="/sign-out" element={ <SignOutPage /> } />
        <Route path="/user" element={ <UserPage /> } />
        <Route path="/my-feed" element={ <FeedPage /> } />
        <Route path="/my-profile" element={ <MyProfilePage /> } />
        <Route path="/search-media/:title" element={ <FindMediaPage /> } />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App