import { useState } from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanGuess from './components/HangmanGuess'
import Keyboard from './components/Keyboard'
import wordList from './data/wordList.json'

const initialAnswer: string = getWord()

function App() {
  const [answer, setAnswer] = useState<string>(initialAnswer)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const numberOfWrongGuesses: number = guessedLetters.filter(
    (item) => !answer.includes(item)
  ).length

  const isWin = answer.split('').every((item) => guessedLetters.includes(item))

  function gameRestart() {
    setAnswer(getWord)
    setGuessedLetters([])
  }

  function handleUpdateGuessedLetters(letter: string): void {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter]
    )
  }

  return (
    <>
      <div className="flex h-screen flex-col justify-center">
        <div
          // data-theme="luxury"
          className="mx-auto flex w-96 flex-col justify-center rounded-lg bg-gray-800 p-4 font-mono shadow-xl"
        >
          <h1 className="text-2xl">Hangman</h1>
          <h1 className="text-1xl">Dont leave the man hanging</h1>
          <HangmanDrawing
            numberOfWrongGuesses={numberOfWrongGuesses}
            isWin={isWin}
          />
          <HangmanGuess
            answer={answer}
            guessedLetters={guessedLetters}
            numberOfWrongGuesses={numberOfWrongGuesses}
            isWin={isWin}
          />
          <Keyboard
            answer={answer}
            guessedLetters={guessedLetters}
            handleUpdateGuessedLetters={handleUpdateGuessedLetters}
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
