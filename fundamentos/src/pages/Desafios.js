import React, { useState } from "react";
import {
  PieChart, Pie, Cell, Legend, ResponsiveContainer
} from 'recharts';
import "./Desafios.css";

const desafios = [
  {
    enunciado: `Escreva uma função que receba a idade de uma pessoa e retorne:\n- "Você é menor de idade" se for menor que 18\n- "Você é maior de idade" se for 18 ou mais\nUse variáveis, condição if/else, e função para resolver.`,
    verificar: (log) => log.trim().toLowerCase().includes("menor") || log.trim().toLowerCase().includes("maior"),
    sugestao: `function verificarIdade(idade) {\n  if (idade < 18) {\n    console.log("Você é menor de idade");\n  } else {\n    console.log("Você é maior de idade");\n  }\n}\nverificarIdade(17);`
  },
  {
    enunciado: `Crie uma função que imprima os números de 1 a 5 usando um laço for.`,
    verificar: (log) => log.includes("1") && log.includes("5"),
    sugestao: `for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}`
  }
];

const cores = ['#4caf50', '#f44336'];

function Desafios() {
  const [indice, setIndice] = useState(0);
  const [resposta, setResposta] = useState("");
  const [resultado, setResultado] = useState(null);
  const [estatisticas, setEstatisticas] = useState({ corretas: 0, incorretas: 0 });
  const [acertou, setAcertou] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [mostrarSolucao, setMostrarSolucao] = useState(false);

  const atual = desafios[indice];

  function avaliarCodigo() {
    try {
      const log = [];
      const consoleLog = console.log;
      console.log = (...args) => log.push(args.join(" "));

      const fn = new Function(resposta);
      fn();

      console.log = consoleLog;
      const saida = log.join("\n") || "Código executado sem saída.";
      setResultado(saida);

      if (atual.verificar(saida)) {
        setFeedback("✅ Correto!");
        setAcertou(true);
        setEstatisticas(prev => ({ ...prev, corretas: prev.corretas + 1 }));
      } else {
        setFeedback("❌ Saída inesperada. Tente ajustar sua lógica.");
        setAcertou(false);
        setEstatisticas(prev => ({ ...prev, incorretas: prev.incorretas + 1 }));
      }
    } catch (error) {
      setResultado("Erro ao executar o código:\n" + error.message);
      setFeedback("❌ Erro no código. Confira sua sintaxe.");
      setAcertou(false);
      setEstatisticas(prev => ({ ...prev, incorretas: prev.incorretas + 1 }));
    }
  }

  const pularDesafio = () => {
    setIndice((prev) => (prev + 1) % desafios.length);
    setResposta("");
    setResultado(null);
    setFeedback("");
    setMostrarSolucao(false);
  };

  const voltarDesafio = () => {
    setIndice((prev) => (prev - 1 + desafios.length) % desafios.length);
    setResposta("");
    setResultado(null);
    setFeedback("");
    setMostrarSolucao(false);
  };

  const verSolucao = () => setMostrarSolucao(true);

  const recomeçar = () => {
    setIndice(0);
    setResposta("");
    setResultado(null);
    setFeedback("");
    setMostrarSolucao(false);
    setEstatisticas({ corretas: 0, incorretas: 0 });
  };

  const dadosGrafico = [
    { name: 'Corretas', value: estatisticas.corretas },
    { name: 'Incorretas', value: estatisticas.incorretas },
  ];

  const total = estatisticas.corretas + estatisticas.incorretas;
  const porcentagem = total > 0 ? Math.round((estatisticas.corretas / total) * 100) : 0;

  return (
    <div className="ex-container">
      <h1>🧠 Desafio de Leitura de Código</h1>
      <p className="intro-text">Analise o enunciado e escreva o código correto em JavaScript.</p>

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
        <h2>Desafio {indice + 1} de {desafios.length}</h2>
        <pre className="pergunta">{atual.enunciado}</pre>

        <textarea
          className="resposta-input"
          placeholder="// Digite seu código aqui"
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
        />

        <div className="button-group">
          <button onClick={avaliarCodigo} className="btn primary">Executar</button>
          <button onClick={verSolucao} className="btn outline">Ver Solução</button>
        </div>

        <div className="nav-group">
          <button onClick={voltarDesafio} className="btn">⬅ Voltar</button>
          <button onClick={pularDesafio} className="btn">Pular ➡</button>
        </div>

        {feedback && (
          <div className={`feedback ${acertou ? 'correto' : 'incorreto'}`}>
            {feedback}
          </div>
        )}

        {resultado && (
          <div className="desafio-resultado">
            <strong>Saída:</strong>
            <pre>{resultado}</pre>
          </div>
        )}

        {mostrarSolucao && (
          <div className="solucao">
            <strong>💡 Solução sugerida:</strong>
            <pre>{atual.sugestao}</pre>
          </div>
        )}
      </div>
      <div className="btn-container">
        <button onClick={recomeçar} className="btn reset">🔄 Recomeçar Desafios</button>
      </div>
    </div>
  );
}

export default Desafios;