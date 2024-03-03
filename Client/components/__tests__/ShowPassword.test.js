import React from "react";
import { render } from "@testing-library/react";
import ShowPassword from "@/components/ShowPassword";

describe("ShowPassword Component", () => {
  test("renders the SVG icon", () => {
    const { getByTestId } = render(<ShowPassword />);
    const svgIcon = getByTestId("show-password-icon");

    expect(svgIcon).toBeInTheDocument();
  });
});
