import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ContatosContext = createContext({
  meusContatos: [],
  incluirContato: () => {},
});

export function ContatosContextProvider(props) {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/contatos')
      .then(response => {
        setContatos(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar contatos:', error);
      });
  }, []);

  const incluir = (contato) => {
    axios.post('https://api.example.com/contatos', contato)
      .then(response => {
        setContatos([...contatos, response.data]);
      })
      .catch(error => {
        console.error('Erro ao adicionar contato:', error);
      });
  };

  const contexto = {
    meusContatos: contatos,
    incluirContato: incluir,
  };

  return (
    <ContatosContext.Provider value={contexto}>
      {props.children}
    </ContatosContext.Provider>
  );
}

export default ContatosContext;
