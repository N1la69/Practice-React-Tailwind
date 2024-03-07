import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section id="home" className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">

        <p className="text-xl text-coral-red font-montserrat">Our Summer Collection</p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[1] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap pr-10 relative z-10">The New Arrivals</span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>

        <p className="font-montserrat leading-8 mt-6 mb-14 text-slate-gray text-lg sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <Button label="Shop Now" iconUrl={arrowRight}/>

        <div className="flex flex-start items-start flex-wrap mt-20 w-full gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex justify-center items-center flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoe1} alt="shoe" width={610} height={500} className="object-contain relative z-10"/>
      </div>

    </section>
  )
}

export default Hero