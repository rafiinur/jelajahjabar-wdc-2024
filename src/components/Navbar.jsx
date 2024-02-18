import { NavLink } from "react-router-dom"
import { navLinks } from "../constant"

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-1/2 -translate-x-[50%] flex justify-between items-center w-[72rem] max-w-[72rem] h-[7.5rem] mx-auto">
      <h1 className="text-3xl font-semibold">JelajahJabar.</h1>
      <ul className="flex gap-12">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              className="text-2xl transition-colors hover:text-primary"
              href={link.path}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
