import { NavLink } from "react-router-dom"
import { navLinks } from "../constant"

const Navbar = () => {
  return (
    <nav>
      <h1>JelajahJabar.</h1>
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={link.name}>
              <NavLink href={link.path}>{link.name}</NavLink>
            </li>
          )
        })}
        s
      </ul>
    </nav>
  )
}

export default Navbar
