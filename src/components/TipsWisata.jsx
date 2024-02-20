import { ArrowRight } from "../assets/icons";

export default function TipsWisata() {
  return (
    <section className="w-full bg-hero h-screen bg-center bg-no-repeat bg-cover flex justify-center items-center mb-7">
      <div className="w-[90%] ">
        <div className="w-[60%] mb-3">
          <h2 className="text-5xl font-bold">Tips Wisata ke Kota Bandung</h2>
        </div>
        <div className="w-[90%]">
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quasi esse optio ipsa id soluta adipisci ab officia aspernatur
            voluptatum, consequuntur tenetur repudiandae quo aperiam quisquam,
            dolorem facere. Quae, quibusdam.
          </p>
        </div>
        <div className="rounded-md bg-sky-500 w-auto px-2 py-1 inline-block">
          <div className="flex">
            <button>Lihat selengkapnya</button>
            <ArrowRight className="fill-white inline" />
          </div>
        </div>
      </div>
    </section>
  );
}
