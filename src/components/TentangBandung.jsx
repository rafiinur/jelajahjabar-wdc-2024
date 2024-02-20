import { Jabar } from "../assets/icons";

export default function TentangBandung() {
  return (
    <section className="w-full h-auto py-12">
      <div className="flex items-center justify-evenly h-full mx-auto max-w-7xl">
        <div className="flex flex-col items-start w-[50%] gap-3">
          <h3 className="text-[38px] leading-[62px] font-semibold text-opacity-90 mb-2">
            Tentang Kota Bandung
          </h3>
          <p className="mb-5 text-lg text-opacity-90">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            nisi reiciendis veniam quas, architecto consequuntur sapiente odio
            corporis ipsa! Voluptate reiciendis ducimus excepturi temporibus
            laborum numquam repudiandae. Perferendis, necessitatibus distinctio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            nesciunt harum. Dolorum eos inventore esse libero debitis aspernatur
            necessitatibus est deserunt, explicabo eveniet. Quam nam quidem
            doloribus quaerat eos explicabo.
          </p>
        </div>
        <div>
          <Jabar />
        </div>
      </div>
    </section>
  );
}
