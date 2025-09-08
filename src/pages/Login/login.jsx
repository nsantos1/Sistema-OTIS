import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './style.css'

function Login () {
  const navegacao = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Simulate login logic
      if (formData.email === 'admin@otis.com' && formData.password === '123456') {
        navegacao("/dashboard");
      } else {
        alert('Usuario ou senha incorretos')
      }
    } catch (error) {
      alert('Erro ao fazer login. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleForgotPassword = () => {
    alert('Link de recuperação enviado para seu email')
  }

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="login-header-title">Bem vindo(a) a<br/>OTIS</h1>
        <p className="login-header-subtitle">Vamos fazer seu login</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Usuário</label>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Digite seu usuário"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <span className="input-icon">📧</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Senha</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="form-input"
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
        </div>

        <div className="form-options">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
            />
            <span className="checkbox-custom"></span>
            Lembrar de mim
          </label>

          <button
            type="button"
            className="forgot-password"
            onClick={handleForgotPassword}
            disabled={isLoading}
          >
            Esqueceu a senha?
          </button>
        </div>

        <button
          type="submit"
          className={`login-button ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="loading-spinner"></span>
              Entrando...
            </>
          ) : (
            'Entrar'
          )}
        </button>

        <div className="demo-credentials">
          <p className="demo-credentials-item">
            <strong className="demo-credentials-label">Credenciais de demonstração:</strong>
          </p>
          <p className="demo-credentials-item">Email: admin@otis.com</p>
          <p className="demo-credentials-item">Senha: 123456</p>
        </div>
      </form>
    </div>
  )
}

export default Login;