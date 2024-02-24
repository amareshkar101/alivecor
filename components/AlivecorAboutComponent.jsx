import Image from "next/image";
import React from "react";
import Radial from "@/assets/about/radial_about_us.svg";

const AlivecorAboutComponent = () => {
  return (
    <>
      <div className="w-full bg-brand-accent-light font-outfit relative">
        <div className="text-center">
          <div className="flex flex-col space-y-4 justify-center">
            <p className="text-[40px] text-brand-dark font-[700] mt-[3%]">
              Kardia By Alivecor
            </p>
            <p className="text-[14px] text-[#666666] px-[17%] font-[600]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus
              scelerisque orci nec erat cursus, sed facilisis velit porttitor.
              Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac
              metus.
            </p>
          </div>

          <Image
            src={Radial}
            width={200}
            height={200}
            priority="true"
            className="z-0"
          />
        </div>
        <div className="w-full flex justify-center spaxe-x-6 absolute top-[45%]">
          <div className="bg-white rounded-xl p-8 w-[18%] text-center shadow-xl mx-[2%]">
            <p className="text-[40px] font-[700] text-brand-dark">
              23<span className="text-brand-accent">+</span>
            </p>
            <p className="text-[12px] text-[#666666] font-[600]">Countries</p>
          </div>
          <div className="bg-white rounded-xl p-8 w-[18%] text-center shadow-xl mx-[2%]">
            <p className="text-[40px] font-[700] text-brand-dark">
              9600<span className="text-brand-accent">+</span>
            </p>
            <p className="text-[12px] text-[#666666] font-[600]">Hospitals</p>
          </div>{" "}
          <div className="bg-white rounded-xl p-8 w-[18%] text-center shadow-xl mx-[2%]">
            <p className="text-[40px] font-[700] text-brand-dark">
              5-<span className="text-brand-accent">Star</span>
            </p>
            <p className="text-[12px] text-[#666666] font-[600]">
              reviews on Amazon
            </p>
          </div>{" "}
          <div className="bg-white rounded-xl p-8 w-[18%] text-center shadow-xl mx-[2%]">
            <p className="text-[40px] font-[700] text-brand-dark">
              2M<span className="text-brand-accent">+</span>
            </p>
            <p className="text-[12px] text-[#666666] font-[600]">ECGs Daily</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AlivecorAboutComponent;
