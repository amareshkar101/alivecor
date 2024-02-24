import React from 'react'

import Partner1 from "@/assets/partners/partner_1.svg";
import Bayer from "@/assets/partners/bayer.svg";
import Labadie from "@/assets/partners/labadie.svg";
import Schumm from "@/assets/partners/schumm.svg";
import Wuckert from "@/assets/partners/wuckert.svg";
import Image from "next/image";

const AlivecorPartnerComponent = () => {
  return (
    <>
      <div className="w-full bg-brand-dark flex pt-12 pb-16">
        <div className="w-[40%] text-white ml-[6%] font-[600]">
          <p className="text-[50px] leading-[55px] font-[700]">Trusted by Top Hospitals</p>
          <p className="text-[12px] mt-[4%] w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis eleifend quam, non efficitur nisi mattis quis.{" "}
          </p>
        </div>
        <div className="w-[45%] flex flex-col space-y-8 relative">
          <div className="absolute -right-[20%] flex space-x-10">
            <Image src={Labadie} width={180} height={100} priority="true" />
            <Image src={Schumm} width={180} height={100} priority="true" />
            <Image src={Partner1} width={60} height={60} priority="true" />
          </div>
          <div className="absolute right-[0%] top-[25%] flex space-x-10">
            <Image src={Bayer} width={180} height={100} priority="true" />
            <Image src={Wuckert} width={180} height={100} priority="true" />
            <Image src={Labadie} width={180} height={50} priority="true" />
          </div>
          <div className="absolute -right-[20%] top-[65%] flex space-x-10">
            <Image src={Wuckert} width={180} height={100} priority="true" />
            <Image src={Schumm} width={180} height={100} priority="true" />
            <Image src={Partner1} width={60} height={60} priority="true" />
          </div>
        </div>
      </div>
    </>
  );
};
export default AlivecorPartnerComponent;
