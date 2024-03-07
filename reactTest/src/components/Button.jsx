const Button = ({label, iconUrl}) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 border border-coral-red font-montserrat text-lg leading-none text-white bg-coral-red rounded-full ">
        {label}
        <img src={iconUrl} alt="img" className="ml-2 rounded-full w-5 h-5"/>
    </button>
  )
}

export default Button