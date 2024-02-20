/* eslint-disable react/prop-types */
import { ChevronDown } from "../assets/icons";

const Hero = ({ texthead, textpara }) => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full ">
      <div className="flex flex-col items-center justify-center mt-auto -mb-12">
        <h2 className="font-bold text-7xl leading-[87.77px] text-center text-opacity-90 max-w-2xl mb-6">
          {texthead}
        </h2>
        <p className="text-lg font-light text-center">{textpara}</p>
      </div>
      <button className="w-16 h-16 mt-auto mb-4 text-center transition-colors rounded-full cursor-pointer hover:bg-dark-grey">
        <ChevronDown />
      </button>
    </section>
  );
};

export default Hero;
