import { useState } from 'react'

function EquationGenerator(){
  const [equation, SetEquation] = useState('')

  function handleClick() {
    // Generar tres coeficientes aleatorios entre -10 y 10
    const a = Math.floor(Math.random() * 21) - 10;
    const b = Math.floor(Math.random() * 21) - 10;
    const c = Math.floor(Math.random() * 21) - 10;

    // Generar un resultado aleatorio entre -10 y 10
    const resultado = ((Math.random() * (20 + 1)) - 10).toFixed(2);

    // Concatenar los coeficientes y el resultado en una cadena que representa la ecuación lineal
    SetEquation(`${a}x + ${b}y + ${c} = ${resultado}`)
  }
  
  return (
    <div>
      <button onClick={handleClick} className='mt-4 py-2 px-4 border-2 rounded-xl font-bold hover:border-sky-400 hover:text-sky-400'>generate</button>
      <h3 className='text-xl mt-4 font-bold'>{equation}</h3>
    </div>
  )
}

function App() {

  return (
    <div className="text-slate-50 bg-slate-800 h-screen items-center flex flex-col text-center justify-center">
      <h1 className='text-4xl pt-4 font-bold'>Equations Generator</h1>
      <EquationGenerator/>
    </div>
  )
}

export default App