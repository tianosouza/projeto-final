export default function ButtonComponent({name, styleButton}) {
  return (
    <button className={`${styleButton} w-[9.5rem] h-[3rem] rounded-lg text-black font-bold text-[1rem] flex items-center justify-center cursor-pointer`}>
     <span>{name}</span>
    </button>
  )
}