import React from "react";
import { reviews } from "../../../Constant";
import ReviewCard from "../../Common/ReviewCard";
export default function CustomerReviews() {
  return (
    <section className="max-container ">
      <h3 className="text-center text-4xl font-bold font-palanquin">
        What Our
        <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly item-center ms:lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedBack={review.feedback}
          />
        ))}
      </div>
    </section>
  );
}
