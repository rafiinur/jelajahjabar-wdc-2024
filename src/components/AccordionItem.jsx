/* eslint-disable react/prop-types */
import { Collapse } from "react-collapse"
import { ChevronDown } from "../assets/icons"

const AccordionItem = ({ isOpen, toggle, question, answer }) => {
  return (
    <div className="border-b border-dark-grey mb-7">
      <div className="flex items-baseline justify-between mb-7">
        <p className="text-[32px] leading-[50px] text-opacity-90 font-medium">
          {question}
        </p>
        <button
          className="p-3 mr-6 rounded-full cursor-pointer"
          onClick={toggle}
        >
          <ChevronDown
            width="20"
            className={`${
              isOpen ? "" : "rotate-90"
            } transition-all duration-300`}
          />
        </button>
      </div>
      <Collapse isOpened={isOpen}>
        <div className="max-w-[98%]">
          <p className="text-xl">{answer}</p>
        </div>
      </Collapse>
    </div>
  )
}

export default AccordionItem
