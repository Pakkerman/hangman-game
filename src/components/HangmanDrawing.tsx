import { useState } from 'react'

// // const BODY = [head, body, lefthand, righthand, leftleg, rightleg]
const BODY = ['head', 'body', 'lefthand', 'righthand', 'leftleg', 'rightleg']

function HangmanDrawing({
  answer,
  guessedLetters,
}: {
  answer: string
  guessedLetters: string[]
}) {
  // const [color, setColor] = useState("slate");

  const numberOfWrongGuesses: number = guessedLetters.filter(
    (item) => !answer.includes(item)
  ).length

  const isWin = true

  let color = 'slate'
  if (numberOfWrongGuesses > 6 && isWin) color = 'blue'

  const shownBodyParts: string[] = BODY.slice(0, numberOfWrongGuesses)
  console.log(BODY.slice(0, 8), numberOfWrongGuesses)

  // function setDrawingColor() {
  //   if (!isGameover) return setColor('slate')
  //   if (isWin) setColor('blue')
  //   if (isFail) setColor('red')
  // }

  return (
    <div className="relative mx-auto mt-2 h-96 py-4">
      <div className={`h-1 w-60 rounded-md bg-${color}-400`} />
      <div id="thread" className={`mx-auto h-6 w-1 bg-${color}-400`} />
      {/* {shownBodyParts.includes("head") && <div>1</div>}
      {shownBodyParts.includes("body") && <div>1</div>}
      {shownBodyParts.includes("lefthand") && <div>1</div>}
      {shownBodyParts.includes("righthand") && <div>1</div>}
      {shownBodyParts.includes("leftleg") && <div>1</div>}
      {shownBodyParts.includes("rightleg") && <div>1</div>}
      {shownBodyParts.includes("head") && ( */}
      {console.log(color)}
      {shownBodyParts.includes('body') && (
        <div
          id="head"
          className={`mx-auto h-16 w-16 rounded-full border-4 border-${color}-400 `}
        />
      )}
      {/* className={`${
          shownBodyParts.includes("body") ? "" : "hidden"
        } mx-auto h-36 w-1 rounded-md bg-${color}-400`} */}
      <div
        id="body"
        className={`${
          shownBodyParts.includes('body') ? '' : 'hidden'
        } mx-auto h-36 w-1 rounded-md bg-${color}-400`}
      />
      <div
        id="lefthand"
        className={`${
          shownBodyParts.includes('lefthand') ? '' : 'hidden'
        } absolute mx-auto h-24 w-1 origin-top rounded-md bg-${color}-400 left-[118px] top-32 rotate-45`}
      />
      <div
        id="righthand"
        className={`${
          shownBodyParts.includes('righthand') ? '' : 'hidden'
        } absolute mx-auto h-24 w-1 origin-top -rotate-45 rounded-md bg-${color}-400 right-[118px] top-32`}
      />
      <div
        id="leftleg"
        className={`${
          shownBodyParts.includes('leftleg') ? '' : 'hidden'
        } absolute mx-auto h-24 w-1 rotate-45 rounded-md bg-${color}-400 left-[85px] top-[235px]`}
      />
      <div
        id="rightleg"
        className={`${
          shownBodyParts.includes('rightleg') ? '' : 'hidden'
        } absolute mx-auto h-24 w-1 -rotate-45 rounded-md bg-${color}-400 right-[85px] top-[235px]`}
      />
      <div
        className={`absolute bottom-0 mt-28 h-1 w-60 rounded-md bg-${color}-400`}
      />
    </div>
  )
}

export default HangmanDrawing
