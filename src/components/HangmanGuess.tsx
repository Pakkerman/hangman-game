import getColor from '../utilis/getColor'

interface HangmanGuessProps {
  answer: string
  guessedLetters: string[]
  numberOfWrongGuesses: number
  isWin: boolean
}

function HangmanGuess({
  answer,
  guessedLetters,
  numberOfWrongGuesses,
  isWin,
}: HangmanGuessProps) {
  let color = isWin ? 'blue' : numberOfWrongGuesses > 6 ? 'red' : 'slate'
  return (
    <div className="w-full pt-2 pb-6 text-center text-4xl">
      {answer.split('').map((letter, index) => {
        return (
          <span
            key={index}
            className={`mx-1 border-b-4 ${getColor(
              color,
              'border'
            )} pb-0.5 ${getColor(color, 'text')}`}
          >
            <span className="">
              {isWin
                ? letter
                : guessedLetters.includes(letter)
                ? letter
                : numberOfWrongGuesses > 6
                ? letter
                : '-'}
            </span>
          </span>
        )
      })}
    </div>
  )
}

export default HangmanGuess
