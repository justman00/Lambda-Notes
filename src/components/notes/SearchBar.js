import React, { useState } from "react";

export default function SearchBar(props) {
  return (
    <div>
      <input type="text" onChange={props.handleChange} value={props.value} />
    </div>
  );
}
