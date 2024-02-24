import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import AliveCorIcon from "@/assets/hero/alivecor_icon_header.svg";
import HeroImage from "@/assets/hero/hero_section_image.svg";
import HeroReview from "@/assets/hero/review.svg";

const AlivecorHeroComponent = () => {
  return (
    <>
      <div className="w-full h-full bg-brand-accent-light text-outfit">
        <div className="w-full h-[10%] flex items-center">
          <div className="w-[40%] mt-[1%] pl-[4%]">
            <Image
              src={AliveCorIcon}
              width={288}
              height={41}
              priority="true"
              className="cursor-pointer"
            />
          </div>
          <div className="w-[40%] mt-[1%] font-[700] text-brand-dark flex space-x-8 text-[16px]">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">About Us</p>
            <div className="cursor-pointer flex items-center space-x-1">
              <p>Products</p> <IoIosArrowDown color="#174E8C" size={"18px"} />
            </div>
            <p className="cursor-pointer">Contact us</p>
          </div>
          <div className="w-[20%] mt-[1%] text-brand-dark font-[600]">
            <div className="border-2 border-[#174E8C] w-[55%] text-center rounded-full">
              <p className="text-[14px] py-2 px-4 cursor-pointer font-[700]">
                Buy now
              </p>
            </div>
          </div>
        </div>
        <div className="w-full border border-[#174E8C] mt-[1%]"></div>
        <div className="w-full mt-[1%] flex space-between">
          <div className="w-[35%] ml-[6%]">
            <Image
              src={HeroImage}
              width={360}
              height={41}
              priority="true"
              className="cursor-pointer"
            />
          </div>
          <div className="w-[60%]">
            <p className="text-brand-dark font-[900] text-[80px] text-outfit leading-[77px] w-[80%] mt-[7%] ml-[3%]">
              Medical Grade ECG{" "}
              <span className="text-brand-accent">at home</span>
            </p>
            <p className="text-[#666666] font-[600] text-[16px] text-outfit w-[72%] mt-[2%] ml-[3.5%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus
              scelerisque orci nec erat cursus, sed facilisis velit porttitor.
            </p>
            <div className="ml-[3.5%] mt-[3%] text-outfit flex items-center space-x-8">
              <button className="bg-brand-dark text-white text-[14px] py-3 px-10 rounded-full font-[600] cursor-pointer">
                Buy now
              </button>
              <div className="flex space-x-2 items-center cursor-pointer">
                <FaPlay color="#666666" size={"18px"} />
                <p className="text-[14px] font-[700] text-[#666666]">
                  Watch video
                </p>
              </div>
            </div>
            <div className="ml-[3.5%] mt-[3%] flex space-x-6">
              <Image
                src={HeroReview}
                width={200}
                height={41}
                priority="true"
                className="cursor-pointer"
              />
              <div>
                <div className="flex space-x-2 text-[25px] font-[700] text-brand-dark">
                  95K<p className="text-brand-accent">+</p>
                </div>
                <p className="text-brand-dark text-[10px] font-[700]">
                  ECG Devices Sold
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlivecorHeroComponent;
