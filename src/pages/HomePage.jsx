import {
  Header,
  Destinasi,
  Populer,
  Hotel,
  Carousel,
  SeniDaerah,
  FaqAccordion,
  Footer,
} from "../components";

const HomePage = () => {
  return (
    <>
      <Header
        bgimg="bg-hero"
        texthead="Keajaiban Alam Jawa Barat"
        textpara="Petualangan alam yang menakjubkan menunggumu"
      />
      <main>
        <Destinasi />
        <Carousel />
        <Populer />
        <Hotel />
        <SeniDaerah />
        <FaqAccordion />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
