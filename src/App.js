import "./styles.css";
import React, { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };

  return { value, onChange };
};
export default function App() {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>hellow</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}
