import "./styles.css";
import React, { useState } from "react";
import { useInput } from "./hooks/useInput";
import { useTabs } from "./hooks/useTabs";

const content = [
  {
    tab: "section 1",
    content: "content 1"
  },
  {
    tab: "section 2",
    content: "content 2"
  }
];

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      {content.map((section, index) => (
        <button
          onClick={() => {
            changeItem(index);
          }}
        >
          {section.tab}
        </button>
      ))}
      <div> {currentItem.content} </div>
    </div>
  );
}
