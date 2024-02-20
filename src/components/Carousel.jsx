import { carousel } from "../constant";
import { ArrowLeft, ArrowRight } from "../assets/icons";
import { Jabar } from "../assets/icons";

const Carousel = () => {
  return (
    <section className="w-full h-screen mb-[132px]">
      {carousel.map((item) => (
        <div
          key={item.name}
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(/img/${item.image})` }}
        >
          <div className="flex items-center justify-between h-full mx-auto max-w-7xl">
            <div>
              <button className="p-5 border rounded-full border-primary">
                <ArrowLeft className="fill-primary" />
              </button>
            </div>
            <div className="flex flex-col items-start w-[50%] gap-3">
              <h3 className="text-[38px] leading-[62px] font-semibold text-opacity-90 mb-2">
                {item.name}
              </h3>
              <h4 className="text-[52px] leading-[62px] font-extrabold text-opacity-90">
                {item.description}
              </h4>
              <p className="mb-5 text-lg text-opacity-90">{item.excerpt}</p>
              <button className="w-[189px] h-[50px] border border-white rounded-xl">
                Lihat Selengkapnya
              </button>
            </div>
            <div>
              <Jabar />
            </div>
            <div>
              <button className="p-5 border rounded-full border-primary">
                <ArrowRight className="fill-primary" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Carousel;
