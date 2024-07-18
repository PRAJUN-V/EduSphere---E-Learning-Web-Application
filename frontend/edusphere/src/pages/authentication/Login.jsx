import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import { jwtDecode } from "jwt-decode";

export const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("student");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("accounts/api/token/", { username, password })

      const { access, refresh } = res.data;
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

      const decoded = jwtDecode(access);
      const userRole = decoded.role;
      switch (userRole) {
        case 'admin':
            navigate('/admin/dashboard');
            break;
        case 'student':
            navigate('/');
            break;
        case 'instructor':
            navigate('/instructor/dashboard');
            break;
        default:
            navigate('/login');
            break;
    }
    } catch (error) {
      alert(error)
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          value={password}
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button className="form-button" type="submit">
          Login
        </button>
      </form>
    </>
  )
}
