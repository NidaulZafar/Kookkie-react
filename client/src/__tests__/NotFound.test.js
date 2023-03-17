import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound.jsx";

describe("NotFound component", () => {
  it("renders the error message and helpful links", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    expect(screen.getByText("Oops! You seem to be lost.")).toBeInTheDocument();
    expect(screen.getByText("Registration Page")).toBeInTheDocument();
    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });
});
