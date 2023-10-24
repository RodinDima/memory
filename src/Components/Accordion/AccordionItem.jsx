import React, { useRef } from "react";
import { ReactComponent as ArrowIcon } from "../MainPage/Images/arrow.svg";

export const AccordionItem = ({ faqItem, onClick, isOpen }) => {
  const itemRef = useRef(null);

  return (
    <li className="accordion-item">
      <button className="accordion-header" onClick={() => onClick()}>
        {faqItem.first} {/* Змінено faqItem.q на faqItem.first */}
        <ArrowIcon className={`accordion-arrow ${isOpen ? "active" : ""}`} />
      </button>
      <div
        className="accordion-collapse"
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
        }
      >
        <div className="accordion-body" ref={itemRef}>
          {faqItem.second} {/* Змінено faqItem.a на faqItem.second */}
        </div>
      </div>
    </li>
  );
};
