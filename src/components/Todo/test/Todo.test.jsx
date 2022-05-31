import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const addTasks = (tasks) => {
  const inputElement = screen.getByPlaceholderText("Add a new task here...");
  const buttonElement = screen.getByRole("button", { name: "Add" });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};
describe("Todo component", () => {
  test("Test if submited value is shown", () => {
    render(
      <BrowserRouter>
        <Todo />
      </BrowserRouter>
    );
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    const buttonElement = screen.getByRole("button", { name: "Add" });
    fireEvent.change(inputElement, { target: { value: "Go to store" } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText("Go to store");
    expect(divElement).toBeInTheDocument();
  });
  test("test if submited values have same length", () => {
    render(
      <BrowserRouter>
        <Todo />
      </BrowserRouter>
    );
    addTasks(["Pet my cat", "Wash my hands", "Go to sleep"]);
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(3);
  });
});
