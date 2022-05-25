import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

describe("TodoFooter component", () => {
  test("Should have paragraph text 1 task left", () => {
    render(
      <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={1} />
      </BrowserRouter>
    );
    const paragraph = screen.getByText(/1 task left/i)
    expect(paragraph).toBeInTheDocument()
  });
   test("Should have paragraph text 5 tasks left", () => {
     render(
       <BrowserRouter>
         <TodoFooter numberOfIncompleteTasks={5} />
       </BrowserRouter>
     );
     const paragraph = screen.getByText(/5 tasks left/i);
     expect(paragraph).toBeInTheDocument();
   });
});
