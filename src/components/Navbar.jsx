import { NavLink } from "react-router-dom"
import { navLinks } from "../constant"

const Navbar = () => {
  return (
    <nav className="flex justify-between w-[72rem] h-[120px] mx-auto bg-tranparent absolute top-0 left-1/2 -translate-x-[50%]">
      <h1 className="font-semibold text-[28px] leading-[120px]">
        JelajahJabar.
      </h1>
      <ul className="flex items-center gap-14">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              className="text-xl"
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
