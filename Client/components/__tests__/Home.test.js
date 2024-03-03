import React from "react";
import { render } from "@testing-library/react";
import Home from "@/components/Home";

describe("Home Component", () => {
  test("renders the header with correct text", () => {
    const { getByTestId, getByText } = render(<Home />);

    const homeComponent = getByTestId("home-component");
    expect(homeComponent).toBeInTheDocument();

    const logoIcon = getByTestId("logo-icon");
    expect(logoIcon).toBeInTheDocument();

    const welcomeText = getByText("Welcome to Zoro");
    expect(welcomeText).toBeInTheDocument();

    const aboutLink = getByText("About Us");
    const contactLink = getByText("Contact Us");
    const logoutLink = getByText("Logout");
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
  });

  test("renders the main content with correct text", () => {
    const { getByText } = render(<Home />);

    const missionHeader = getByText("Our Mission");
    expect(missionHeader).toBeInTheDocument();
  });

  test("renders the footer with correct text", () => {
    const { getByText } = render(<Home />);

    const copyrightText = getByText(
      "© 2024 Your Website. All Rights Reserved."
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
