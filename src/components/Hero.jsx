import { ChevronDown } from "../assets/icons"

const Hero = () => {
  return (
    <section className="w-full h-screen bg-center bg-no-repeat bg-cover bg-hero">
      <div className="flex flex-col items-center justify-center h-full gap-5 ">
        <h2 className="font-bold text-7xl leading-[87.77px] text-center text-opacity-90 max-w-2xl">
          Keajaiban Alam Jawa Barat
        </h2>
        <p className="font-light text-[18px] leading-[21.95px] text-center">
          Petualangan alam yang menakjubkan menunggumu
        </p>
        <button className="w-16 h-16 text-center transition-colors rounded-full cursor-pointer hover:bg-dark-grey">
          <ChevronDown />
        </button>
      </div>
    </section>
  )
}

export default Hero
