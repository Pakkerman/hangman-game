export default function getColor(color: string, type: string) {
  if (type === 'border' && color === 'blue') return `border-blue-400`
  if (type === 'border' && color === 'slate') return `border-slate-400`
  if (type === 'border' && color === 'red') return `border-red-400`
  if (type === 'bg' && color === 'blue') return `bg-blue-400`
  if (type === 'bg' && color === 'slate') return `bg-slate-400`
  if (type === 'bg' && color === 'red') return `bg-red-400`
  if (type === 'text' && color === 'blue') return `text-blue-400`
  if (type === 'text' && color === 'slate') return `text-slate-400`
  if (type === 'text' && color === 'red') return `text-red-400`
}
