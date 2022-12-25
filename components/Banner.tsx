import React from "react";
import { Banners } from "../typings";

type Props = {
  bannerData: Banners;
};

const Banner = ({ bannerData }: Props) => {
  return (
    <section className="grid lg:grid-cols-5 space-y-5 p-2 md:p-4">
      {/* Left */}
      <div className="space-y-4 col-span-3">
        <h1 className="text-7xl font-bold">{bannerData.hedaer1}</h1>
        <h2 className="font-semibold text-gray-500 tracking-widetext-sm md:text-base ">
          {bannerData.header2}..
        </h2>
      </div>
      {/* Rigth */}
      <div className="col-span-2">
        <h2 className="text-gray-400 text-sm md:text-base font-bold">
          {bannerData.description}
        </h2>
      </div>
    </section>
  );
};

export default Banner;
