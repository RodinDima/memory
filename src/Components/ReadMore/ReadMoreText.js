import { useState } from "react";
import "./style.css"

const ReadMoreText = ({shortContent, longContent }) => {
   
   const [collapse, setCollapse] = useState(false);
   
    return (
      <div className="read-more">
        {shortContent}

        <span className={`long-text ${collapse ? "expanded" : ""}`}>
          {longContent}
        </span>
        <button
          className="btn-text"
          onClick={() => setCollapse((prev) => !prev)}
        >
          {collapse ? "скрити" : "читати далі"}
        </button>
      </div>
    );
};
export default ReadMoreText;
