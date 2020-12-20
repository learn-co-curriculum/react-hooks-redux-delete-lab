import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import BandContainer from "../features/bands/BandsContainer";
import { bandAdded } from "../features/bands/bandsSlice";
import store from "../store";

store.dispatch(bandAdded("test 1"));
store.dispatch(bandAdded("test 2"));

test("renders each band name from the store", () => {
  render(
    <Provider store={store}>
      <BandContainer />
    </Provider>
  );

  expect(screen.queryByText("test 1")).toBeInTheDocument();
  expect(screen.queryByText("test 2")).toBeInTheDocument();
});

test("adds a new band when the BandInput form is submitted", () => {
  render(
    <Provider store={store}>
      <BandContainer />
    </Provider>
  );

  fireEvent.change(screen.queryByLabelText(/name/i), {
    target: { value: "test 3" },
  });

  fireEvent.submit(screen.queryByText(/add band/i));

  expect(screen.queryByText("test 3")).toBeInTheDocument();
});
