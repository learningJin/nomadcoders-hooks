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

  return (
    <div className="App"></div>
  );
}
