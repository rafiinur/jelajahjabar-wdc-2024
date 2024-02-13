import { destinasi } from "../constant"
import { SectionDescription, SectionTitle } from "./index"

const Destinasi = () => {
  return (
    <section className="p-[132px] text-center">
      <SectionTitle className="mb-5">
        Eksplorasi Dataran Indah dan Menakjubkan
      </SectionTitle>
      <SectionDescription className="mb-28">
        Pengalaman Tak Terlupakan Sedang Menunggumu
      </SectionDescription>
      <div className="flex justify-center max-w-6xl gap-6 mx-auto item-center">
        {destinasi.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="mb-10">
              <img
                src={`/img/${item.image}`}
                alt="destinasi"
                className="w-full "
              />
            </div>

            <h3 className="mb-5 text-2xl font-semibold ">{item.title}</h3>
            <p className="text-lg font-light">{item.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Destinasi
