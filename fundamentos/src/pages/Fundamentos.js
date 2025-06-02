import React from 'react';
import './Fundamentos.css';

const Fundamentos = () => {
  return (
    <div className="fundamentos-container">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">Fundamentos Aprofundados de JavaScript</h1>

      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">1. O que é JavaScript? Uma Análise Detalhada</h2>
        <p className="mb-4 text-gray-700">
          JavaScript (JS) é uma linguagem de programação de alto nível, interpretada ou compilada Just-In-Time (JIT), e multi-paradigma, suportando estilos de programação orientados a objetos, imperativos e funcionais. Inicialmente concebida para tornar a web dinâmica no lado do cliente (browser), sua evolução, notavelmente com o advento do Node.js, expandiu seu domínio para o lado do servidor, desenvolvimento de aplicações desktop (Electron), mobile (React Native), e até mesmo IoT. É a implementação da especificação ECMAScript (ES), que garante a interoperabilidade entre diferentes ambientes de execução.
        </p>
        <p className="mb-4 text-gray-700">
          Sua natureza assíncrona e de thread único, gerenciada através do Event Loop, é um pilar fundamental para operações não bloqueantes, essenciais em ambientes de E/S intensiva.
        </p>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/A_re-introduction_to_JavaScript" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          Aprofundar em JavaScript
        </a>
        <a href="https://youtu.be/MWVzdbIJW4A" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Vídeo Explicativo
        </a>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">2. Variáveis: Escopo e Imutabilidade</h2>
        <p className="mb-4 text-gray-700">
          Em JavaScript, a declaração de variáveis é gerenciada por três palavras-chave principais, cada uma com características distintas de escopo e mutabilidade:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li className="mb-2"><code><strong>var</strong></code>: Declara uma variável com escopo de função (ou global se declarada fora de qualquer função). Sofre de <em>hoisting</em>, onde a declaração é "elevada" para o topo do seu escopo, mas a inicialização não, podendo levar a comportamentos inesperados (<code>undefined</code>).</li>
          <li className="mb-2"><code><strong>let</strong></code>: Introduzido no ES6, declara uma variável com escopo de bloco. Não sofre <em>hoisting</em> de inicialização e possui uma "Zona Morta Temporal" (TDZ), onde a variável não pode ser acessada antes de sua declaração. É reatribuível, mas não redeclarável no mesmo escopo.</li>
          <li className="mb-2"><code><strong>const</strong></code>: Também introduzido no ES6, declara uma constante com escopo de bloco. Assim como <code>let</code>, possui TDZ. Uma vez atribuída, seu valor não pode ser reatribuído. Para tipos primitivos, isso significa imutabilidade do valor. Para objetos e arrays, significa que a <em>referência</em> ao objeto/array é imutável, mas as propriedades internas do objeto ou os elementos do array podem ser modificados.</li>
        </ul>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mb-4">
          {`var nome = "João";
let idade = 25;
const PI = 3.14159;

const pessoa = { nome: "Maria" };
pessoa.nome = "Ana";`}
        </pre>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/var" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          Detalhes sobre var
        </a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          Detalhes sobre let
        </a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          Detalhes sobre const
        </a>
        <a href="https://youtu.be/OYeJQR1Uhug" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Vídeo Explicativo
        </a>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">3. Tipos de Dados: Primitivos e Objetos</h2>
        <p className="mb-4 text-gray-700">
          JavaScript é uma linguagem de tipagem dinâmica e fraca, o que significa que os tipos de dados são associados aos valores, não às variáveis, e podem ser convertidos implicitamente. Os tipos de dados são categorizados em primitivos e objetos:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li className="mb-2"><strong>Tipos Primitivos:</strong> Representam valores únicos e imutáveis.
            <ul className="list-circle list-inside ml-4">
              <li><code><strong>String</strong></code>: Sequências de caracteres (texto), e.g., <code>"Olá Mundo"</code>.</li>
              <li><code><strong>Number</strong></code>: Números de ponto flutuante de dupla precisão (IEEE 754), e.g., <code>10</code>, <code>3.14</code>. Inclui <code>Infinity</code>, <code>-Infinity</code>, e <code>NaN</code> (Not-a-Number).</li>
              <li><code><strong>Boolean</strong></code>: Valores lógicos <code>true</code> ou <code>false</code>.</li>
              <li><code><strong>Undefined</strong></code>: Indica que uma variável foi declarada, mas ainda não foi atribuído um valor.</li>
              <li><code><strong>Null</strong></code>: Representa a ausência intencional de qualquer valor de objeto. É um tipo primitivo, mas <code>typeof null</code> retorna <code>"object"</code> (um bug histórico).</li>
              <li><code><strong>Symbol</strong></code> (ES6): Valores únicos e imutáveis, frequentemente usados como chaves de propriedades de objetos para evitar colisões de nomes.</li>
              <li><code><strong>BigInt</strong></code> (ES2020): Permite representar números inteiros com precisão arbitrária, maiores que <code>Number.MAX_SAFE_INTEGER</code>.</li>
            </ul>
          </li>
          <li className="mb-2"><strong>Tipo Objeto:</strong> Representa coleções de dados mais complexas e são mutáveis.
            <ul className="list-circle list-inside ml-4">
              <li><code><strong>Object</strong></code>: Estruturas de dados com pares chave-valor, e.g., <code>{`{ nome: "Alice", idade: 30 }`}</code>.</li>
              <li><code><strong>Array</strong></code>: Objetos especiais para armazenar coleções ordenadas de valores, e.g., <code>[1, "dois", true]</code>.</li>
              <li><code><strong>Function</strong></code>: Objetos que podem ser invocados. Em JavaScript, funções são cidadãos de primeira classe.</li>
              <li>Outros objetos built-in como <code>Date</code>, <code>RegExp</code>, <code>Map</code>, <code>Set</code>, etc.</li>
            </ul>
          </li>
        </ul>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          Explorar Tipos de Dados
        </a>
        <a href="https://youtu.be/bCxdLpR3HC4" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Vídeo Explicativo
        </a>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">4. Operadores: Comparação, Lógica e Atribuição</h2>
        <p className="mb-4 text-gray-700">
          Os operadores em JavaScript permitem realizar operações em valores (operandos).
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li className="mb-2"><strong>Aritméticos:</strong> Realizam operações matemáticas básicas.
            <ul className="list-circle list-inside ml-4">
              <li><code>+</code> (adição), <code>-</code> (subtração), <code>*</code> (multiplicação), <code>/</code> (divisão), <code>%</code> (resto da divisão).</li>
              <li><code>**</code> (exponenciação - ES2016).</li>
              <li><code>++</code> (incremento), <code>--</code> (decremento).</li>
            </ul>
          </li>
          <li className="mb-2"><strong>Comparação:</strong> Comparam dois valores e retornam um booleano.
            <ul className="list-circle list-inside ml-4">
              <li><code>==</code> (igualdade solta): Compara valores após coerção de tipo. Pode levar a resultados inesperados (e.g., <code>0 == false</code> é <code>true</code>).</li>
              <li><code>===</code> (igualdade estrita): Compara valores e tipos sem coerção. É a forma recomendada para evitar bugs.</li>
              <li><code>!=</code> (desigualdade solta), <code>!==</code> (desigualdade estrita).</li>
              <li><code>&lt;</code> (menor que), <code>&gt;</code> (maior que), <code>&lt;=</code> (menor ou igual), <code>&gt;=</code> (maior ou igual).</li>
            </ul>
          </li>
          <li className="mb-2"><strong>Lógicos:</strong> Combinam expressões booleanas.
            <ul className="list-circle list-inside ml-4">
              <li><code>&&</code> (AND lógico): Retorna o primeiro operando falso, ou o último operando se todos forem verdadeiros (short-circuiting).</li>
              <li><code>||</code> (OR lógico): Retorna o primeiro operando verdadeiro, ou o último operando se todos forem falsos (short-circuiting).</li>
              <li><code>!</code> (NOT lógico): Inverte o valor booleano de um operando.</li>
              <li><code>??</code> (Nullish Coalescing Operator - ES2020): Retorna o operando do lado direito se o operando do lado esquerdo for <code>null</code> ou <code>undefined</code>.</li>
            </ul>
          </li>
          <li className="mb-2"><strong>Atribuição:</strong> Atribuem valores a variáveis.
            <ul className="list-circle list-inside ml-4">
              <li><code>=</code> (atribuição simples).</li>
              <li><code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code> (atribuição composta).</li>
            </ul>
          </li>
          <li className="mb-2"><strong>Ternário (Condicional):</strong> <code>condição ? valorSeVerdadeiro : valorSeFalso</code>. Uma forma concisa de condicional.</li>
        </ul>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          Documentação de Operadores
        </a>
        <a href="https://youtu.be/6GGLNp7oaKU" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Vídeo Explicativo
        </a>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">5. Estruturas Condicionais: Controle de Fluxo</h2>
        <p className="mb-4 text-gray-700">
          As estruturas condicionais permitem que o fluxo de execução do programa mude com base em certas condições.
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li className="mb-2"><code><strong>if / else if / else</strong></code>: Executa um bloco de código se uma condição for verdadeira. Pode ser encadeado para múltiplas condições.</li>
          <li className="mb-2"><code><strong>switch</strong></code>: Avalia uma expressão e tenta corresponder seu valor a uma série de cláusulas <code>case</code>. É útil para múltiplos caminhos de execução baseados em um único valor. A cláusula <code>break</code> é crucial para evitar "fall-through".</li>
        </ul>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mb-4">
          {`const idade = 20;
if (idade >= 18) {
  console.log("Maior de idade.");
} else if (idade >= 13) {
  console.log("Adolescente.");
} else {
  console.log("Criança.");
}

const diaDaSemana = "Terça";
switch (diaDaSemana) {
  case "Segunda":
    console.log("Início da semana.");
    break;
  case "Sexta":
    console.log("Fim de semana se aproximando!");
    break;
  default:
    console.log("Dia comum.");
}`}
        </pre>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          if...else
        </a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          switch
        </a>
        <a href="https://youtu.be/QEaGKrx0yCo" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Vídeo Explicativo
        </a>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">6. Laços de Repetição: Iteração de Dados</h2>
        <p className="mb-4 text-gray-700">
          Laços de repetição permitem executar um bloco de código múltiplas vezes.
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li className="mb-2"><code><strong>for</strong></code>: O laço mais comum, com inicialização, condição e incremento/decremento.</li>
          <li className="mb-2"><code><strong>while</strong></code>: Repete um bloco de código enquanto uma condição é verdadeira.</li>
          <li className="mb-2"><code><strong>do...while</strong></code>: Similar ao <code>while</code>, mas garante que o bloco de código seja executado pelo menos uma vez antes de verificar a condição.</li>
          <li className="mb-2"><code><strong>for...in</strong></code>: Itera sobre as chaves enumeráveis de um objeto. Não é recomendado para arrays devido à ordem e propriedades herdadas.</li>
          <li className="mb-2"><code><strong>for...of</strong></code> (ES6): Itera sobre os valores de objetos iteráveis (Arrays, Strings, Maps, Sets, NodeLists, etc.). É a forma preferida para iterar sobre arrays.</li>
          <li className="mb-2"><strong>Métodos de Iteração de Array:</strong> Métodos de array de alta ordem como <code>forEach()</code>, <code>map()</code>, <code>filter()</code>, <code>reduce()</code> oferecem formas mais funcionais e expressivas de iterar e transformar arrays.</li>
        </ul>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mb-4">
          {`// for clássico
for (let i = 0; i < 3; i++) {
  console.log("For:", i);
}

// while
let j = 0;
while (j < 3) {
  console.log("While:", j);
  j++;
}

// do...while
let k = 0;
do {
  console.log("Do-While:", k);
  k++;
} while (k < 3);

// for...of (para arrays)
const frutas = ["maçã", "banana", "cereja"];
for (const fruta of frutas) {
  console.log("Fruta:", fruta);
}

// forEach (método de array)
frutas.forEach(fruta => console.log("ForEach:", fruta));

// map (transforma o array)
const numeros = [1, 2, 3];
const dobrados = numeros.map(num => num * 2); // [2, 4, 6]
console.log("Dobrados:", dobrados);`}
        </pre>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          for
        </a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          while
        </a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          for...of
        </a>
        <a href="https://youtu.be/IR92Bx3vcNw" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Vídeo Explicativo
        </a>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">7. Funções: Cidadãos de Primeira Classe e Closures</h2>
        <p className="mb-4 text-gray-700">
          Funções são blocos de código reutilizáveis que podem receber parâmetros e retornar valores. Em JavaScript, funções são "cidadãos de primeira classe", o que significa que podem ser tratadas como qualquer outro valor: atribuídas a variáveis, passadas como argumentos para outras funções e retornadas por outras funções.
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li className="mb-2"><strong>Declaração de Função vs. Expressão de Função:</strong>
            <ul className="list-circle list-inside ml-4">
              <li>Declaração: <code>function nomeFuncao() {}</code>.</li>
              <li>Expressão: <code>const nomeFuncao = function() {};</code>.</li>
              <li>Arrow Functions (ES6): Sintaxe concisa, não possuem seu próprio <code>this</code> (herdam do contexto pai), não podem ser usadas como construtoras, e não possuem <code>arguments</code>.</li>
            </ul>
          </li>
          <li className="mb-2"><code><strong>this</strong></code>: O valor de <code>this</code> depende de como a função é chamada (contexto de execução). Em arrow functions, <code>this</code> é lexical.</li>
          <li className="mb-2"><strong>Closures:</strong> Uma função aninhada que "lembra" o ambiente em que foi criada (seu escopo léxico), mesmo depois que a função externa terminou de ser executada. Isso permite encapsulamento e manutenção de estado.</li>
          <li className="mb-2"><strong>Funções de Ordem Superior (Higher-Order Functions):</strong> Funções que recebem outras funções como argumentos ou retornam funções.</li>
          <li className="mb-2"><strong>Recursão:</strong> Uma função que chama a si mesma para resolver um problema, dividindo-o em subproblemas menores.</li>
        </ul>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mb-4">
          {`// Declaração de função
function saudacao(nome) {
  return "Olá, " + nome + "!";
}
console.log(saudacao("Maria"));

// Expressão de função (Arrow Function)
const multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 3));

// Exemplo de Closure
function criarContador() {
  let contador = 0;
  return function() {
    contador++;
    return contador;
  };
}
const meuContador = criarContador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2`}
        </pre>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          Funções
        </a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          Closures
        </a>
        <a href="https://youtu.be/yf0IeSEIly4" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Vídeo Explicativo
        </a>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">8. Manipulação do DOM: A API do Documento</h2>
        <p className="mb-4 text-gray-700">
          O DOM (Document Object Model) é uma interface de programação para documentos HTML, XML e SVG. Ele representa a página como uma estrutura de árvore de objetos, onde cada nó corresponde a uma parte do documento (elemento, atributo, texto, etc.). O JavaScript interage com o DOM para manipular o conteúdo, a estrutura e o estilo de uma página web.
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li className="mb-2"><strong>Seleção de Elementos:</strong>
            <ul className="list-circle list-inside ml-4">
              <li><code>document.getElementById('id')</code></li>
              <li><code>document.querySelector('seletorCSS')</code> (primeiro elemento)</li>
              <li><code>document.querySelectorAll('seletorCSS')</code> (NodeList de todos os elementos)</li>
              <li><code>document.getElementsByClassName('classe')</code>, <code>document.getElementsByTagName('tag')</code>.</li>
            </ul>
          </li>
          <li className="mb-2"><strong>Manipulação de Conteúdo:</strong>
            <ul className="list-circle list-inside ml-4">
              <li><code>element.innerText</code>: Define ou obtém o conteúdo de texto visível.</li>
              <li><code>element.innerHTML</code>: Define ou obtém o conteúdo HTML (pode ser um risco de segurança se não for sanitizado).</li>
              <li><code>element.textContent</code>: Define ou obtém todo o conteúdo de texto, incluindo elementos ocultos.</li>
            </ul>
          </li>
          <li className="mb-2"><strong>Manipulação de Atributos e Classes:</strong>
            <ul className="list-circle list-inside ml-4">
              <li><code>element.setAttribute('attr', 'valor')</code>, <code>element.getAttribute('attr')</code>.</li>
              <li><code>element.classList.add('classe')</code>, <code>.remove()</code>, <code>.toggle()</code>, <code>.contains()</code>.</li>
            </ul>
          </li>
          <li className="mb-2"><strong>Criação e Remoção de Elementos:</strong>
            <ul className="list-circle list-inside ml-4">
              <li><code>document.createElement('tag')</code>.</li>
              <li><code>parentNode.appendChild(childElement)</code>, <code>parentNode.insertBefore(new, ref)</code>.</li>
              <li><code>parentNode.removeChild(childElement)</code>.</li>
            </ul>
          </li>
        </ul>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mb-4">
          {`// Seleciona um elemento
const meuParagrafo = document.getElementById("meuParagrafo");

if (meuParagrafo) {
  meuParagrafo.innerText = "Este texto foi alterado via JavaScript!";
  meuParagrafo.style.color = "purple";
  meuParagrafo.classList.add("destaque");
}

const novoDiv = document.createElement("div");
novoDiv.textContent = "Novo elemento dinâmico!";
document.body.appendChild(novoDiv);`}
        </pre>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          Documentação do DOM
        </a>
        <a href="https://youtu.be/9E8BftO0IBk" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Vídeo Explicativo
        </a>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">9. Eventos: Interatividade e o Event Loop</h2>
        <p className="mb-4 text-gray-700">
          Eventos são ações ou ocorrências que acontecem no sistema que você está programando, como um clique do mouse, o carregamento de uma página, o envio de um formulário, ou uma tecla pressionada. O JavaScript permite que você "escute" esses eventos e execute funções (callbacks) em resposta a eles.
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li className="mb-2"><strong>Registrando Event Listeners:</strong>
            <ul className="list-circle list-inside ml-4">
              <li><code>element.addEventListener('tipoEvento', callback, [opções])</code>: O método preferido, permite múltiplos listeners para o mesmo evento e controle sobre o fluxo de eventos (captura/borbulhamento).</li>
              <li>Propriedades <code>onEvent</code>: e.g., <code>element.onclick = function() {}</code> (limita a um listener por evento).</li>
            </ul>
          </li>
          <li className="mb-2"><strong>Objeto Evento:</strong> O callback do listener recebe um objeto <code>Event</code> como argumento, contendo informações sobre o evento (e.g., <code>event.target</code>, <code>event.type</code>, coordenadas do mouse, etc.).</li>
          <li className="mb-2"><strong>Prevenindo o Comportamento Padrão:</strong> <code>event.preventDefault()</code>: Impede a ação padrão associada a um evento (e.g., um clique em um link não redirecionar, um formulário não ser enviado).</li>
          <li className="mb-2"><strong>Parando a Propagação:</strong> <code>event.stopPropagation()</code>: Impede que o evento "borbulhe" (bubbling) para elementos pai ou "capture" (capturing) para elementos filho.</li>
          <li className="mb-2"><strong>Delegação de Eventos:</strong> Uma técnica onde um único listener é anexado a um elemento pai para gerenciar eventos de múltiplos elementos filhos. Isso é eficiente para listas dinâmicas ou grandes.</li>
          <li className="mb-2"><strong>O Event Loop:</strong> JavaScript é single-threaded, mas o Event Loop permite que ele lide com operações assíncronas (como eventos, requisições de rede, timers) sem bloquear a thread principal. Ele constantemente verifica a Call Stack e a Callback Queue, movendo funções da fila para a pilha quando a pilha está vazia.</li>
        </ul>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mb-4">
          {`const meuBotao = document.getElementById("meuBotao");

if (meuBotao) {
  meuBotao.addEventListener("click", function(event) {
    console.log("Botão clicado!", event.target);
  });
}

const lista = document.getElementById("minhaLista");
if (lista) {
  lista.addEventListener("click", function(event) {
    if (event.target.tagName === 'LI') {
      console.log("Item da lista clicado:", event.target.textContent);
    }
  });
}`}
        </pre>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/EventTarget/addEventListener" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          addEventListener
        </a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/EventLoop" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2">
          Event Loop
        </a>
        <a href="https://youtu.be/mBoSt55UO_U" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Vídeo Explicativo
        </a>
      </section>
    </div>
  );
};

export default Fundamentos;