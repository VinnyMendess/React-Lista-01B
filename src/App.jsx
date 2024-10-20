import React, { useState } from 'react';
import './App.css';
import Senha from './components/Autenticacao';
import Saudacao from './components/Saudacao';
import Saudacao2 from './components/Saudacao2';
import Idade from './components/Idade';
import Estudante from './components/EstEstudante';
import Nota from './components/Nota';
import EstNota from './components/EstNota';
import Desconto from './components/Desconto';
import Usuario from './components/Usuario';
import EstCondicao from './components/EstCondicao'; // Certifique-se de que esse componente existe

function App() {
  const [senha, setSenha] = useState('');
  const [idade, setIdade] = useState('');
  const [aluno, setAluno] = useState('');
  const [nota, setNota] = useState('');

  const handleChange = (event) => {
    setSenha(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIdade(event.target.value);
      event.target.value = ''; // Limpar campo de entrada
    }
  };

  return (
    <>
      {/* 1) Criar um Componente Simples: 
          Crie um componente que renderize o texto "Bem-vindo ao React!" na tela. */}
      <Saudacao />

      {/* 2) Passar uma Prop Simples: 
          Crie um componente que receba uma prop chamada nome e renderize a frase "Olá, [nome]!" onde [nome] é o valor da prop. */}
      <Saudacao2 nome="Olá Desenvolvedor!" />

      {/* 3) Renderizar Elementos Condicionalmente com If: 
          Crie um componente que receba uma prop chamada autenticado. Se for true, renderize "Bem-vindo, usuário!", senão não renderize nada. */}
      <input
        className="senha"
        type="text"
        value={senha}
        onChange={handleChange}
        placeholder="Senha"
      />
      <Senha senha={senha} />
      <br />

      {/* 4) Renderizar Elementos com If-Else: 
          Crie um componente que receba uma prop chamada idade. Se idade for maior ou igual a 18, renderize "Você é adulto", senão renderize "Você é menor de idade". */}
      <input
        className="idade"
        type="text"
        onKeyDown={handleKeyPress}
        placeholder="Idade"
      />
      <Idade idade={idade} caso1="Você é adulto" caso2="Você é menor de idade" />

      <Estudante aluno={aluno} setAluno={setAluno} />
      <EstCondicao
        aluno={aluno}
        caso1="Você é o estudante"
        caso2="Você não é o estudante"
      />
      <br />

      <Nota nota={nota} setNota={setNota} />
      <EstNota nota={nota} />

      <Desconto temDesconto={true} />
      <Desconto temDesconto={false} />

      <Usuario online={true} />
      <Usuario online={false} />
    </>
  );
}

export default App;
