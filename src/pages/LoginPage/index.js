import { Link } from "react-router-dom"
import useForm from "../../hooks/useForm.js"
import { useLogin } from "../../services/auth.js"
import useGetIn from "../../hooks/useGetIn.js"
import GetSamuraisLogo from "../../components/GetSamuraisLogo.js"
import { LoginContainer } from "./styled.js"

export default function LoginPage() {
    const { form, handleForm } = useForm({ email: "", password: "" })
    const login = useLogin()
    useGetIn()

    function submitForm(e) {
        e.preventDefault()
        login(form)
    }

    return (
        <LoginContainer>
            <form onSubmit={submitForm}>
                <GetSamuraisLogo />
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
                <button type="submit">Enter</button>
            </form>

            <Link to="/sign-up">
                First time? Sign up!
            </Link>
        </LoginContainer>
    )
}