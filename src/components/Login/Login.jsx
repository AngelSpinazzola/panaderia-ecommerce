import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Login.css";

export const Login = () => {
    const [userForm, setUserForm] = useState({ name: "", password: "" });
    const [error, setError] = useState("");
    const { user, login } = useAuthContext();
    const navigate = useNavigate();

    if (user) {
        return <Navigate to="/admin/alta-productos" replace />
    }

    const handlerChange = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(userForm.name, userForm.password);
        if (success) {
            toast.success("¡Bienvenido!");
            navigate("/admin/alta-productos");
        } else {
            toast.error("Usuario o contraseña incorrectos");
            setUserForm({ name: "", password: "" });
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2 className="login-title">Acceso de administrador</h2>
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Usuario</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={userForm.name}
                            onChange={handlerChange}
                            placeholder="admin"
                            required
                            autoComplete="username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={userForm.password}
                            onChange={handlerChange}
                            placeholder="•••••••••"
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    {error && (
                        <div className="login-error">
                            {error}
                        </div>
                    )}

                    <button type="submit" className="login-btn">
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
};