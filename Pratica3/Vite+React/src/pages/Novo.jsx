import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContatosContext from '../contexts/ContatosContext';

export default function Novo() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erroNome, setErroNome] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');
  const { incluirContato } = useContext(ContatosContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome) {
      setErroNome('Nome é obrigatório');
      return;
    }
    if (!telefone) {
      setErroTelefone('Telefone é obrigatório');
      return;
    }
    incluirContato({ nome, telefone });
    navigate('/');
  };

  return (
    <div>
      <h2>Novo Contato</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        {erroNome && <p className="erro">{erroNome}</p>}
        <label>
          Telefone:
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </label>
        {erroTelefone && <p className="erro">{erroTelefone}</p>}
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
