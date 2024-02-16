import { FcSearch } from "react-icons/fc";
import './style.css'
import { useState } from 'react'
import api from './sevices/api'


function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch(){
    if(input == ''){
      alert('Preencha algum CEP.')
      setCep('')
      setInput('')
      return this
      
    }

    try {
        const response = await api.get(`${input}/json`)
        setCep(response.data)
    } catch (error) {
      alert('Erro encontrado: ' + error)
      setInput('')
      setCep('')
    }
  }

  function limpaCampo(e){      
    if (e.length == 0){
      setInput('')
      setCep('')
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="conteinerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e)=>{setInput(e.target.value); limpaCampo(e.target.value)}}
        />

        <button 
          className="buttonSearch" 
          onClick={handleSearch}>
          <FcSearch 
            size={25}
            color="#fff"          
          />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep} </h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}

    </div>
  );
}

export default App;