import React from "react";
import "./Services.css";

function Services() {
  const serviceList = [
    { name: "Service1", description: "Description for Service 1" },
    { name: "Service2", description: "Description for Service 2" },
    { name: "Service3", description: "Description for Service 3" },
    { name: "Service4", description: "Description for Service 4" },
  ];
  return (
    <section className="Services__container">
      <div className="Services">
        {serviceList.map((service) => {
          return (
            <div  className="Service__card">
              <h1>{service.name}</h1>
              <p>{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Services;
