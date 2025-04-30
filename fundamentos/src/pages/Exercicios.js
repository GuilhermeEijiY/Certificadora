import React, { useState } from 'react';
import './Exercicios.css';

const perguntas = [
  {
    pergunta: 'Qual será o resultado de: 2 + "2"?',
    validar: (res) => res.trim() === '22',
  },
  {
    pergunta: 'Qual o valor de: true && false?',
    validar: (res) => res.trim().toLowerCase() === 'false',
  },
  {
    pergunta: 'Quantos elementos tem o array: [1, 2, 3].length?',
    validar: (res) => res.trim() === '3',
  },
  {
    pergunta: 'O que typeof null retorna?',
    validar: (res) => res.trim().toLowerCase() === 'object',
  },
  {
    pergunta: 'Qual o resultado de: "5" == 5?',
    validar: (res) => res.trim().toLowerCase() === 'true',
  },
  {
    pergunta: 'Qual o resultado de: [] == false?',
    validar: (res) => res.trim().toLowerCase() === 'true',
  },
  {
    pergunta: 'Qual a saída de: !!0?',
    validar: (res) => res.trim().toLowerCase() === 'false',
  },
  {
    pergunta: 'typeof NaN é?',
    validar: (res) => res.trim().toLowerCase() === 'number',
  },
  {
    pergunta: 'Qual o resultado de: "10" - 5?',
    validar: (res) => res.trim() === '5',
  },
  {
    pergunta: 'Qual o valor booleano de uma string vazia ("")?',
    validar: (res) => res.trim().toLowerCase() === 'false',
  },
  {
    pergunta: 'Qual o resultado de: 3 > 2 > 1?',
    validar: (res) => res.trim().toLowerCase() === 'false',
  },
  {
    pergunta: 'O que acontece se somar um número com undefined?',
    validar: (res) => res.toLowerCase().includes('nan'),
  },
  {
    pergunta: 'Qual é o resultado de: typeof []?',
    validar: (res) => res.trim().toLowerCase() === 'object',
  },
  {
    pergunta: 'Qual o resultado de: "true" == true?',
    validar: (res) => res.trim().toLowerCase() === 'false',
  },
  {
    pergunta: 'Qual o resultado de: 0 === false?',
    validar: (res) => res.trim().toLowerCase() === 'false',
  },
];

const Exercicios = () => {
  const [indice, setIndice] = useState(0);
  const [resposta, setResposta] = useState('');
  const [feedback, setFeedback] = useState('');
  const [acertou, setAcertou] = useState(null);

  const atual = perguntas[indice];

  const verificarResposta = () => {
    const correto = atual.validar(resposta);

    if (correto) {
      setFeedback('✅ Correto! Avançando para o próximo...');
      setAcertou(true);
      setTimeout(() => {
        setIndice((prev) => prev + 1);
        setResposta('');
        setFeedback('');
        setAcertou(null);
      }, 1200);
    } else {
      setFeedback('❌ Incorreto. Tente novamente!');
      setAcertou(false);
    }
  };

  if (indice >= perguntas.length) {
    return (
      <div className="ex-container">
        <h2>🎉 Parabéns!</h2>
        <p>Você concluiu todos os 15 exercícios de lógica em JavaScript!</p>
      </div>
    );
  }

  return (
    <div className="ex-container">
      <h2>Desafio {indice + 1} de {perguntas.length}</h2>
      <p className="pergunta">{atual.pergunta}</p>

      <input
        type="text"
        placeholder="Digite sua resposta"
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
      />

      <button onClick={verificarResposta}>Verificar</button>

      {feedback && (
        <div className={`feedback ${acertou ? 'correto' : 'incorreto'}`}>
          {feedback}
        </div>
      )}
    </div>
  );
};

export default Exercicios;
