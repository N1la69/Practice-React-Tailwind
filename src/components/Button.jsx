const Button = ({label, iconUrl, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center px-7 py-4 border font-montserrat text-lg leading-none rounded-full
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red text-white border-coral-red'} ${fullWidth && 'w-full'}`} >
        {label}
        {iconUrl && <img src={iconUrl} alt="img" className="ml-2 rounded-full w-5 h-5"/>}
    </button>
  )
}

export default Button