import { render, screen, cleanup } from "@testing-library/react";
import Navbar from "../Navbar";

test("nav should renders", () => {
  render(<Navbar />);
  const navElem = screen.getByTestId("nav");
  expect(navElem).toBeInTheDocument();
});
