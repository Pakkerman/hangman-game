import getColor from '../utilis/getColor.js'
import Body from './Body'

const BODYPART: string[] = [
  'head',
  'body',
  'lefthand',
  'righthand',
  'leftleg',
  'rightleg',
]

type HangmanDrawingProps = {
  numberOfWrongGuesses: number
  isWin: boolean
}

function HangmanDrawing({ numberOfWrongGuesses, isWin }: HangmanDrawingProps) {
  let color = isWin ? 'blue' : numberOfWrongGuesses < 6 ? 'slate' : 'red'

  return (
    <div className="relative mx-auto mt-2 h-96 py-4">
      <div className={`h-1 w-60 rounded-md ${getColor(color, 'bg')}`} />
      <div
        className={`${isWin && 'opacity-0'} mx-auto h-6 w-1 ${getColor(
          color,
          'bg'
        )}`}
      />
      {BODYPART.slice(0, isWin ? 6 : numberOfWrongGuesses).map((bodypart) => (
        <Body key={bodypart} bodypart={bodypart} color={color} />
      ))}
      <div
        className={`absolute bottom-0 mt-28 h-1 w-60 rounded-md ${getColor(
          color,
          'bg'
        )}`}
      ></div>
    </div>
  )
}

export default HangmanDrawing
