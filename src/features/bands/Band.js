import React from "react";
import { useDispatch } from "react-redux";
import { bandRemoved } from "./bandsSlice";

function Band({ band }) {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(bandRemoved(band.id));
  }

  return (
    <li>
      <span>{band.name}</span>
      <button onClick={handleDeleteClick}>Delete Band</button>
    </li>
  );
}

export default Band;
