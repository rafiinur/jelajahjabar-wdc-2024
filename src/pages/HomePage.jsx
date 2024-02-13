import {
  Navbar,
  Hero,
  Destinasi,
  Populer,
  Hotel,
  Carousel,
} from "../components"

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Destinasi />
        <Carousel />
        <Populer />
        <Hotel />
      </main>
    </>
  )
}

export default HomePage
