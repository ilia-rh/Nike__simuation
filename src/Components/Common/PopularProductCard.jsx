import React from "react";
import { star } from "../../assets/icons";
export default function PopularProductCard(props) {
  const { imgURL, name, price, rate } = props;
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="star" width={24} height={24} />
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          ({rate})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-montserrat">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal ">
        {price}
      </p>
    </div>
  );
}
