import React, { useEffect } from 'react';
import './App.css';
import { Keyboard, Board } from './components';
import { useWordCheck } from './hooks';

function App() {
  const {
    noori,
    showAnswer,
    word,
    guessOne,
    guessTwo,
    guessThree,
    guessFour,
    guessFive,
    currentRound,
    input,
    setShowAnswer,
    setNoori,
    handleInput,
    reset,
    handleRandomWord
  } = useWordCheck();

  useEffect(() => {
    handleRandomWord();
  }, [noori]);

  return (
    <div className="App">
      <div className='header'>
        <h1 className='title'>noordle</h1>
        <div className={showAnswer ? 'answer' : 'hide'}>{word}</div>
      </div>

      <Board guessOne={guessOne} guessTwo={guessTwo} guessThree={guessThree} guessFour={guessFour} guessFive={guessFive} currentRound={currentRound} input={input} />

      <div className="bottom-button-container">
        <button className="bottom-button" onClick={() => setShowAnswer(!showAnswer)}>{!showAnswer ? 'Show Answer' : 'Hide Answer'}</button>
        <button className="bottom-button" onClick={reset}>Reset</button>
      </div>

      <button className="bottom-button" onClick={() => setNoori(!noori)}>{noori ? 'Random' : 'Noordle'}</button>
      <button className={noori ? 'bottom-button new-word-button hide' : 'bottom-button new-word-button'} onClick={() => handleRandomWord()}>New Word</button>

      <Keyboard handleInput={handleInput} />
    </div>
  );
}

export default App;
