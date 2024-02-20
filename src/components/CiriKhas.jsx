/* eslint-disable react/prop-types */

export default function CiriKhas() {
  function Card({ className }) {
    // const additionalClassName = className;
    className += " bg-cover rounded-lg mx-2 my-3 flex flex-col justify-end p-3";
    return (
      <div className={className}>
        <div>
          <h2 className="font-bold text-xl">WAYANG GOLEK</h2>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full py-10 flex justify-center">
      <div className="w-[90%]">
        <div className=" flex ">
          <h2 className="text-3xl font-semibold mb-4 py-5">
            Fakta dan Ciri Khas Kota Bandung
          </h2>
        </div>
        <div className="h-[550px] grid grid-rows-5 grid-flow-col">
          <Card className="row-span-3 bg-angklung" />
          <Card className="row-span-2 bg-jaipong" />
          <Card className="row-span-2 bg-jaipong" />
          <Card className="row-span-3 bg-wayang" />
          <Card className="row-span-3 bg-silat" />
          <Card className="col-span-2 row-span-2 bg-angklung bg-cover" />
          <Card className="row-span-3 bg-jaipong" />

          {/* {seniDaerah.map((item, index) => (
            <Card />
          ))} */}
        </div>
        {/* <div className="flex items-stretch h-full">
          <Card className="" />
          <Card className="" />
          <div className="w-[25%]"></div>
          <div className="w-[25%]">
            <Card />
            <Card />
          </div>
          <div className="w-[50%]">
            <Card />
            <Card />
            <Card />
          </div>
        </div> */}
      </div>
    </section>
  );
}
