import { useState } from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanGuess from './components/HangmanGuess'
import Keyboard from './components/Keyboard'
import wordList from './data/wordList.json'
import Info from './components/Info'

const initialAnswer: string = getWord()

function App() {
  const [answer, setAnswer] = useState<string>(initialAnswer)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const numberOfWrongGuesses: number = guessedLetters.filter(
    (item) => !answer.includes(item)
  ).length

  const isWin =
    numberOfWrongGuesses <= 6 &&
    answer.split('').every((letter) => guessedLetters.includes(letter))

  const isGameover = isWin || numberOfWrongGuesses >= 6

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
      <div className=" flex h-[100svh] flex-col justify-center bg-zinc-900 ">
        <div
          // data-theme="luxury"
          className="mx-auto flex h-[100svh] w-full flex-col items-center justify-center rounded-lg bg-slate-800 p-4 font-mono shadow-xl sm:h-[90svh] sm:w-96"
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
            isGameover={isGameover}
            isWin={isWin}
          />
          <Keyboard
            answer={answer}
            guessedLetters={guessedLetters}
            handleUpdateGuessedLetters={handleUpdateGuessedLetters}
            onGameRestart={gameRestart}
            isGameover={isGameover}
          />
          <div className="fixed bottom-2 right-2">
            <Info />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

function getWord(): string {
  return wordList[Math.floor(Math.random() * wordList.length)]
}
