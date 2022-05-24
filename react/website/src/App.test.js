import { render, screen } from "@testing-library/React";
import App from "./App";

test("renders learn React link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn React/i);
  expect(linkElement).toBeInTheDocument();
});
