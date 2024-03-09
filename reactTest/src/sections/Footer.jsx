import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer" width={150} height={46} />
          </a>
          <p className="mt-6 leading-7 text-base font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store.
           Find your perfect size in store. Get Rewards.</p>
          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map((social) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer hover:bg-slate-500">
                <img src={social.src} alt={social.alt} width={24} height={24}/>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat leading-normal text-2xl font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0"/>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer