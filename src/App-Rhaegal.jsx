import React,  { useState} from 'react';
import './App.css'
import Senha from './components/Autenticacao'
import Saudacao from './components/Saudacao'
import Saudacao2 from './components/Saudacao2'
import Idade from './components/Idade';
import VerificadorAluno from './components/Escola';


function App() {
  const [senha, setSenha] = useState('');
  const [idade, setIdade] = useState('');


  const handleChange = (event) => {
    setSenha(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIdade(event.target.value);
      event.target.value = '';
  }
  };

  return (
    <>
{/* 1) Criar um Componente Simples: 

Crie um componente que renderize o texto "Bem-vindo ao React!" na tela. */}
     <Saudacao/>


{/* 2) Passar uma Prop Simples: 

Crie um componente que receba uma prop chamada nome e renderize a frase "Olá, [nome]!" onde [nome] é o valor da prop.  */}
     <Saudacao2 nome=" Olá Desenvolvedor!"/>


{/* 3) Renderizar Elementos Condicionalmente com If: 

Crie um componente que receba uma prop chamada autenticado. Se for true, renderize "Bem-vindo, usuário!", senão não renderize nada.  */}
     <input className='senha' type="text" value={senha} onChange={handleChange} placeholder='senha' />
     <Senha senha={senha}/>
     <br />


{/* 4) Renderizar Elementos com If-Else: 

Crie um componente que receba uma prop chamada idade. Se idade for maior ou igual a 18, renderize "Você é adulto", senão renderize "Você é menor de idade".      */}
     <input className='idade' type="text" onKeyPress={handleKeyPress} placeholder='Idade' />
    <Idade idade={idade} caso1=" adulto" caso2=" menor de idade"/>


{/* 5) Renderizar com If-Else Simples: 

Crie um componente que receba uma prop chamada estudante. Se for true, renderize "Você é um estudante", senão renderize "Você não é um estudante" */}
    <VerificadorAluno ra="01"/>

    </>
  )
}

export default App
