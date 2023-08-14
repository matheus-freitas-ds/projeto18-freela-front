import { Link } from "react-router-dom"
import GetSamuraisLogo from "../../components/GetSamuraisLogo.js"
import useGetIn from "../../hooks/useGetIn.js"
import useForm from "../../hooks/useForm.js"
import { useSignUp } from "../../services/auth.js"
import { SingUpContainer } from "./styled.js"

export default function SignUpPage() {
    const { form, handleForm } = useForm({ name: "", email: "", password: "", confirmPassword: "", city: "", phone: "" })
    useGetIn()
    const signUp = useSignUp()

    function submitForm(e) {
        e.preventDefault()
        if (form.password !== form.confirmPassword) return alert("Passwords do not match")

        delete form.confirmPassword
        signUp(form)
    }

    return (
        <SingUpContainer>
            <form onSubmit={submitForm}>
                <GetSamuraisLogo />
                <input
                    required
                    placeholder="Name"
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                />
                <input
                    required
                    type="email"
                    autoComplete="username"
                    placeholder="E-mail"
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                />
                <input
                    required
                    minLength={3}
                    type="password"
                    autoComplete="new-password"
                    placeholder="Password"
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                />
                <input
                    required
                    minLength={3}
                    type="password"
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleForm}
                />
                <input
                    required
                    minLength={2}
                    placeholder="City"
                    name="city"
                    value={form.city}
                    onChange={handleForm}
                />
                <input
                    required
                    minLength={10}
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={handleForm}
                />
                <button type="submit">Sign Up</button>
            </form>

            <Link to="/">
                Already have an account? Login now!
            </Link>
        </SingUpContainer>
    )
}