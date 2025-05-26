export default function ButtonComponent({name, style}) {
  return (
    <button className={`${style} w-[9.5rem] h-[3rem] bg-white-color rounded-lg text-black font-bold text-[1rem] flex items-center justify-center cursor-pointer`}>
     <span>{name}</span>
    </button>
  )
}