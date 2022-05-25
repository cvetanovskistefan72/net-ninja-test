import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

describe("AddInput component", () => {
  test("Input should have value 'Make bed' ", () => {
    render(<AddInput setTodos={() => {}} todos={[]} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    fireEvent.change(inputElement, { target: { value: "Make bed" } });
    expect(inputElement).toHaveValue("Make bed");
  });
  test("Input should have value 'Make bed' ", () => {
    render(<AddInput setTodos={() => {}} todos={[]} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    const buttonElement = screen.getByRole("button", { name: "Add" });
    fireEvent.change(inputElement, { target: { value: "Make bed" } });
    expect(inputElement).toHaveValue("Make bed");
    fireEvent.click(buttonElement);
    expect(inputElement).toHaveValue("");
  });
});
