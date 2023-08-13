import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import authContext from "../contexts/AuthContext.js"

export default function useGetOut() {
    const { userName, token } = useContext(authContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!token || !userName) navigate("/")
    }, [])
}