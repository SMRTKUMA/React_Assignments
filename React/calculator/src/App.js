 import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
      setResult("");
  }
  const calculate = () => {
    setResult(eval(result).toString());
  }
  return (
    <>
      <div className = "container" >
        <form>
          <input type="text" value={result} />
        </form>

        <div className="Keypad">
          <button onClick={clear} id="clear">clear</button>
          <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className="highlight" name="+" onClick={handleClick}>+</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className="highlight" onClick={calculate} id="result">=</button>
        </div>
      </div>
    </>
  );
}

export default App;