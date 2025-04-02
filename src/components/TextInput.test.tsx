import  userEvent  from "@testing-library/user-event";
import TextInput from "./TextInput";
import { render, screen } from "@testing-library/react";

test("TextInput Component Test", async () => {
  const user = userEvent.setup();
  render(<TextInput />);

  const textElement = screen.getByText("Entered text:");
  expect(textElement).toBeInTheDocument();

  const inputElement = screen.getByLabelText("Input Text");
  await user.type(inputElement, "Hello World");
  expect(screen.getByText("Entered text: Hello World")).toBeInTheDocument();
});