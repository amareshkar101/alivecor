import Image from "next/image";
import React from "react";
import Sosmed from "@/assets/footer/Sosmed.svg";
import FooterIcon from "@/assets/footer/FooterIcon.svg";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const AlivecorFooterComponent = () => {
  return (
    <>
      <div className="w-full bg-brand-dark">
        <div className="flex px-[8%] py-[5%] justify-between">
          <div className="w-[30%]">
            <Image
              src={FooterIcon}
              width={250}
              height={200}
              priority={true}
              className="cursor-pointer"
            />
            <p className="mt-[5%] text-white text-[12px] w-[55%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
              amet neque tortor.
            </p>
            <Image
              src={Sosmed}
              width={200}
              height={100}
              priority={true}
              className="mt-[5%] cursor-pointer"
            />
          </div>
          <div className="w-[15%] flex flex-col">
            <p className="font-[600] text-[16px] text-white">Quick Links</p>
            <p className="text-white font-[600] text-[12px] mt-[15%] cursor-pointer">
              About Us
            </p>
            <p className="text-white font-[600] text-[12px] mt-[10%] cursor-pointer">
              How to Order
            </p>
            <p className="text-white font-[600] text-[12px] mt-[10%] cursor-pointer">
              Testimonial
            </p>
          </div>
          <div className="w-[15%] flex flex-col -ml-[3%]">
            <p className="font-[600] text-[16px] text-white">Contact Us</p>
            <div className="text-white font-[600] text-[12px] mt-[15%] cursor-pointer flex space-x-2">
              <MdEmail color="#FFFFFF" size={"15px"} />
              <p>hello@website.com</p>
            </div>
            <div className="text-white font-[600] text-[12px] mt-[10%] cursor-pointer flex space-x-2">
              <FaLocationDot color="#FFFFFF" size={"15px"} />
              <p>Lorem ipsum dolor</p>
            </div>
            <div className="text-white font-[600] text-[12px] mt-[10%] cursor-pointer flex space-x-2">
              <FaPhoneAlt color="#FFFFFF" size={"14px"} />
              <p>+02 5421234560</p>
            </div>
          </div>
          <div className="w-[35%] flex flex-col ml-[2%]">
            <p className="font-[600] text-[16px] text-white">Newsletter</p>
            <div className="mt-[8%] w-[85%] flex">
              <input
                placeholder="Enter your email"
                className="w-[70%] px-3 py-4 rounded-l-lg text-[10px] font-[600] text-[#666666] outline-none cursor-pointer"
              />
              <div className="w-[30%] px-3 py-4 rounded-r-lg bg-brand-accent text-white text-[12px] text-center font-[600] cursor-pointer">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AlivecorFooterComponent;
