import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../contexts/UserContext.js";
import Login from "../components/Login.jsx";

describe("Login component", () => {
  it("renders the login form", () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ setUserInfo: jest.fn() }}>
          <Login />
        </UserContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "LOGIN" })).toBeInTheDocument();
    expect(screen.getByText("No account yet?")).toBeInTheDocument();
  });

  it("displays an error message when the user is not found", async () => {
    // Mock API response
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: () => Promise.resolve({ error: "User not found" }),
      status: 404,
    });

    render(
      <BrowserRouter>
        <UserContext.Provider value={{ setUserInfo: jest.fn() }}>
          <Login />
        </UserContext.Provider>
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText("Email address");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByRole("button", { name: "LOGIN" });

    // Fill out and submit the login form
    fireEvent.change(emailInput, { target: { value: "123@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);

    // Wait for the error message to appear
    await screen.findByText("User not found");
  });

  it("redirects to the dashboard when the user is logged in", async () => {
    // Mock API response
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: () =>
        Promise.resolve({
          firstName: "Test",
          surname: "Tester",
          token: "12345",
        }),
      status: 200,
    });

    const setUserInfo = jest.fn();

    render(
      <BrowserRouter>
        <UserContext.Provider value={{ setUserInfo }}>
          <Login />
        </UserContext.Provider>
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText("Email address");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByRole("button", { name: "LOGIN" });

    // Fill out and submit the login form
    fireEvent.change(emailInput, { target: { value: "123@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);

    // Wait for the user to be redirected to the dashboard
    await waitFor(() =>
      expect(setUserInfo).toHaveBeenCalledWith({
        firstName: "Test",
        surname: "Tester",
        userToken: "12345",
      })
    );
  });
});
