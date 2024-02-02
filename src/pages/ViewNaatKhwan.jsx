import React from "react";
import NaatCard from "../components/NaatCard";

const ViewNaatKhwan = () => {
  return (
    <div className="flex flex-col justify-center items-center my-4">
      <div className="w-6/12">
        <div className="relative h-96 overflow-hidden p-4 flex rounded-lg">
          <img
            className="absolute top-0 left-0 h-96 rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Atif_Aslam_at_Badlapur_%28cropped%29.jpg"
            alt=""
          />
          <h1 className="self-end text-3xl font-bold z-10">Atif Aslam</h1>
          
          <p></p>
          <div className="shade h-12 bg-white shadow-[0px_0px_40px_50px_white] w-full absolute bottom-0 left-0 "></div>
        </div>
        <div className="list w-full">
          <NaatCard />
          <NaatCard />
          <NaatCard />
          <NaatCard />
        </div>
      </div>
    </div>
  );
};

export default ViewNaatKhwan;
