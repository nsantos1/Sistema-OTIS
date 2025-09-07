import React, { useState } from 'react';
import './style.css';

export const Forms = () => {
  const [selectedImage, setSelectedImage] = useState(
    'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=134&h=134&fit=crop'
  );

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = () => {
    document.getElementById('imageUpload')?.click();
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="main-title">EDITAR COLABORADOR</h1>

        <div className="photo-section">
          <div className="photo-wrapper" onClick={triggerImageUpload}>
            <img
              src={selectedImage}
              alt="Colaborador"
              className="profile-photo"
            />
          </div>
          <span className="change-photo-link" onClick={triggerImageUpload}>
            Alterar foto
          </span>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>

        <div className="form-sections">
          <div className="left-section">
            <div className="section">
              <h2 className="section-title">Dados gerais</h2>

              <div className="field">
                <label className="field-label">Nome</label>
                <input
                  type="text"
                  placeholder="Digite o nome completo"
                  className="text-input"
                />
              </div>

              <div className="field-row">
                <div className="field">
                  <label className="field-label">Cargo</label>
                  <div className="dropdown-wrapper">
                    <select className="dropdown">
                      <option>Operário</option>
                      <option>Engenheiro</option>
                      <option>Supervisor</option>
                      <option>Gerente</option>
                    </select>
                    <span className="dropdown-arrow">▼</span>
                  </div>
                </div>

                <div className="field">
                  <label className="field-label">Setor</label>
                  <div className="dropdown-wrapper">
                    <select className="dropdown">
                      <option>Fábrica</option>
                      <option>Vendas</option>
                      <option>RH</option>
                      <option>Engenharia</option>
                    </select>
                    <span className="dropdown-arrow">▼</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <h2 className="section-title">Local de trabalho</h2>
              <input
                type="text"
                placeholder="Digite o endereço de trabalho"
                className="text-input"
              />
            </div>

            <div className="section">
              <h2 className="section-title">Horário de trabalho</h2>
              <div className="time-row">
                <input
                  type="text"
                  placeholder="Início"
                  className="time-input"
                />
                <span className="time-separator">—</span>
                <input
                  type="text"
                  placeholder="Término"
                  className="time-input"
                />
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="section">
              <h2 className="section-title">Contato</h2>

              <div className="field">
                <label className="field-label">Email</label>
                <input
                  type="email"
                  placeholder="Digite o email do colaborador"
                  className="text-input"
                />
              </div>

              <div className="field">
                <label className="field-label">Telefone</label>
                <input
                  type="tel"
                  placeholder="Digite o telefone do colaborador"
                  className="text-input"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="buttons-section">
          <button className="action-button primary">SALVAR ALTERAÇÕES</button>
          <button className="action-button secondary">DESCARTAR ALTERAÇÕES</button>
        </div>
      </div>
    </div>
  );
};

export default Forms;