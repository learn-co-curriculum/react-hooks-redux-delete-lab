import "@testing-library/jest-dom";
import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import Band from "../features/bands/Band";
import { bandAdded } from "../features/bands/bandsSlice";
import store from "../store";

store.dispatch(bandAdded("test 1"));
store.dispatch(bandAdded("test 2"));

const { entities } = store.getState().bands;
const [band1, band2] = entities;

test("takes a prop of band and creates an element displaying the band name", () => {
  render(
    <Provider store={store}>
      <Band band={band1} />
    </Provider>
  );
  expect(screen.queryByText(band1.name)).toBeInTheDocument();
});

test("displays a delete button", () => {
  render(
    <Provider store={store}>
      <Band band={band1} />
    </Provider>
  );
  expect(screen.queryByText(/Delete Band/i)).toBeInTheDocument();
  expect(screen.queryByText(/Delete Band/i).tagName).toBe("BUTTON");
});

test("clicking the delete button removes the band from the redux store", () => {
  render(
    <Provider store={store}>
      <Band band={band2} />
    </Provider>
  );
  fireEvent.click(screen.queryByText(/Delete Band/i));

  expect(store.getState().bands.entities).toEqual([band1]);
});
