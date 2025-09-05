import React, { useState, useCallback, useEffect } from 'react';
import './style.css';

const ConfirmationModal = ({ isOpen, onConfirm, onCancel, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onCancel} className="btn-cancel">Cancelar</button>
          <button onClick={onConfirm} className="btn-primary">Confirmar</button>
        </div>
      </div>
    </div>
  );
};

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Salvando dados...</p>
  </div>
);

const ColaboradorForm = () => {
  const [formData, setFormData] = useState({
    foto: null,
    nome: '',
    email: '',
    carga: '',
    setor: '',
    telefone: '',
    operante: true,
    fabrica: '',
    formaColaborador: '',
    serviente: false,
    vendas: false,
    corrente: false,
    gapunivas: false,
    localTrabalho: '',
    horarioInicio: '08:00',
    horarioTermino: '17:00'
  });

  const [fotoPreview, setFotoPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [touched, setTouched] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormData({
        foto: null,
        nome: 'João Silva',
        email: 'joao.silva@empresa.com',
        carga: 'Carga padrão',
        setor: 'Produção',
        telefone: '(11) 99999-9999',
        operante: true,
        fabrica: 'Fábrica Principal',
        formaColaborador: 'Tempo integral',
        serviente: true,
        vendas: false,
        corrente: false,
        gapunivas: true,
        localTrabalho: 'Setor de Produção A',
        horarioInicio: '08:00',
        horarioTermino: '17:00'
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    setTouched(prev => ({ ...prev, [name]: true }));

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  const handleFotoChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.match('image.*')) {
      setErrors(prev => ({ ...prev, foto: 'Selecione um arquivo de imagem válido' }));
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, foto: 'A imagem deve ter menos de 2MB' }));
      return;
    }

    setFormData(prev => ({ ...prev, foto: file }));

    const reader = new FileReader();
    reader.onload = (e) => {
      setFotoPreview(e.target.result);
    };
    reader.readAsDataURL(file);

    if (errors.foto) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.foto;
        return newErrors;
      });
    }
  }, [errors]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório';
    if (!formData.localTrabalho.trim()) newErrors.localTrabalho = 'Local de trabalho é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        document.getElementById(firstErrorField)?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Dados do formulário:', formData);
      alert('Alterações salvas com sucesso!');
      setTouched({});
    } catch (error) {
      console.error('Erro ao salvar:', error);
      alert('Erro ao salvar as alterações. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    setFormData({
      foto: null,
      nome: '',
      email: '',
      carga: '',
      setor: '',
      telefone: '',
      operante: true,
      fabrica: '',
      formaColaborador: '',
      serviente: false,
      vendas: false,
      corrente: false,
      gapunivas: false,
      localTrabalho: '',
      horarioInicio: '08:00',
      horarioTermino: '17:00'
    });
    setFotoPreview(null);
    setErrors({});
    setTouched({});
    setShowCancelModal(false);
  };

  const cancelCancel = () => {
    setShowCancelModal(false);
  };

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
    }
    return value;
  };

  const handlePhoneChange = (e) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    e.target.value = formattedValue;
    handleInputChange(e);
  };

  return (
    <div className="colaborador-form-container">
      <h2>EDITAR COLABORADOR</h2>
      
      <form onSubmit={handleSubmit} className="colaborador-form">
        <div className="form-section">
          <h3>Alterar foto</h3>
          <div className="foto-container">
            <div className="foto-preview">
              {fotoPreview ? (
                <img src={fotoPreview} alt="Preview" />
              ) : (
                <div className="foto-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              )}
            </div>
            <div className="foto-actions">
              <input
                type="file"
                id="foto"
                accept="image/*"
                onChange={handleFotoChange}
                className="file-input"
              />
              <label htmlFor="foto" className="btn-secondary">
                <i className="fas fa-upload"></i> Selecionar imagem
              </label>
              {errors.foto && <span className="error-text">{errors.foto}</span>}
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Dados gerais</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="nome">Nome *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                className={errors.nome ? 'error' : ''}
                placeholder="Digite o nome completo"
              />
              {errors.nome && <span className="error-text">{errors.nome}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'error' : ''}
                placeholder="exemplo@empresa.com"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="carga">Carga</label>
              <input
                type="text"
                id="carga"
                name="carga"
                value={formData.carga}
                onChange={handleInputChange}
                placeholder="Digite a carga"
              />
            </div>

            <div className="form-group">
              <label htmlFor="setor">Setor</label>
              <select
                id="setor"
                name="setor"
                value={formData.setor}
                onChange={handleInputChange}
              >
                <option value="">Selecione um setor</option>
                <option value="Administração">Administração</option>
                <option value="Produção">Produção</option>
                <option value="Vendas">Vendas</option>
                <option value="Recursos Humanos">Recursos Humanos</option>
                <option value="TI">TI</option>
                <option value="Financeiro">Financeiro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone *</label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handlePhoneChange}
                className={errors.telefone ? 'error' : ''}
                placeholder="(00) 00000-0000"
                maxLength="15"
              />
              {errors.telefone && <span className="error-text">{errors.telefone}</span>}
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="operante"
                  checked={formData.operante}
                  onChange={handleInputChange}
                />
                Operante
              </label>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Contato</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fabrica">Fábrica</label>
              <select
                id="fabrica"
                name="fabrica"
                value={formData.fabrica}
                onChange={handleInputChange}
              >
                <option value="">Selecione uma fábrica</option>
                <option value="Fábrica Principal">Fábrica Principal</option>
                <option value="Fábrica Norte">Fábrica Norte</option>
                <option value="Fábrica Sul">Fábrica Sul</option>
                <option value="Fábrica Leste">Fábrica Leste</option>
                <option value="Fábrica Oeste">Fábrica Oeste</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="formaColaborador">Forma de colaborador</label>
              <input
                type="text"
                id="formaColaborador"
                name="formaColaborador"
                value={formData.formaColaborador}
                onChange={handleInputChange}
                placeholder="Digite a forma de colaborador"
              />
            </div>

            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="serviente"
                  checked={formData.serviente}
                  onChange={handleInputChange}
                />
                Serviente
              </label>
            </div>

            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="vendas"
                  checked={formData.vendas}
                  onChange={handleInputChange}
                />
                Vendas
              </label>
            </div>

            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="corrente"
                  checked={formData.corrente}
                  onChange={handleInputChange}
                />
                Corrente
              </label>
            </div>

            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="gapunivas"
                  checked={formData.gapunivas}
                  onChange={handleInputChange}
                />
                Gapunivas
              </label>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Local de trabalho</h3>
          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="localTrabalho">Local de trabalho *</label>
              <input
                type="text"
                id="localTrabalho"
                name="localTrabalho"
                value={formData.localTrabalho}
                onChange={handleInputChange}
                placeholder="Digite o local de trabalho"
                className={errors.localTrabalho ? 'error' : ''}
              />
              {errors.localTrabalho && <span className="error-text">{errors.localTrabalho}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="horarioInicio">Início</label>
              <input
                type="time"
                id="horarioInicio"
                name="horarioInicio"
                value={formData.horarioInicio}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="horarioTermino">Término</label>
              <input
                type="time"
                id="horarioTermino"
                name="horarioTermino"
                value={formData.horarioTermino}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            className="btn-cancel" 
            onClick={handleCancel}
            disabled={isSubmitting}
          >
            <i className="fas fa-times"></i> DESCARTAR ALTERAÇÕES
          </button>
          <button 
            type="submit" 
            className="btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> SALVANDO...
              </>
            ) : (
              <>
                <i className="fas fa-check"></i> SALVAR ALTERAÇÕES
              </>
            )}
          </button>
        </div>
      </form>

      <ConfirmationModal
        isOpen={showCancelModal}
        onConfirm={confirmCancel}
        onCancel={cancelCancel}
        title="Descartar Alterações"
        message="Tem certeza que deseja descartar todas as alterações? Esta ação não pode ser desfeita."
      />

      {isSubmitting && <LoadingSpinner />}
    </div>
  );
};

export default ColaboradorForm;
