import useGetOut from "../../hooks/useGetOut.js"
import { useContext } from "react"
import authContext from "../../contexts/AuthContext.js"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { HomeContainer, Header, ProductsContainer, Footer } from "./styled.js"

export default function HomePage() {
/*     const { userName } = useContext(authContext)
    const navigate = useNavigate()
    useGetOut() */

    return (
        <HomeContainer>
            <Header>
                <h1>Services Available</h1>
            </Header>

            <ProductsContainer>

            </ProductsContainer>

            <Footer>
                <Link to="/home">
                    Home
                </Link>
                <Link to="/manage-products">
                    Manage
                </Link>
                <Link to="/add-products">
                    Add
                </Link>
            </Footer>
        </HomeContainer>
    )
}