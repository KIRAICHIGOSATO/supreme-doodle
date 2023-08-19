import React from 'react';
import { soma } from './Soma';
import { subtracao } from './Subtracao';
import { multiplicacao } from './Multiplicacao';
import { divisao } from './Divisao';

function App() {
  const resultadoSoma = soma(10, 5);
  const resultadoSubtracao = subtracao(15, 7);
  const resultadoMultiplicacao = multiplicacao(6, 8);
  const resultadoDivisao = divisao(20, 4);

  return (
    <div>
      <h1>Operações Matemáticas</h1>
      <h2>Soma: {resultadoSoma}</h2>
      <h2>Subtração: {resultadoSubtracao}</h2>
      <h2>Multiplicação: {resultadoMultiplicacao}</h2>
      <h2>Divisão: {resultadoDivisao}</h2>
    </div>
  );
}

export default App;
