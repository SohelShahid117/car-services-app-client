import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div className="my-5">
      <div className="text-center w-1/2 mx-auto">
        <h3 className="text-md text-orange-500 font-bold">
          Service:{services.length}
        </h3>
        <h3 className="text-2xl font-semibold">Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard key={s._id} service={s}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
