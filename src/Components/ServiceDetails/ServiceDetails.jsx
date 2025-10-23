import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ServiceCard from "../ServiceCard/ServiceCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ServiceDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    const filterService = data.filter((detail) => detail.serviceId == id);
    setService(filterService);
  }, [id, data]);
  return (
    <div className="bg-[#FFF9F4] min-h-screen pt-6">
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <div className="w-11/12 mx-auto">
        {service.map((service) => (
          <ServiceCard key={service.serviceId} service={service}></ServiceCard>
        ))}
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ServiceDetails;
