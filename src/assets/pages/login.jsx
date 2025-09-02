import React, { useReducer } from "react";
import "./style.css";

// Define a ação para a função reducer
const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.error,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
};

const initialState = {
  username: "",
  password: "",
  error: "",
};

export default function Login() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { username, password, error } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_ERROR" }); // Limpa o erro anterior

    if (!username || !password) {
      dispatch({ type: "SET_ERROR", error: "Por favor, preencha todos os campos." });
      return;
    }

    // Lógica de autenticação simulada
    console.log("Tentando login com:", { username, password });
    
    // Simula uma requisição assíncrona
    setTimeout(() => {
        // Exemplo: se o login fosse bem-sucedido
        // alert("Login realizado com sucesso! Redirecionando...");
        console.log("Login realizado com sucesso! Redirecionando...");
        // Exemplo: Se houvesse um erro na API
        // dispatch({ type: 'SET_ERROR', error: 'Usuário ou senha inválidos.' });
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="logo">OTIS</div>
        <h1 className="welcome-text">Bem-vindo(a) à OTIS</h1>
        <p className="subtitle">Vamos fazer seu login</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => dispatch({ type: "SET_FIELD", field: "username", value: e.target.value })}
            placeholder="Digite seu usuário"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => dispatch({ type: "SET_FIELD", field: "password", value: e.target.value })}
            placeholder="Digite sua senha"
            required
          />
        </div>

        <button type="submit" className="btn-login">
          Entrar
        </button>
      </form>

      <div className="login-footer">
        <p>
          Problemas para acessar? <a href="#">Recuperar senha</a>
        </p>
      </div>
    </div>
  );
}