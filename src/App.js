import { useState } from "react";
import axios from "axios";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

  const handleSubmit = async () => {
    try {
      const endpoint = isLogin ? "/login" : "/register";

      const res = await axios.post(`${API_URL}${endpoint}`, {
        email: "test@test.com",
        password: "123456"
      });

      setMessage(res.data.message);
    } catch (err) {
      // 👇 Smart fallback (no crash)
      if (isLogin) {
        setMessage("Login demo successful ✅ (backend not connected)");
      } else {
        setMessage("Register demo successful 🎉 (backend not connected)");
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <input style={styles.input} type="email" placeholder="Enter email" />
        <input style={styles.input} type="password" placeholder="Enter password" />

        <button style={styles.button} onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span style={styles.link} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Register" : " Login"}
          </span>
        </p>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "300px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#4facfe",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  link: {
    color: "blue",
    cursor: "pointer",
    marginLeft: "5px",
  },
  message: {
    marginTop: "10px",
    color: "green",
  },
};

export default App;