import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "../assets/icons"
import { seniDaerah } from "../constant"

const SeniDaerah = () => {
  return (
    <section className="w-full mb-[100px]">
      <div className="flex items-center justify-between max-w-7xl mx-auto mb-[100px]">
        <h3 className="text-opacity-90 text-[52px] font-extrabold leading-[62px] max-w-[65%]">
          Jelajahi Warisan Tradisi dan Seni Daerah
        </h3>
        <div className="flex gap-5">
          <button className="p-5 border rounded-full border-primary">
            <ArrowLeft />
          </button>
          <button className="p-5 border rounded-full border-primary">
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="flex items-center">
        {seniDaerah.map((item, index) => (
          <div
            key={item.title}
            className="relative w-full"
          >
            <img
              className="object-cover object-center w-full h-full"
              src={`/img/${item.image}`}
              alt="seni-daerah"
            />
            <div className="absolute bottom-14 left-8">
              <div className="group">
                <p className="text-4xl font-extrabold ">{`0${index + 1}`}</p>
                <h4 className="mb-5 text-2xl font-extrabold ">{item.title}</h4>
                <div>
                  <p className="text-lg mb-7">{item.description}</p>
                  <Link
                    href={item.href}
                    className="text-sm "
                  >
                    Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SeniDaerah
