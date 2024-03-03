import React from "react";
import { render } from "@testing-library/react";
import HidePassword from "@/components/HidePassword";

describe("HidePassword Component", () => {
  test("renders the SVG icon", () => {
    const { getByTestId } = render(<HidePassword />);
    const svgIcon = getByTestId("hide-password-icon");

    expect(svgIcon).toBeInTheDocument();
  });
});
