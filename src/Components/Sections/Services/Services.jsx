import React from "react";
import { services } from "../../../Constant";
import ServiceCard from "../../Common/ServiceCard";
export default function Services() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          imgURL={service.imgURL}
          subtext={service.subtext}
        />
      ))}
    </section>
  );
}
