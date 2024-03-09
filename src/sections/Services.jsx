import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";


const Services = () => {
  return (
    <section className="flex justify-center flex-wrap max-container gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services