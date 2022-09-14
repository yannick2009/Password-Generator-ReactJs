import React, { useState } from "react";
import "./Generator.scss";

export default function Generator() {
  const [value, setValue] = useState("");
  const generate = () => {
    const longList = "#ase1@zq7dr15/13uy#thg*7fyo78i78u4jk=56pw-15x+c%mlnvb"
      .toString()
      .split("");
    let number = [];
    for (let i = 0; i < 8; i++) {
      const random = Math.floor(Math.random() * 53);
      number.push(random);
    }
    const password = number.map((x) => longList[x]).join("");
    setValue(password);
  };

  return (
    <div className="generator">
      <p>⌨️</p>
      <input type="text" defaultValue={value} />
      <button onClick={generate}>Generer</button>
    </div>
  );
}
