import useGetOut from "../../hooks/useGetOut.js"
import { useParams } from "react-router-dom"
import useForm from "../../hooks/useForm.js"
import { useAddProduct } from "../../services/products.js"
import { AddProductContainer } from "./styled.js"

export default function AddProductPage() {
    const { form, handleForm } = useForm({ title: "", description: "", image: "", price: "" })
    const addProduct = useAddProduct()
    useGetOut()

    function submitForm(e) {
        e.preventDefault()
        const body = { ...form }
        addProduct(body)
    }

    return (
        <AddProductContainer>
            <h1>Adicionar</h1>
            <form onSubmit={submitForm}>
                <input
                    required
                    placeholder="Title"
                    name="title"
                    value={form.title}
                    onChange={handleForm}
                />
                <input
                    required
                    placeholder="Description"
                    name="description"
                    value={form.description}
                    onChange={handleForm}
                />
                <input
                    required
                    placeholder="Image"
                    name="image"
                    value={form.image}
                    onChange={handleForm}
                />
                <input
                    required
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={form.price}
                    onChange={handleForm}
                />
                <button type="submit">Save</button>
            </form>
        </AddProductContainer>
    )
}