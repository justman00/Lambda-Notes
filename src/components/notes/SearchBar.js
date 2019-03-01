import React, { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    console.log("before");
    setValue(e.target.value);
    console.log(value);
    console.log("after");
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={value} />
    </div>
  );
}
