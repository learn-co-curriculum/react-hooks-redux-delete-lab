import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);

  function handleBandSubmit(name) {
    dispatch(bandAdded(name));
  }

  return (
    <div>
      <BandInput onBandSubmit={handleBandSubmit} />
      <ul>
        {bands.map((band) => (
          <li key={band}>{band}</li>
        ))}
      </ul>
    </div>
  );
}

export default BandsContainer;
