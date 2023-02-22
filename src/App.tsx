import { useContext, useEffect, useState } from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanGuess from './components/HangmanGuess'
import Keyboard from './components/Keyboard'
import wordList from './data/wordList.json'

const initAnswer = getWord()

function App() {
  const [answer, setAnswer] = useState(getWord())
  const [guessedLetters, setGuessedLetters] = useState([])

  function gameRestart() {
    setAnswer(getWord())
    setGuessedLetters([])
  }

  return (
    <>
      <div className="flex flex-col justify-center h-screen ">
        <div
          // data-theme="luxury"
          className="flex flex-col justify-center p-4 mx-auto font-mono bg-gray-800 rounded-lg shadow-xl w-96"
        >
          <h1 className="text-2xl">Hangman</h1>
          <h1 className="text-1xl">Dont leave the man hanging</h1>
          <HangmanDrawing answer={answer} guessedLetters={guessedLetters} />
          <HangmanGuess answer={answer} />
          <Keyboard
            answer={answer}
            guessedLetters={guessedLetters}
            setGuessedLetters={setGuessedLetters}
            onGameRestart={gameRestart}
          />
        </div>
      </div>
    </>
  )
}

export default App

function getWord(): string {
  return wordList[Math.floor(Math.random() * wordList.length)]
}
