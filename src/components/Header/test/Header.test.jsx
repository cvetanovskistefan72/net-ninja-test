import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header component", () => {
  test("Should render text from props", () => {
    render(<Header title="Folowers" />);
    const headerTitle = screen.getByText("Folowers");
    expect(headerTitle.textContent).toEqual("Folowers");
  });
});
