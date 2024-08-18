import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  //   console.log(service);
  const { _id, description, facility, img, price, service_id, title } = service;
  console.log(_id);
  return (
    <div className="card card-compact bg-base-100 w-82 shadow-xl">
      <figure className="h-[200px]">
        <img srcSet={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-md text-orange-500 font-bold">Price : $ {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning text-white">
            Service Now <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
