import React from "react";
import { render } from "@testing-library/react";
import Home from "@/pages/index";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Home Page", () => {
  test("renders login component", () => {
    useRouter.mockImplementation(() => ({
      pathname: "/",
    }));

    const { getByTestId } = render(<Home />);
    const loginComponent = getByTestId("login-component");
    expect(loginComponent).toBeInTheDocument();
  });
});
