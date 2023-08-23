import React from "react";
import { star } from "../../assets/icons";

export default function ReviewCard(props) {
  const { imgURL, customerName, rating, feedBack } = props;
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={`Customer-${customerName}`}
        className="rounded-full object-contain w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedBack}</p>
      <div className="mt-3 flex justify-center items-center gap-2">
        <img
          src={star}
          alt="rating-star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray"> ({rating})</p>
        <h3 className="mt-1 font-palanquin text-center font-bold">
          {customerName}
        </h3>
      </div>
    </div>
  );
}
