import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import authContext from "../contexts/AuthContext.js"

export function useSignUp() {
    const navigate = useNavigate()

    return (body) => {
        axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body)
            .then(res => navigate("/"))
            .catch(err => alert(err.response.data))
    }
}

export function useLogin() {
    const navigate = useNavigate()
    const { setToken, setUserName } = useContext(authContext)

    return (body) => {
        axios.post(`${process.env.REACT_APP_API_URL}/login`, body)
            .then(res => {
                setToken(res.data.token)
                setUserName(res.data.userName)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("userName", res.data.userName)
                navigate("/home")
            })
            .catch((err) => alert(err.response.data))
    }
}