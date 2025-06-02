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
  },
  {
    enunciado: `Escreva uma função que receba dois números e imprima a soma deles.`,
    verificar: (log) => log.includes("7") || log.includes("12"),
    sugestao: `function somar(a, b) {\n  console.log(a + b);\n}\nsomar(3, 4);`
  },
  {
    enunciado: `Crie uma função que receba um número e imprima "Par" se ele for par, ou "Ímpar" se for ímpar.`,
    verificar: (log) => log.toLowerCase().includes("par") || log.toLowerCase().includes("ímpar"),
    sugestao: `function verificarPar(n) {\n  if (n % 2 === 0) {\n    console.log("Par");\n  } else {\n    console.log("Ímpar");\n  }\n}\nverificarPar(7);`
  },
  {
    enunciado: `Use um loop para imprimir os números pares de 2 até 10.`,
    verificar: (log) => log.includes("2") && log.includes("10") && log.includes("6"),
    sugestao: `for (let i = 2; i <= 10; i += 2) {\n  console.log(i);\n}`
  },
  {
    enunciado: `Crie uma função que imprima "Olá, nome!" onde "nome" é um parâmetro da função.`,
    verificar: (log) => log.toLowerCase().includes("olá") && log.includes("joão"),
    sugestao: `function cumprimentar(nome) {\n  console.log("Olá, " + nome + "!");\n}\ncumprimentar("João");`
  },
  {
    enunciado: `Imprima a tabuada do 3 (de 3x1 até 3x5).`,
    verificar: (log) => log.includes("3") && log.includes("15"),
    sugestao: `for (let i = 1; i <= 5; i++) {\n  console.log("3 x " + i + " = " + (3 * i));\n}`
  },
  {
    enunciado: `Crie uma função que receba um array de nomes e imprima cada um deles.`,
    verificar: (log) => log.includes("Maria") && log.includes("José"),
    sugestao: `function imprimirNomes(nomes) {\n  for (let nome of nomes) {\n    console.log(nome);\n  }\n}\nimprimirNomes(["Maria", "José", "Ana"]);`
  },
  {
    enunciado: `Escreva uma função que conte de 10 até 1 (decrescente).`,
    verificar: (log) => log.includes("10") && log.includes("1"),
    sugestao: `for (let i = 10; i >= 1; i--) {\n  console.log(i);\n}`
  },
  {
    enunciado: `Crie uma função que receba uma nota e imprima "Aprovado" se for maior ou igual a 6, senão "Reprovado".`,
    verificar: (log) => log.toLowerCase().includes("aprovado") || log.toLowerCase().includes("reprovado"),
    sugestao: `function verificarNota(nota) {\n  if (nota >= 6) {\n    console.log("Aprovado");\n  } else {\n    console.log("Reprovado");\n  }\n}\nverificarNota(7);`
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
        // Adiciona um delay antes de ir para a próxima questão
        setTimeout(() => {
          pularDesafio();
        }, 1000); // 1 segundo de delay
      } else {
        setFeedback("❌ Saída inesperada. Tente ajustar sua lógica.");
        setAcertou(false);
        setEstatisticas(prev => ({ ...prev, incorretas: prev.incorretas + 1 }));
        // Adiciona um delay antes de ir para a próxima questão
        setTimeout(() => {
          pularDesafio();
        }, 1000); // 1 segundo de delay
      }
    } catch (error) {
      setResultado("Erro ao executar o código:\n" + error.message);
      setFeedback("❌ Erro no código. Confira sua sintaxe.");
      setAcertou(false);
      setEstatisticas(prev => ({ ...prev, incorretas: prev.incorretas + 1 }));
      // Adiciona um delay antes de ir para a próxima questão mesmo em caso de erro
      setTimeout(() => {
        pularDesafio();
      }, 1000); // 1 segundo de delay
    }
  }

  const pularDesafio = () => {
    // Certifica-se de que o feedback seja limpo antes de pular
    setFeedback(""); 
    setAcertou(null); // Limpa o estado de acerto/erro
    setIndice((prev) => (prev + 1) % desafios.length);
    setResposta("");
    setResultado(null);
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
        <pre className="desafio-enunciado">{atual.enunciado}</pre>

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