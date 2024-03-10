import { headerLogo } from '../assets/images';
import { hamburger, closeicon } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';

function Nav() {
    let [open,setOpen] = useState(false)
    return (
        <header className='padding-x py-8 absolute top-0 left-0 w-full z-20'>
            <nav className='md:flex py-1 justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29} />
                </a>
                <div className='absolute right-8 top-8 md:hidden' onClick={()=>setOpen(!open)}>
                    <img src={`${open ? closeicon : hamburger}`} alt="icon" width={25} height={25} className='transition-all duration-500 ease-in'/>
                </div>
                <ul className={`flex-1 md:flex md:items-center justify-end gap-16 bg-white w-full md:w-auto md:bg-transparent pb-12 md:pb-0 absolute md:static transition-all duration-500 ease-in 
                ${open?'top-20':'top-[-490px]'}`}>
                    {navLinks.map((item) => (
                        <li key={item.label} className='md:my-0 my-7'>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav