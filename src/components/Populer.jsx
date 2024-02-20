import { SectionTitle, SectionDescription, SectionLink } from "./index";
import { LocationCheck, Hearth } from "../assets/icons";

const Populer = () => {
  return (
    <section className="text-center mb-36">
      <div className="max-w-2xl mx-auto">
        <SectionTitle className="mb-5">
          Jelajahi Wisata di Jawa Barat
        </SectionTitle>
        <SectionDescription className="mb-10">
          Eksplorasi destinasi wisata populer dan temukan wisata indah
          tersembunyi yang kami tawarkan.
        </SectionDescription>
        <input
          type="text"
          className="w-[503px] h-[51px] rounded-xl border border-[#121212/0.17] px-[34px] py-[17px] outline-none text-black/90"
          placeholder="Search for Tourist centers, location"
        />
      </div>

      <div className="grid w-full grid-cols-4 grid-rows-1 gap-5 p-20">
        <div className="col-span-2 bg-dark-grey rounded-xl">
          <div className="flex flex-col px-4 pt-3 pb-8">
            <div className="rounded-lg">
              <img
                src="/img/populer-1.png"
                alt="populer"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="my-3 text-2xl font-semibold">
                Agbokim waterfalls
              </h3>
              <button className="w-10 h-10 transition-colors rounded-full cursor-pointer hover:bg-dark-grey">
                <Hearth />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <LocationCheck />
              <p className="text-lg font-light text-start">
                Nigeria, cross river state
              </p>
            </div>
          </div>
        </div>
        <div className="bg-dark-grey rounded-xl">
          <div className="flex flex-col px-4 pt-3 pb-8">
            <div className="rounded-lg">
              <img
                src="/img/populer-4.png"
                alt="populer"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="my-3 text-2xl font-semibold">Taj Mahal</h3>
              <button className="w-10 h-10 transition-colors rounded-full cursor-pointer hover:bg-dark-grey">
                <Hearth />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <LocationCheck />
              <p className="text-lg font-light text-start">Agra</p>
            </div>
          </div>
        </div>
        <div className="row-span-2 bg-dark-grey rounded-xl">
          <div className="flex flex-col px-4 pt-3 pb-8">
            <div className="rounded-lg">
              <img src="/img/populer-2.png" alt="populer" className="w-full" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="my-3 text-2xl font-semibold">Eiffel Tower</h3>
              <button className="w-10 h-10 transition-colors rounded-full cursor-pointer hover:bg-dark-grey">
                <Hearth />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <LocationCheck />
              <p className="text-lg font-light text-start">Paris</p>
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-dark-grey rounded-xl">
          <div className="flex px-4 py-3">
            <div className="rounded-lg">
              <img
                src="/img/populer-3.png"
                alt="populer"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="my-3 text-2xl font-semibold">
                Great Wall of China
              </h3>
              <button className="w-10 h-10 transition-colors rounded-full cursor-pointer hover:bg-dark-grey">
                <Hearth />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <LocationCheck />
              <p className="text-lg font-light text-start">Beijing</p>
            </div>
          </div>
        </div>
      </div>
      <SectionLink>Lihat Selengkapnya</SectionLink>
    </section>
  );
};

export default Populer;
