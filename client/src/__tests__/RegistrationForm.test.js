import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import RegistrationForm from "../components/RegistrationForm.jsx";

describe("RegistrationForm", () => {
  it("should render correctly", () => {
    render(
      <BrowserRouter>
        <RegistrationForm />
      </BrowserRouter>
    );
    expect(screen.getByText("Create your account")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("First name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Surname")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Confirm Email address")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Repeat your password")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "CREATE ACCOUNT" })
    ).toBeInTheDocument();
  });

  it("should display an error message if required fields are missing", async () => {
    render(
      <BrowserRouter>
        <RegistrationForm />
      </BrowserRouter>
    );
    fireEvent.submit(screen.getByRole("button", { name: "CREATE ACCOUNT" }));
    expect(
      await screen.findByText("Please fill in all required fields")
    ).toBeInTheDocument();
  });
});
