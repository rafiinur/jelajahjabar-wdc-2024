import { Navbar, Hero } from "../components"

const Header = () => {
  return (
    <header className="relative w-full h-screen bg-center bg-no-repeat bg-cover bg-hero">
      <Navbar />
      <Hero />
    </header>
  )
}

export default Header
