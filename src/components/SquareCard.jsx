import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";

const SquareCard = ({naat_khwan}) => {
  return (
    <div className="category-card">
      <div className="h-36 group relative w-36 border rounded-lg overflow-hidden hover:shadow-xl cursor-pointer hover:scale-105 transition-all">
        <img
          className="w-36 h-36"
          src="https://t3.ftcdn.net/jpg/05/65/79/38/360_F_565793828_UmtkHStR05IaePJ35yv6FBBuFqdTPLcY.jpg"
          alt=""
        />
        <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <FaRegPlayCircle className="top-0 left-0 text-white w-20 h-20 group-hover:opacity-100 transition-all opacity-0" />
        </div>
      </div>
      <h1 className="my-1">{naat_khwan?.name.length>15?naat_khwan?.name.slice(0,14)+'...':naat_khwan?.name}</h1>
    </div>
  );
};

export default SquareCard;
