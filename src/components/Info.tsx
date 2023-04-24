import { AiFillGithub } from 'react-icons/ai'

const Info = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-xs">Design By Pakkerman</div>
      <div className="btn-square btn-xs btn border-slate-400 p-[1px]">
        <a href="https://github.com/Pakkerman?tab=repositories" target="_blank">
          <AiFillGithub size={18} />
        </a>
      </div>
    </div>
  )
}

export default Info
