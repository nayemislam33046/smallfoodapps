import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Rating = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, i) => {
    const number = i + 0.5;
    return (
      <span key={i}>
        {rating >= i + 1 ? (
          <FaStar />
        ) : rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });
  return <div className="flex items-center">{ratingStar}</div>;
};
export default Rating;
