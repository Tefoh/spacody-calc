import { useState } from 'react'

import './App.scss';

function App() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [prevNumber, setPrevNumber] = useState('');
  const [operator, setOperator] = useState('');

  function addNumber(num) {
    if (num === 0 && parseFloat(currentNumber) === 0) return;

    setCurrentNumber(curNum => curNum + num)
  }

  const addDot = () => {
    if (currentNumber.includes('.')) return;

    setCurrentNumber(curNum => curNum + '.')
  }

  const clear = () => {
    setCurrentNumber('');
  }

  const plusMinus = () => {
    if (parseFloat(currentNumber) > 0) {
      setCurrentNumber(curNum => '-' + curNum);
    } else {
      setCurrentNumber(curNum => curNum.substring(1));
    }
  }

  const operate = (op) => {
    setOperator(op);
    setPrevNumber(currentNumber);
    setCurrentNumber('');
  }
//  3-4
  const equal = () => {
    switch (operator) {
      case '+':
        setCurrentNumber(curNum => (parseFloat(prevNumber) + parseFloat(curNum)).toString())
        setPrevNumber('');
        break;
      case '-':
        setCurrentNumber(curNum => (parseFloat(prevNumber) - parseFloat(curNum)).toString())
        setPrevNumber('');
        break;
      case 'x':
        setCurrentNumber(curNum => (parseFloat(prevNumber) * parseFloat(curNum)).toString())
        setPrevNumber('');
        break;
      case '/':
        setCurrentNumber(curNum => (parseFloat(prevNumber) / parseFloat(curNum)).toString())
        setPrevNumber('');
        break;
      case '%':
        setCurrentNumber(curNum => (parseFloat(prevNumber) % parseFloat(curNum)).toString())
        setPrevNumber('');
        break;
      default:
        break;
    }
  }

  return (
    <main>
      <input type="text" value={currentNumber} readOnly />
      <div className='keys'>
        <button className='op__key' onClick={clear}>C</button>
        <button className='op__key' onClick={plusMinus}>+/-</button>
        <button className='op__key' onClick={() => operate('%')}>%</button>
        <button className='op__key' onClick={() => operate('/')}>/</button>
        <button className='num__key' onClick={() => addNumber(7)}>7</button>
        <button className='num__key' onClick={() => addNumber(8)}>8</button>
        <button className='num__key' onClick={() => addNumber(9)}>9</button>
        <button className='op__key' onClick={() => operate('x')}>x</button>
        <button className='num__key' onClick={() => addNumber(4)}>4</button>
        <button className='num__key' onClick={() => addNumber(5)}>5</button>
        <button className='num__key' onClick={() => addNumber(6)}>6</button>
        <button className='op__key' onClick={() => operate('-')}>-</button>
        <button className='num__key' onClick={() => addNumber(1)}>1</button>
        <button className='num__key' onClick={() => addNumber(2)}>2</button>
        <button className='num__key' onClick={() => addNumber(3)}>3</button>
        <button className='op__key' onClick={() => operate('+')}>+</button>
        <span></span>
        <button className='num__key' onClick={() => addNumber(0)}>0</button>
        <button className='num__key' onClick={addDot}>.</button>
        <button className='eq__key' onClick={equal}>=</button>
      </div>
    </main>

  );
}

export default App;
