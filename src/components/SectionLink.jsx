/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const SectionLink = ({ children, className, href }) => {
  return (
    <Link
      href={href}
      className={`text-xl text-primary font-light ${className}`}
    >
      {children}
    </Link>
  )
}

export default SectionLink
