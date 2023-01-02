import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import App from "./App";

describe("App test", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("Renders the Header component", () => {
    expect(screen.getBytext("Emoji Search")).toBeInTheDocument();
    const images = screen.getAllByRole("img");
    expect(images[0]).toHaveAccessibleName("grin-cat");
    expect(images[1]).toHaveAccessibleName("grinning-cat");
  });

  test("the emoji list is rendered successfully when the app is first opened", () => {
    expect(screen.getAllByText("Click to copy emoji")).toHaveLength(20);
  });

  test("the emoji list is rerendered according to that filter", () => {
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "snow" } });
    expect(screen.getAllByText(/snow/i)).toHaveLength(6);
  });

  test("when clicking any emoji on the list the relevant emoji is copied", async () => {
    const emoji = screen.getBytext("100");
    userEvent.click(emoji);

    const text = "100";
    userEvent.paste(emoji, text);
    expect(emoji).toHaveTextContent(text);
  });
});
