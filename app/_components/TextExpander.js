"use client";

import React, { useState } from "react";


function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = typeof children === "string" ? children : React.Children.toArray(children).join("");


  const displayText = isExpanded
    ? text
    : text.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span className="text-sm sm:text-base">
      {displayText}{" "}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1 text-sm sm:text-base hover:text-primary-900 hover:border-primary-900 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;
