import { useEffect } from 'react'
import { RxReset } from 'react-icons/rx'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const KEYS = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  '',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
]

type KeyboardPropes = {
  answer: string
  guessedLetters: string[]
  handleUpdateGuessedLetters: (letter: string) => void
  onGameRestart: () => void
  isGameover: boolean
}

export default function Keyboard({
  answer,
  guessedLetters,
  handleUpdateGuessedLetters,
  onGameRestart,
  isGameover,
}: KeyboardPropes) {
  const [animationParent] = useAutoAnimate()

  useEffect(() => {
    document.addEventListener('keydown', handleKeypress)
    return () => {
      document.removeEventListener('keydown', handleKeypress)
    }
  }, [isGameover])

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const key = event.currentTarget.value
    if (!key) return
    if (guessedLetters.includes(key)) return
    if (isGameover) return
    if (key.match(/^[a-z]$/)) handleUpdateGuessedLetters(key)
  }

  function handleKeypress(event: KeyboardEvent) {
    const key: string = event.key
    if (guessedLetters.includes(key)) return
    if (key.match('Enter')) onGameRestart()
    if (isGameover) return
    if (key.match(/^[a-z]$/)) handleUpdateGuessedLetters(key)
  }

  return (
    <div
      ref={animationParent}
      id="keyboard"
      className="grid w-[350px] grid-cols-10 place-content-center gap-2"
    >
      {KEYS.map((key, index) => {
        // Use empty key to offset grid cols
        if (key === '') return <div key={index}></div>

        let buttonStyle = ''
        let modifier = isGameover ? 'btn-disabled' : 'btn-outline'
        if (guessedLetters.includes(key)) {
          modifier = answer.includes(key) ? 'btn-info' : 'btn-error'
        }
        buttonStyle = `${modifier} `
        const classname = `btn ${buttonStyle} btn-sm btn-square font-mono lowercase h-8 w-8 text-lg focus:outline-none`
        return (
          <button
            key={index}
            className={classname}
            value={key}
            onClick={(event) => handleClick(event)}
          >
            {key}
          </button>
        )
      })}
      <button
        onClick={onGameRestart}
        className="btn-outline btn-sm btn col-span-2 h-8 w-16 font-mono text-lg"
      >
        <RxReset className="scale-[1.25]" />
      </button>
    </div>
  )
}
