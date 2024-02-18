/* eslint-disable react/prop-types */
const ChevronDown = ({ className, width = "32" }) => {
  return (
    <svg
      className={`mx-auto ${className}`}
      width={width}
      height={width}
      viewBox="0 0 35 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 2L18 14.75L35 2"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  )
}

export default ChevronDown
