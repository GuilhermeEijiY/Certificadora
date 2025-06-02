import React from 'react';
import './GuiaBoasPraticas.css'; // Importa o arquivo CSS

const dicas = [
  {
    titulo: '🧼 Nomeie variáveis de forma clara',
    exemploRuim: `let x = 10;
let fn = () => {};`,
    exemploBom: `let quantidadeDeAlunos = 10;
let calcularImposto = () => {};`,
    explicacao: 'Use nomes descritivos e completos que indiquem o propósito da variável ou função. Evite abreviações desnecessárias.',
  },
  {
    titulo: '🧱 Quebre o código em funções menores (SRP)',
    exemploRuim: `// Tudo misturado na mesma função
function processarPedido(pedido) {
  // 1. Validação do pedido
  if (!pedido.id || pedido.valor <= 0) {
    throw new Error('Pedido inválido.');
  }
  // 2. Cálculo do total
  let total = pedido.itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  // 3. Aplicação de desconto
  if (pedido.clienteFidelidade) {
    total *= 0.9; // 10% de desconto
  }
  // 4. Envio do pedido
  console.log('Enviando pedido...', total);
  // 5. Atualização de estoque
  // ...
}`,
    exemploBom: `// Funções com responsabilidades únicas
function validarPedido(pedido) {
  if (!pedido.id || pedido.valor <= 0) {
    throw new Error('Pedido inválido.');
  }
  return true;
}

function calcularTotal(pedido) {
  let total = pedido.itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  if (pedido.clienteFidelidade) {
    total *= 0.9;
  }
  return total;
}

function enviarPedido(pedido, total) {
  console.log('Enviando pedido com total:', total);
  // Lógica de envio...
}

function processarPedidoRefatorado(pedido) {
  validarPedido(pedido);
  const totalCalculado = calcularTotal(pedido);
  enviarPedido(pedido, totalCalculado);
  // atualizarEstoque(pedido);
}`,
    explicacao: 'Siga o Princípio da Responsabilidade Única (SRP): cada função deve ter apenas um motivo para mudar. Isso torna o código mais fácil de entender, testar e manter.',
  },
  {
    titulo: '🧾 Comente o "porquê", não o "o quê"',
    exemploRuim: `// Inicializa a variável 'i' com 0
for (let i = 0; i < 10; i++) {
  // Imprime o valor de 'i'
  console.log(i);
}`,
    exemploBom: `// Correção de bug: Certificar-se de que o loop começa em 0 para incluir o primeiro elemento do array.
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}`,
    explicacao: 'O bom código se explica. Comentários são para explicar decisões complexas, otimizações, ou o "porquê" de uma escolha que não é imediatamente óbvia, e não para reescrever o que o código já mostra.',
  },
  {
    titulo: '⛔ Evite repetição (Princípio DRY)',
    exemploRuim: `function exibirErroConexao() {
  alert("Erro de conexão!");
  console.error("Conexão falhou.");
}

function exibirErroServidor() {
  alert("Erro no servidor!");
  console.error("Servidor inacessível.");
}`,
    exemploBom: `function exibirMensagemErro(tipoErro, detalhes) {
  alert(\`Erro de \${tipoErro}!\`);
  console.error(\`\${tipoErro} falhou: \${detalhes}\`);
}

// Uso:
exibirMensagemErro("conexão", "Conexão de rede perdida.");
exibirMensagemErro("servidor", "API indisponível.");`,
    explicacao: 'DRY (Don\'t Repeat Yourself - Não se Repita): Se você está escrevendo o mesmo código várias vezes, transforme-o em uma função ou um módulo reutilizável. Isso reduz bugs e facilita a manutenção.',
  },
  {
    titulo: '✨ Mantenha o código formatado (indentação)',
    exemploRuim: `function minhaFuncao() {
if (condicao) {
console.log("Olá");
}
else {
console.log("Adeus");
}
}`,
    exemploBom: `function minhaFuncao() {
  if (condicao) {
    console.log("Olá");
  } else {
    console.log("Adeus");
  }
}`,
    explicacao: 'Use indentação consistente para mostrar a estrutura do seu código. Ferramentas como Prettier ou ESLint podem formatar automaticamente.',
  },
  {
    titulo: '🚫 Evite números "mágicos"',
    exemploRuim: `// Cálculo do imposto
let imposto = salario * 0.15;`,
    exemploBom: `const TAXA_IMPOSTO = 0.15; // Define a taxa de imposto como uma constante
let imposto = salario * TAXA_IMPOSTO;`,
    explicacao: 'Números "mágicos" são valores literais cujo significado não é imediatamente óbvio. Use constantes bem nomeadas para dar clareza e facilitar futuras alterações.',
  },
  {
    titulo: '✅ Valide entradas de funções',
    exemploRuim: `function dividir(a, b) {
  return a / b; // E se b for 0?
}`,
    exemploBom: `function dividir(a, b) {
  if (b === 0) {
    console.error("Erro: Divisão por zero!");
    return null; // Ou jogue um erro, dependendo do contexto
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.error("Erro: Ambos os argumentos devem ser números.");
    return null;
  }
  return a / b;
}`,
    explicacao: 'Sempre que possível, valide os parâmetros que suas funções recebem para evitar comportamentos inesperados e erros em tempo de execução.',
  },
  {
    titulo: '❌ Evite efeitos colaterais inesperados',
    exemploRuim: `let totalGlobal = 0;
function adicionar(valor) {
  totalGlobal += valor; // Modifica uma variável global
}`,
    exemploBom: `function adicionar(valor1, valor2) {
  return valor1 + valor2; // Retorna um novo valor, sem alterar estado externo
}

// Uso:
let novoTotal = adicionar(totalAtual, 5);`,
    explicacao: 'Funções "puras" (que não modificam variáveis externas e sempre retornam o mesmo resultado para os mesmos inputs) são mais fáceis de testar e entender. Minimize efeitos colaterais.',
  },
  {
    titulo: '⚡ Otimize para legibilidade, não para velocidade prematura',
    exemploRuim: `for (let i=0;i<array.length;i++){doSomething(array[i])}`,
    exemploBom: `for (let i = 0; i < array.length; i++) {
  const item = array[i];
  doSomething(item);
}`,
    explicacao: 'Não se preocupe em otimizar o código para ser ultra-rápido antes que você saiba que ele é um gargalo de desempenho. Priorize a clareza e a legibilidade. Compiladores e interpretadores modernos são muito bons em otimizações.',
  },
  {
    titulo: '♻️ Use `const` e `let`, evite `var`',
    exemploRuim: `var nome = "Alice";
var idade = 30; // 'var' tem escopo de função, não de bloco
if (true) {
  var nome = "Bob"; // Redeclara 'nome' globalmente
}`,
    exemploBom: `const NOME_APLICATIVO = "MeuApp"; // Valor não muda
let contador = 0; // Valor pode ser reatribuído
if (true) {
  let tempIdade = 25; // 'let' tem escopo de bloco, mais seguro
}`,
    explicacao: '`const` para variáveis que não serão reatribuídas (imutáveis). `let` para variáveis que serão reatribuídas (mutáveis). `var` tem problemas de "hoisting" e escopo que podem levar a bugs.',
  },
];

const GuiaBoasPraticas = () => {
  return (
    <div className="guia-container"> {/* MODIFICADO: Chamando a classe do CSS externo */}
      <h1 className="guia-titulo">🧭 Guia de Boas Práticas em Código</h1> {/* MODIFICADO: Chamando a classe do CSS externo */}
      <p className="intro-text"> {/* MODIFICADO: Chamando a classe do CSS externo */}
        Aprenda a escrever código mais limpo, legível e eficiente com exemplos simples e dicas visuais. Ideal para quem está começando!
      </p>
      {dicas.map((dica, index) => (
        <div key={index} className="dica-card"> {/* MODIFICADO: Chamando a classe do CSS externo */}
          <h2 className="dica-titulo">{dica.titulo}</h2> {/* MODIFICADO: Chamando a classe do CSS externo */}
          <p className="explicacao-text">{dica.explicacao}</p> {/* MODIFICADO: Chamando a classe do CSS externo */}
          <div className="code-examples-grid"> {/* MODIFICADO: Chamando a classe do CSS externo */}
            <div>
              <p className="status-bad">Ruim:</p> {/* MODIFICADO: Chamando a classe do CSS externo */}
              <pre className="code-block bad-example">{dica.exemploRuim}</pre> {/* MODIFICADO: Chamando a classe do CSS externo */}
            </div>
            <div>
              <p className="status-good">Melhor:</p> {/* MODIFICADO: Chamando a classe do CSS externo */}
              <pre className="code-block good-example">{dica.exemploBom}</pre> {/* MODIFICADO: Chamando a classe do CSS externo */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuiaBoasPraticas;