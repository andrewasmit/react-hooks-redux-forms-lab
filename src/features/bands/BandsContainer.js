import React from "react";
import { useSelector } from "react-redux";
import BandInput from "./BandInput";
import { useDispatch } from "react-redux";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities);
  const dispatch = useDispatch();

  function onBandSubmit(text) {
    dispatch(bandAdded(text));
  }

  console.log("State: Bands", bands);

  const bandsToDisplay = bands.map((band, idx)=>{
    return <li key={idx}>{band}</li>
  })

  return (
    <div>
      <p>Container</p>
      <BandInput onBandSubmit={onBandSubmit} />
      <h4>Bands:</h4>
      <ul>
        {bandsToDisplay}
      </ul>
    </div>
  );
}

export default BandsContainer;
