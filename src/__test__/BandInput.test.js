import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BandInput from "../features/bands/BandInput";

test("renders an input with a label of 'name'", () => {
  render(<BandInput />);
  expect(screen.queryByLabelText(/name/i)).toBeInTheDocument();
});

test("renders a submit button with the text 'add band'", () => {
  render(<BandInput />);
  expect(screen.queryByText(/add band/i)).toBeInTheDocument();
});

test("handles the form submit and calls the 'onBandSubmit' prop", () => {
  const onBandSubmit = jest.fn();
  render(<BandInput onBandSubmit={onBandSubmit} />);

  fireEvent.change(screen.queryByLabelText(/name/i), {
    target: { value: "test" },
  });

  fireEvent.submit(screen.queryByText(/add band/i));

  expect(onBandSubmit).toHaveBeenCalledWith("test");
});
