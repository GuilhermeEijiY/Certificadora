import React, { useState } from 'react';
import {
  PieChart, Pie, Cell, Legend, ResponsiveContainer
} from 'recharts';
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
  const [estatisticas, setEstatisticas] = useState({ corretas: 0, incorretas: 0 });

  const atual = perguntas[indice];

  const verificarResposta = () => {
    const correto = atual.validar(resposta);
    if (correto) {
      setFeedback('✅ Correto!');
      setAcertou(true);
      setEstatisticas(prev => ({ ...prev, corretas: prev.corretas + 1 }));
    } else {
      setFeedback(`❌ Incorreto. Resposta correta: ${atual.respostaCorreta}`);
      setAcertou(false);
      setEstatisticas(prev => ({ ...prev, incorretas: prev.incorretas + 1 }));
    }

    setTimeout(() => {
      setIndice(prev => (prev + 1) % perguntas.length);
      setResposta('');
      setFeedback('');
      setAcertou(null);
      setMostrarResposta(false);
    }, 1500);
  };

  const verRespostaCorreta = () => {
    setFeedback(`💡 Resposta correta: ${atual.respostaCorreta}`);
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

  const recomeçar = () => {
    setIndice(0);
    setResposta('');
    setFeedback('');
    setAcertou(null);
    setMostrarResposta(false);
    setEstatisticas({ corretas: 0, incorretas: 0 });
  };

  const dadosGrafico = [
    { name: 'Corretas', value: estatisticas.corretas },
    { name: 'Incorretas', value: estatisticas.incorretas },
  ];

  const total = estatisticas.corretas + estatisticas.incorretas;
  const porcentagem = total > 0 ? Math.round((estatisticas.corretas / total) * 100) : 0;

  const cores = ['#4caf50', '#f44336'];

  return (
    <div className="ex-container">
      <h1>💻 Desafio de Lógica em JavaScript</h1>
      <p className="intro-text">Responda às questões abaixo para testar seu raciocínio lógico com JavaScript.</p>

      <div className="grafico-container">
        <h3>Acertos</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={dadosGrafico}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              label
            >
              {dadosGrafico.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <p className="porcentagem">🎯 Porcentagem de acertos: {porcentagem}%</p>
        
      </div>

      <div className="card">
        <h2>Questão {indice + 1} de {perguntas.length}</h2>
        <p className="pergunta">{atual.pergunta}</p>

        <input
          type="text"
          placeholder="Digite sua resposta"
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          className="resposta-input"
        />

        <div className="button-group">
          <button onClick={verificarResposta} className="btn primary">Verificar</button>
          <button onClick={verRespostaCorreta} className="btn outline">Ver Resposta</button>
        </div>

        <div className="nav-group">
          <button onClick={voltarPergunta} className="btn">⬅ Voltar</button>
          <button onClick={pularPergunta} className="btn">Pular ➡</button>
        </div>

        {feedback && (
          <div className={`feedback ${acertou ? 'correto' : 'incorreto'}`}>
            {feedback}
          </div>
        )}
      </div>
      <div className="btn-container">
      <button onClick={recomeçar} className="btn reset">🔄 Recomeçar Exercícios</button>
    </div>
    </div>
  );
};

export default Exercicios;
