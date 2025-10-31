import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Login() {
  const [hoverForgot, setHoverForgot] = useState(false);

  const navegacao = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate login logic
      if (
        formData.email === "admin@otis.com" &&
        formData.password === "123456"
      ) {
        navegacao("/dashboard");
      } else {
        alert("Usuario ou senha incorretos");
      }
    } catch (error) {
      alert("Erro ao fazer login. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    alert("Link de recuperação enviado para seu email");
  };

  return (
    <main style={{
      backgroundColor: "var(--cor-background)",
      height: "100vh",
      padding: "20vh",
    }}>
    <div
      className="bg-white"
      style={{
        maxWidth: "400px",
        borderRadius: "12px",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        boxSizing: "border-box",
        margin: "auto",
        padding: "2.5rem",
      }}
    >
      <div
        className="text-center"
        style={{
          marginBottom: "2rem",
        }}
      >
        <h1
          className="fw-bold mb-2"
          style={{
            fontSize: "1.6rem",
            color: "#1f2937",
            lineHeight: "1.2",
          }}
        >
          Bem vindo(a) a<br />
          OTIS
        </h1>
        <p
          className="m-0"
          style={{
            fontSize: "0.9rem",
            color: "6b7280",
          }}
        >
          Vamos fazer seu login
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginBottom: "1.25rem",
          }}
        >
          <label
            htmlFor="email"
            className="d-block mb-2"
            style={{
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#374151",
            }}
          >
            Usuário
          </label>
          <div className="position-relative">
            <input
              type="email"
              id="email"
              name="email"
              className="w-100 bg-white"
              style={{
                padding: "0.75rem 1rem",
                paddingRight: "2.5rem",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "0.9rem",
                color: "#1f2937",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxSizing: "border-box",
              }}
              placeholder="Digite seu usuário"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <span
              className="position-absolute top-50 fs-6"
              style={{
                right: "1rem",
                transform: "translateY(-50%)",
                color: "#9ca3af",
                pointerEvents: "none",
              }}
            >
              📧
            </span>
          </div>
        </div>

        <div className="form-group">
          <label
            htmlFor="password"
            className="d-block mb-2"
            style={{
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#374151",
            }}
          >
            Senha
          </label>
          <div className="position-relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-100 bg-white"
              style={{
                padding: "0.75rem 1rem",
                paddingRight: "2.5rem",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "0.9rem",
                color: "#1f2937",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxSizing: "border-box",
              }}
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <button
              type="button"
              className="position-absolute border-0 p-2 fs-6"
              style={{
                right: "0.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                cursor: "pointer",
                color: "#6b7280",
              }}
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <label
            className="d-flex align-items-center"
            style={{
              fontSize: "0.875rem",
              color: "#6b7280",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              className="me-2"
              style={{
                width: "1rem",
                height: "1rem",
                accentColor: "var(--cor-principal)",
              }}
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
            />
            <span className="checkbox-custom"></span>
            Lembrar de mim
          </label>

          <button
            type="button"
            className="border-0 text-decoration-none"
            style={{
              background: "none",
              fontSize: "0.875rem",
              color: hoverForgot ? "#312e81" : "var(--cor-principal)",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={() => setHoverForgot(true)}
            onMouseLeave={() => setHoverForgot(false)}
            onClick={handleForgotPassword}
            disabled={isLoading}
          >
            Esqueceu a senha?
          </button>
        </div>

        <button
          type="submit"
          className={`login-button ${isLoading ? "loading" : ""}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span
                className="rounded-circle"
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  border: "3px solid rgba(255, 255, 255, 0.3)",
                  borderTopColor: "#fff",
                  animation: "spin 1s linear infinite",
                }}
              ></span>
              Entrando...
            </>
          ) : (
            "Entrar"
          )}
        </button>

        <div
          className="p-3"
          style={{
            marginTop: "2rem",
            backgroundColor: "#f0f9ff",
            border: "1px solid #bae6fd",
            borderRadius: "6px",
            fontSize: "0.8rem",
            color: "#0c4a6e",
          }}
        >
          <p
            style={{
              margin: "0.2rem 0",
            }}
          >
            <strong className="fw-semibold">
              Credenciais de demonstração:
            </strong>
          </p>
          <p
            style={{
              margin: "0.2rem 0",
            }}
          >
            Email: admin@otis.com
          </p>
          <p
            style={{
              margin: "0.2rem 0",
            }}
          >
            Senha: 123456
          </p>
        </div>
      </form>
    </div>
    </main>
  );
}

export default Login;
