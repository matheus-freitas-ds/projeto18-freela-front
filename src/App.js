import { BrowserRouter, Routes, Route } from "react-router-dom"
import { styled } from "styled-components"
import LoginPage from "./pages/LoginPage"
import authContext from "./contexts/AuthContext.js"
import { useState } from "react"
import { mainColor } from "./constants/colors.js"

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [userName, setUserName] = useState(localStorage.getItem("userName"))

  return (
    <PagesContainer>
      <authContext.Provider value={{ token, setToken, userName, setUserName }}>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = { <LoginPage /> } />
          </Routes>
        </BrowserRouter>
      </authContext.Provider>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: ${mainColor};
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`