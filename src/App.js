import "./styles.css";
import React, { useState } from "react";
import { useInput } from "./hooks/useInput";

export default function App() {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>hellow</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}
