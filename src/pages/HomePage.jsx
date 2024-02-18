import {
  Header,
  Destinasi,
  Populer,
  Hotel,
  Carousel,
  SeniDaerah,
  FaqAccordion,
  Footer,
} from "../components"

const HomePage = () => {
  return (
    <>
      <Header />
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
  )
}

export default HomePage
