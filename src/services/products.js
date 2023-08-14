import { useContext, useEffect, useState } from "react"
import authContext from "../contexts/AuthContext.js"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function useGetProducts() {
    const [products, setProducts] = useState(undefined)
    const { token } = useContext(authContext)

    const config = { headers: { Authorization: `Bearer ${token}` } }

    function getProducts() {
        axios.get(`${process.env.REACT_APP_API_URL}/products`)
    }
}

export function useAddProduct() {
    const { token } = useContext(authContext)
    const navigate = useNavigate()

    const config = { headers: { Authorization: `${token}` } }

    return (body) => {
        axios.post(`${process.env.REACT_APP_API_URL}/add-products`, body, config)
          .then(res => navigate("/home"))
          .catch(err => alert(err.response.data))
    }
}