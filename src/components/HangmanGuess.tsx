import GameContext from '../context/GameContext'

interface HangmanGuessProps {
  answer: string
}

function HangmanGuess({ answer }: { answer: string }) {
  console.log(answer)

  return (
    <div className="w-full pt-2 pb-6 text-center text-4xl">
      {/* {answer.split('').map((letter, index) => {
        let modifier = 'gray'
        if (isGameover) {
          if (isFail) modifier = 'red'
          if (isWin) modifier = 'blue'
        }
        return (
          <span
            key={index}
            className={`border-b-4 pb-0.5 mx-1 border-${modifier}-400 text-${modifier}-400`}
          >
            <span className="">
              {isGameover
                ? letter
                : guessedLetters.includes(letter)
                ? letter
                : '-'}
            </span>
          </span>
        )
      })} */}
    </div>
  )
}

export default HangmanGuess
