import React, { useState } from 'react';
import './Exercicios.css';

const perguntas = [
  {
    pergunta: 'Qual será o resultado de: 2 + "2"?',
    respostaCorreta: '22',
    validar: (res) => res.trim() === '22',
  },
  {
    pergunta: 'Qual o valor de: true && false?',
    respostaCorreta: 'false',
    validar: (res) => res.trim().toLowerCase() === 'false',
  },
  {
    pergunta: 'Quantos elementos tem o array: [1, 2, 3].length?',
    respostaCorreta: '3',
    validar: (res) => res.trim() === '3',
  },
  {
    pergunta: 'O que typeof null retorna?',
    respostaCorreta: 'object',
    validar: (res) => res.trim().toLowerCase() === 'object',
  },
  {
    pergunta: 'Qual o resultado de: "5" == 5?',
    respostaCorreta: 'true',
    validar: (res) => res.trim().toLowerCase() === 'true',
  },
  {
    pergunta: 'Qual o resultado de: [] == false?',
    respostaCorreta: 'true',
    validar: (res) => res.trim().toLowerCase() === 'true',
  },
  {
    pergunta: 'Qual a saída de: !!0?',
    respostaCorreta: 'false',
    validar: (res) => res.trim().toLowerCase() === 'false',
  },
  {
    pergunta: 'typeof NaN é?',
    respostaCorreta: 'number',
    validar: (res) => res.trim().toLowerCase() === 'number',
  },
  {
    pergunta: 'Qual o resultado de: "10" - 5?',
    respostaCorreta: '5',
    validar: (res) => res.trim() === '5',
  },
  {
    pergunta: 'Qual o valor booleano de uma string vazia ("")?',
    respostaCorreta: 'false',
    validar: (res) => res.trim().toLowerCase() === 'false',
  },
  {
    pergunta: 'Qual o resultado de: 3 > 2 > 1?',
    respostaCorreta: 'false',
    validar: (res) => res.trim().toLowerCase() === 'false',
  },
  {
    pergunta: 'O que acontece se somar um número com undefined?',
    respostaCorreta: 'NaN',
    validar: (res) => res.toLowerCase().includes('nan'),
  },
  {
    pergunta: 'Qual é o resultado de: typeof []?',
    respostaCorreta: 'object',
    validar: (res) => res.trim().toLowerCase() === 'object',
  },
  {
    pergunta: 'Qual o resultado de: "true" == true?',
    respostaCorreta: 'false',
    validar: (res) => res.trim().toLowerCase() === 'false',
  },
  {
    pergunta: 'Qual o resultado de: 0 === false?',
    respostaCorreta: 'false',
    validar: (res) => res.trim().toLowerCase() === 'false',
  },
];

const Exercicios = () => {
  const [indice, setIndice] = useState(0);
  const [resposta, setResposta] = useState('');
  const [feedback, setFeedback] = useState('');
  const [acertou, setAcertou] = useState(null);
  const [mostrarResposta, setMostrarResposta] = useState(false);

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
        setMostrarResposta(false);
      }, 1200);
    } else {
      setFeedback('❌ Incorreto. Tente novamente!');
      setAcertou(false);
    }
  };

  const verRespostaCorreta = () => {
    setFeedback(`A resposta correta é: ${atual.respostaCorreta}`);
    setMostrarResposta(true);
  };

  const pularPergunta = () => {
    setIndice((prev) => (prev + 1) % perguntas.length);
    setResposta('');
    setFeedback('');
    setMostrarResposta(false);
  };

  const voltarPergunta = () => {
    setIndice((prev) => (prev - 1 + perguntas.length) % perguntas.length);
    setResposta('');
    setFeedback('');
    setMostrarResposta(false);
  };

  if (indice >= perguntas.length) {
    return (
      <div className="ex-container">
        <h2>🎉 Parabéns!</h2>
        <p>Você concluiu todos os {perguntas.length} exercícios de lógica em JavaScript!</p>
      </div>
    );
  }

  return (
    <div className="ex-container">
      <h1>Desafio Lógica JavaScript</h1>
      <p className="intro-text">
        Teste seus conhecimentos com perguntas sobre lógica de programação em JavaScript.
      </p>

      <div className="card">
        <h2>Desafio {indice + 1} de {perguntas.length}</h2>
        <p className="pergunta">{atual.pergunta}</p>

        <input
          type="text"
          placeholder="Digite sua resposta"
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          className="resposta-input"
        />

        <div className="button-groups">
          <div className="btn-row">
            <button onClick={verificarResposta} className="button-action primary">Verificar</button>
            <button onClick={verRespostaCorreta} className="button-action">Ver Resposta</button>
          </div>
          <div className="btn-row">
            <button onClick={pularPergunta} className="button-action">Pular</button>
            <button onClick={voltarPergunta} className="button-action">Voltar</button>
          </div>
        </div>

        {feedback && (
          <div className={`feedback ${acertou ? 'correto' : 'incorreto'}`}>
            {feedback}
          </div>
        )}

        {mostrarResposta && (
          <div className="resposta-correta">
            <p><strong>Resposta Correta:</strong> {atual.respostaCorreta}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercicios;
