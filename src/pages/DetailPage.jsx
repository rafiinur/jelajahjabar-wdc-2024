/* eslint-disable no-unused-vars */
import {
  Header,
  Destinasi,
  Populer,
  Hotel,
  Carousel,
  SeniDaerah,
  FaqAccordion,
  Footer,
  Hero,
  Navbar,
  TentangBandung,
  AlasanBandung,
  DestinasiWisata,
  MapFrame,
  CiriKhas,
  TipsWisata,
} from "../components";

export default function DetailPage() {
  return (
    <>
      <Header
        bgimg="bg-bandung"
        texthead="Selamat Datang di Kota Bandung"
        textpara="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <TentangBandung />
      <AlasanBandung />
      <DestinasiWisata />
      <MapFrame />
      <CiriKhas />
      <TipsWisata />
      <Footer />
    </>
  );
}
