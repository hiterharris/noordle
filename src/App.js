import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('NOORI');
  const [input, setInput] = useState('');
  const [guess, setGuess] = useState(input);
  const [correct, setCorrect] = useState('');

  const handleInput = e => setInput(e.target.value);

  useEffect(() => {
    setGuess(input.toUpperCase());
  }, [input, correct]); 

  const checkWord = () => {
    setGuess(input);
    console.log('word: ', word.toUpperCase());
    console.log('guess: ', guess.toUpperCase());
    guess == word ? setCorrect('correct') : setCorrect('incorrect');
  }

  useEffect(() => {
    console.log(correct);
  }, [correct]);  

  return (
    <div className="App">
      <h1>Noordle</h1>
      {/* <p>{word}</p> */}
      <div className="guess-input">
      <input type="text" maxlength="5" value={input.toUpperCase()} onChange={e => handleInput(e)}></input>
      <button type="submit" onClick={() => checkWord()}>Submit</button>
      </div>
       <table>
         <tbody>
          <tr className={`guess one ${correct}`}>
            <td>{input[0]?.toUpperCase()}</td>
            <td>{input[1]?.toUpperCase()}</td>
            <td>{input[2]?.toUpperCase()}</td>
            <td>{input[3]?.toUpperCase()}</td>
            <td>{input[4]?.toUpperCase()}</td>
          </tr>
          <tr className="guess two">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="guess three">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="guess four">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="guess five">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
