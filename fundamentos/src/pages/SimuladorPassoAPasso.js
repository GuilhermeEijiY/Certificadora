import React, { useState } from 'react';
import './SimuladorPassoAPasso.css';

function SimuladorPassoAPasso() {
  const [codigo, setCodigo] = useState(
    `let x = 1;\nx += 2;\nfor (let i = 0; i < 3; i++) {\n  console.log(i);\n}\nif (x > 2) {\n  console.log('x é maior que 2');\n} else {\n  console.log('x não é maior que 2');\n}\nconsole.log(x);`
  );
  const [passos, setPassos] = useState([]);
  const [executado, setExecutado] = useState(false);

  const evaluateExpression = (expression, context) => {
    let evaluated = expression;
    for (const key in context) {
      evaluated = evaluated.replace(new RegExp(`\\b${key}\\b`, 'g'), context[key]);
    }
    try {
      return eval(evaluated);
    } catch (e) {
      console.error("Erro ao avaliar expressão:", expression, "Contexto:", context, "Erro:", e);
      return `[ERRO DE AVALIAÇÃO: ${expression}]`;
    }
  };

  const simularCodigo = () => {
    const contexto = {}; 
    const explicacoes = []; 

    const linhas = codigo.split('\n').map((l) => l.trim()).filter(Boolean);

    const log = (...args) => {
      const msg = args.map((arg) => JSON.stringify(arg)).join(' ');
      explicacoes.push(`🖨️ Mostrando no console: ${msg}`);
    };

    try {
      for (let i = 0; i < linhas.length; i++) {
        const linha = linhas[i];

        if (/^(let|const|var)\s+/.test(linha)) {
          const match = linha.match(/(let|const|var)\s+(\w+)\s*=\s*(.+);?/);
          if (match) {
            const [, , variavel, valorStr] = match;
            contexto[variavel] = evaluateExpression(valorStr, contexto);
            explicacoes.push(`📌 Criando a variável \`${variavel}\` com valor ${JSON.stringify(contexto[variavel])}.`);
          }

        } else if (linha.includes('+=')) {
          const [variavel, valorStr] = linha.replace(';', '').split('+=').map(s => s.trim());
          const valorNumerico = evaluateExpression(valorStr, contexto);
          if (typeof contexto[variavel] === 'number' && typeof valorNumerico === 'number') {
            contexto[variavel] += valorNumerico;
            explicacoes.push(`➕ Somando ${valorStr} à variável \`${variavel}\`. Agora vale ${contexto[variavel]}.`);
          } else {
            explicacoes.push(`❌ Erro: Operação '+=' inválida para tipos de dados em \`${linha}\`.`);
          }

        } else if (linha.startsWith('console.log')) {
          const conteudo = linha.match(/console\.log\((.+)\)/)[1];
          const resultado = evaluateExpression(conteudo, contexto);
          log(resultado);

        } else if (linha.startsWith('for')) {
          explicacoes.push('🔁 Iniciando um laço de repetição.');
          const forMatch = linha.match(/for\s*\(let\s+(\w+)\s*=\s*(\d+);\s*\1\s*<\s*(\d+);\s*\1\+\+\)/);
          const corpo = [];

          i++; 
          while (i < linhas.length && linhas[i] !== '}') {
            corpo.push(linhas[i]);
            i++;
          }

          if (forMatch) {
            const [, variavel, inicioStr, fimStr] = forMatch;
            const inicio = parseInt(inicioStr);
            const fim = parseInt(fimStr);

            for (let j = inicio; j < fim; j++) {
              contexto[variavel] = j; 
              explicacoes.push(`🔂 Repetição com \`${variavel} = ${j}\``);
              corpo.forEach((l) => {
                if (l.includes('console.log')) {
                  const conteudoLoop = l.match(/console\.log\((.+)\)/)[1];
                  const resultadoLoop = evaluateExpression(conteudoLoop, contexto);
                  log(resultadoLoop);
                }
              });
            }
          }

        } else if (linha.startsWith('if') || linha.startsWith('else if') || linha.startsWith('else')) {
          const blocosCondicionais = [];
          let condIndex = i;

          while (condIndex < linhas.length) {
            const condLinha = linhas[condIndex];
            if (/^(if|else if|else)/.test(condLinha)) {
              const condicaoMatch = condLinha.match(/^(if|else if)\s*\((.*)\)/);
              blocosCondicionais.push({
                tipo: condLinha.startsWith('else') && !condicaoMatch ? 'else' : 'if', 
                expressao: condicaoMatch?.[2], 
                linhas: []
              });
              condIndex++;
              while (condIndex < linhas.length && linhas[condIndex] !== '}') {
                blocosCondicionais[blocosCondicionais.length - 1].linhas.push(linhas[condIndex]);
                condIndex++;
              }
              condIndex++; 
            } else {
              break; 
            }
          }

          i = condIndex - 1; 

          let condicaoSatisfeita = false;
          for (const bloco of blocosCondicionais) {
            let expressaoAvaliada = false;
            if (bloco.tipo === 'else') {
              if (!condicaoSatisfeita) {
                explicacoes.push(`🧠 Condição \`else\` satisfeita.`);
                expressaoAvaliada = true;
              }
            } else {
              try {
                expressaoAvaliada = evaluateExpression(bloco.expressao, contexto);
                if (expressaoAvaliada) {
                  explicacoes.push(`🧠 Condição \`${bloco.expressao}\` satisfeita.`);
                } else {
                  explicacoes.push(`❌ Condição \`${bloco.expressao}\` não satisfeita.`);
                }
              } catch (e) {
                explicacoes.push(`❌ Erro ao avaliar condição \`${bloco.expressao}\`: ${e.message}`);
                expressaoAvaliada = false;
              }
            }

            if (expressaoAvaliada) {
              condicaoSatisfeita = true; 
              bloco.linhas.forEach(l => {
                if (l.includes('console.log')) {
                  const conteudoIf = l.match(/console\.log\((.+)\)/)[1];
                  const resultadoIf = evaluateExpression(conteudoIf, contexto);
                  log(resultadoIf);
                }
              });
              break;
            }
          }

    
        } else {
          try {
            const assignMatch = linha.match(/^(\w+)\s*=\s*(.+);?$/);
            if (assignMatch) {
              const [, variavel, valorStr] = assignMatch;
              contexto[variavel] = evaluateExpression(valorStr, contexto);
              explicacoes.push(`🔄 Atualizando a variável \`${variavel}\` para ${JSON.stringify(contexto[variavel])}.`);
            } else {
              evaluateExpression(linha, contexto);
              explicacoes.push(`⚙️ Executando linha genérica: \`${linha}\`.`);
            }
          } catch (e) {
            explicacoes.push(`❌ Erro ao processar linha: \`${linha}\` - ${e.message}`);
          }
        }
      }

      setPassos(explicacoes); 
    } catch (error) {
      setPassos(['❌ Erro durante a simulação:', error.message]);
    }

    setExecutado(true); 
  };

  return (
    <div className="simulador-container">
      <h1>🧪 Simulador de Código Passo a Passo</h1>
      <textarea
        className="codigo-input"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        rows={10}
        placeholder="Cole seu código aqui..."
      />
      <button className="btn" onClick={simularCodigo}>Executar Passo a Passo</button>

      {executado && (
        <div className="resultado">
          <h3>📋 Explicação Simples:</h3>
          <ul>
            {passos.map((passo, index) => (
              <li key={index}>{passo}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SimuladorPassoAPasso;