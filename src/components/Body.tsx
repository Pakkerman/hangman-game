import getColor from '../utilis/getColor.js'

type BodyProps = {
  bodypart: string
  color: string
}

export default function Body({ bodypart, color }: BodyProps) {
  const borderColor = getColor(color, 'border')
  const bgColor = getColor(color, 'bg')

  const bodypartStyle: { [key: string]: string } = {
    head: `mx-auto h-16 w-16 rounded-full border-4 ${borderColor}`,
    body: `mx-auto h-36 w-1 rounded-b-md ${bgColor}`,
    lefthand: `absolute mx-auto h-20 w-1 origin-top rounded-md ${bgColor} left-[118px] top-32 rotate-45`,
    righthand: `absolute mx-auto h-20 w-1 origin-top -rotate-45 rounded-md ${bgColor} right-[118px] top-32`,
    leftleg: `absolute mx-auto h-24 w-1 rotate-45 rounded-md ${bgColor} left-[85px] top-[235px]`,
    rightleg: ` absolute mx-auto h-24 w-1 -rotate-45 rounded-md ${bgColor} right-[85px] top-[235px]`,
  }

  return <div id={bodypart} className={`${bodypartStyle[bodypart]}`} />
}
