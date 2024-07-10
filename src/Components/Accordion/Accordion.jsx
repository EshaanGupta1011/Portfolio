// src/Accordion.js
import React, { useState } from "react";
import "./Accordion.css";
import "./media-query.css";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div>
      <div onClick={onClick} className="acc-knowmore">
        {title}
      </div>
      {isOpen && <div className="acc-text">{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
