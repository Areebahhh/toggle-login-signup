import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginSignup from './loginAndSignup/codefiles/LoginSignup'

// fyp-login\src\loginAndSignup\codefiles\LoginSignup.jsx

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<LoginSignup />}></Route>


    </Routes>
    </BrowserRouter>
    </>
    
    

  )
}

export default App
