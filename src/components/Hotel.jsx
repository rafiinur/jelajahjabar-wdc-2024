import { SectionLink, SectionTitle, SectionDescription } from "./index"

const Hotel = () => {
  return (
    <section className="mb-[263px] text-center">
      <SectionTitle>Rekomendasi Hotel di Jawa Barat</SectionTitle>
      <SectionDescription className="mb-32">
        Temukan kenyamanan dan nikmati malammu dengan rekomendasi hotel yang
        kami tawarkan.
      </SectionDescription>
      <div className="flex overflow-x-auto gap-14 mb-[103px] justify-center">
        <div className="w-[610px] h-[372px] rounded-xl bg-dark-grey">
          <div className="flex flex-col">
            <div className="px-4 py-3 rounded-lg">
              <img
                src="/img/hotel-1.png"
                alt="hotel-1"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="px-5 mt-3 text-start">
              <h3 className="mb-5 text-2xl font-semibold">
                Agbokim waterfalls
              </h3>
              <p className="text-lg font-light">Nigeria, cross river state</p>
            </div>
          </div>
        </div>
      </div>
      <SectionLink>Lihat Selengkapnya</SectionLink>
    </section>
  )
}

export default Hotel
