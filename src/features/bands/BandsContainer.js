import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Band from "./Band";
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
          <Band key={band.id} band={band} />
        ))}
      </ul>
    </div>
  );
}

export default BandsContainer;
