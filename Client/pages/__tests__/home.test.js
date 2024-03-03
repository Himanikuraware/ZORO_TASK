import React from "react";
import { render } from "@testing-library/react";
import HomePage from "@/pages/home";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Home Page", () => {
  test("renders login component", () => {
    useRouter.mockImplementation(() => ({
      pathname: "/",
    }));

    const { getByTestId } = render(<HomePage />);
    const homeComponent = getByTestId("home-component");
    expect(homeComponent).toBeInTheDocument();
  });
});
