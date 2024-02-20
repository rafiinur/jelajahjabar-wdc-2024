import { ArrowLeft, ArrowRight } from "../assets/icons";

export default function AlasanBandung() {
  return (
    <section className="w-full h-screen">
      <div className="w-full h-full bg-bandung-2">
        <div className="flex items-center justify-evenly h-full mx-auto max-w-7xl">
          <div>
            <button className="p-5 border rounded-full border-white fill-white">
              <ArrowLeft className="fill-white" />
            </button>
          </div>
          <div className="flex flex-col items-start w-[70%] gap-3">
            <h2 className="text-5xl leading-[62px] font-bold text-opacity-90 mb-2">
              Alasan Kenapa Harus Mengunjungi Kota Bandung
            </h2>
            <p className="mb-5 text-lg text-opacity-90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              reiciendis aut, repellat optio, excepturi corrupti dicta vero
              velit impedit quo distinctio quibusdam eaque. Molestiae
              dignissimos sint voluptatem totam dicta nulla?
            </p>
          </div>
          <div>
            <button className="p-5 border rounded-full border-white">
              <ArrowRight className="fill-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
