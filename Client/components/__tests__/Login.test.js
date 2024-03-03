import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "@/components/Login";

jest.mock("next/router", () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

describe("Login Component", () => {
  test("renders login form with email and password input fields", () => {
    const { getByPlaceholderText } = render(<Login />);
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("shows password when ShowPassword button is clicked", async () => {
    const { getByTestId, getByPlaceholderText } = render(<Login />);

    const emailInput = getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    const hidePasswordButton = getByTestId("hide-password-button");
    fireEvent.click(hidePasswordButton);

    const passwordInputElement = getByPlaceholderText("Password");
    expect(passwordInputElement.type).toBe("text");

    const showPasswordButton = getByTestId("show-password-button");
    fireEvent.click(showPasswordButton);

    await waitFor(() => {
      expect(passwordInputElement.type).toBe("password");
    });
  });

  test("submits form with valid email and password", async () => {
    const { getByPlaceholderText, getByTestId } = render(<Login />);

    const emailInput = getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    const form = getByTestId("login-form");
    fireEvent.submit(form);
  });
});
