import React, { useState } from "react";

function BandInput(props) {

  const [name, setname] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    props.onBandSubmit(name);
    setname("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input value={name} type="text" onChange={e=>setname(e.target.value)}></input>
        <input type="submit" value="add band"></input>
      </form>
    </div>
  );
}

export default BandInput;
