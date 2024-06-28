/* eslint-disable react/prop-types */
import { useState } from "react";

function TextExpander({ children, maxWords = 32, btnLabel = "Show more" }) {
  const [isExpanded, setExpanded] = useState(false);

  const displayedText = isExpanded ? children : children.split(" ").splice(0, maxWords).join(" ") + " ..";

  const handleExpand = () => {
    setExpanded(true);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full">
        <p className="w-full text-lg text-secondary-50">{displayedText}</p>
      </div>
      {!isExpanded && (
        <button
          onClick={handleExpand}
          className="w-full text-base font-bold text-primary-900 bg-b-green outline-none py-3 px-6 rounded-lg transition-all hover:opacity-95 active:translate-y-[2px]"
        >
          {btnLabel}
        </button>
      )}
    </div>
  );
}

export default TextExpander;
