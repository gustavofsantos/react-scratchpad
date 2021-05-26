import { render, screen } from "@testing-library/react";
import { Example } from "./example";

describe("Default props", () => {
  it("should render the default component props", () => {
    render(<Example />);

    expect(screen.getByText(Example.defaultProps.text)).toBeInTheDocument();
  });

  it("should override the value from text prop", () => {
    const customText = "Hello";
    render(<Example text={customText} />);

    expect(screen.getByText(customText)).toBeInTheDocument();
  });
});
