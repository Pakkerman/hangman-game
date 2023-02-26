import getColor from '../utilis/getColor'

interface HangmanGuessProps {
  answer: string
  guessedLetters: string[]
  isWin: boolean
  isGameover: boolean
}

function HangmanGuess({
  answer,
  guessedLetters,
  isGameover,
  isWin,
}: HangmanGuessProps) {
  let color = isWin ? 'blue' : isGameover ? 'red' : 'slate'
  return (
    <div className="flex w-full justify-center pt-2 pb-6 text-4xl">
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
              {isWin || isGameover
                ? letter
                : guessedLetters.includes(letter)
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
