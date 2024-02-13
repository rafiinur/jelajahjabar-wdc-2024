// eslint-disable-next-line react/prop-types
const SectionTitle = ({ children, className }) => {
  return (
    <h3
      className={`font-bold text-[42px] leading-[62px] text-opacity-90 ${className}`}
    >
      {children}
    </h3>
  )
}

export default SectionTitle
