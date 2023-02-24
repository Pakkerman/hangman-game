import { useEffect } from 'react'
import { AiOutlineEnter } from 'react-icons/ai'

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

type KeyboardPropes = {
  answer: string
  guessedLetters: string[]
  setGuessedLetters: (letter: string) => string[]
  onGameRestart: () => void
}

function Keyboard({
  answer,
  guessedLetters,
  setGuessedLetters,
  onGameRestart,
}: KeyboardPropes) {
  useEffect(() => {
    document.addEventListener('keypress', (event) => handleKeypress(event))
    document
      .querySelector('#keyboard')
      .addEventListener('click', (event) => handleClick(event))
    return () => {
      document.removeEventListener('keypress', handleKeypress)
      document
        .querySelector('#keyboard')
        ?.removeEventListener('click', handleClick)
    }
  }, [])

  function handleClick(event: MouseEvent) {
    const key = event.target.value
    if (!key) return
    if (guessedLetters.includes(key)) return

    if (key.match(/^[a-z]$/)) {
      setGuessedLetters((prev) => (prev.includes(key) ? prev : [...prev, key]))
    }
  }

  function handleKeypress(event: KeyboardEvent) {
    const key = event.key
    if (guessedLetters.includes(key)) return

    if (key.match('Enter')) {
      onGameRestart()
    }
    if (key.match(/^[a-z]$/)) {
      setGuessedLetters((prev) => (prev.includes(key) ? prev : [...prev, key]))
    }
  }

  const isGameover = false

  return (
    <div
      id="keyboard"
      className="grid place-content-center gap-2"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(20px, 30px)) ',
      }}
    >
      {KEYS.map((key, index) => {
        let buttonStyle = ''
        let modifier = isGameover ? 'btn-disabled' : 'btn-outline'
        if (guessedLetters.includes(key)) {
          modifier = answer.includes(key) ? 'btn-info' : 'btn-error'
        }
        buttonStyle = `${modifier} `
        const classname = `btn ${buttonStyle} btn-sm btn-square font-mono lowercase h-8 w-8 text-lg`
        return (
          <button key={index} className={classname} value={key}>
            {key}
          </button>
        )
      })}
      <button
        onClick={onGameRestart}
        className="btn-outline btn-sm btn h-8 w-8 font-mono text-lg "
      >
        <AiOutlineEnter className="scale-[3]" />
      </button>
    </div>
  )
}

export default Keyboard
