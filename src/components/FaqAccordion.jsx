import { useState } from "react"
import { faq } from "../constant"
import AccordionItem from "./AccordionItem"
import SectionLink from "./SectionLink"

const FaqAccordion = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = (index) => {
    if (index === isOpen) {
      return setIsOpen(null)
    }
    setIsOpen(index)
  }

  return (
    <section className="mb-[132px]">
      <div className="mx-auto max-w-7xl text-start">
        <h3 className="text-dark-grey font-semibold text-[32px] mb-10">FAQ</h3>
        <h4 className="text-[54px] font-medium text-opacity-90 max-w-4xl mb-[100px]">
          KETAHUI INFORMASI UMUM TENTANG JAWA BARAT
        </h4>
      </div>
      <div className="mx-auto max-w-7xl">
        {faq.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            toggle={() => toggle(index)}
            isOpen={index === isOpen}
          />
        ))}
      </div>
      <div className="mx-auto mt-12 text-center max-w-7xl">
        <SectionLink>Lihat Selengkapnya</SectionLink>
      </div>
    </section>
  )
}

export default FaqAccordion
