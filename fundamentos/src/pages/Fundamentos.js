import React from 'react';
import './Fundamentos.css';

const Fundamentos = () => {
  return (
    <div className="fundamentos-container">
      <h1>Fundamentos de JavaScript</h1>

      <section>
        <h2>1. O que é JavaScript?</h2>
        <p>
          JavaScript é uma linguagem de programação interpretada, usada para tornar páginas web interativas. Com ele, é possível criar animações, validar formulários, manipular o DOM, e muito mais.
        </p>
      </section>

      <section>
        <h2>2. Variáveis</h2>
        <p>
          Em JavaScript usamos <code>let</code>, <code>const</code> e <code>var</code> para declarar variáveis:
        </p>
        <pre>
{`let nome = "João";
const idade = 25;
var cidade = "São Paulo";`}
        </pre>
      </section>

      <section>
        <h2>3. Tipos de Dados</h2>
        <ul>
          <li>String: textos, exemplo <code>"Olá"</code></li>
          <li>Number: números, exemplo <code>10</code></li>
          <li>Boolean: verdadeiro ou falso (<code>true</code>/<code>false</code>)</li>
          <li>Array: lista de valores <code>[1, 2, 3]</code></li>
          <li>Object: estrutura com pares chave-valor</li>
        </ul>
      </section>

      <section>
        <h2>4. Operadores</h2>
        <ul>
          <li>Aritméticos: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></li>
          <li>Comparação: <code>==</code>, <code>===</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code></li>
          <li>Lógicos: <code>&&</code>, <code>||</code>, <code>!</code></li>
        </ul>
      </section>

      <section>
        <h2>5. Condicionais</h2>
        <pre>
{`if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}`}
        </pre>
      </section>

      <section>
        <h2>6. Laços de Repetição</h2>
        <pre>
{`for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`}
        </pre>
      </section>

      <section>
        <h2>7. Funções</h2>
        <pre>
{`function saudacao(nome) {
  return "Olá, " + nome + "!";
}

const resultado = saudacao("Maria");
console.log(resultado);`}
        </pre>
      </section>

      <section>
        <h2>8. Introdução ao DOM</h2>
        <p>
          DOM (Document Object Model) é a representação da estrutura HTML da página. Com JavaScript, você pode manipular elementos:
        </p>
        <pre>
{`document.getElementById("meuElemento").innerText = "Texto alterado!";`}
        </pre>
      </section>

      <section>
        <h2>9. Eventos</h2>
        <p>Você pode reagir a ações do usuário, como cliques:</p>
        <pre>
{`document.getElementById("botao").addEventListener("click", function() {
  alert("Botão clicado!");
});`}
        </pre>
      </section>
    </div>
  );
};

export default Fundamentos;
