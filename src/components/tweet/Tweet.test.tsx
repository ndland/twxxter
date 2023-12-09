import React from "react";
import { RenderResult, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Tweet from "./Tweet";

describe("Tweet", () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";
  const tweet = "Hello World";
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <Tweet profilePic={imageUrl} username="ndland" title="Tweet Title" />,
    );
  });

  it("should render without crashing", () => {
    const { container } = renderResult;
    expect(container).toBeInTheDocument();
  });

  it("should display the users profile image on the page", () => {
    const img = renderResult.getByAltText("Profile Picture");
    expect(img.src).toContain(encodeURIComponent(imageUrl));
  });

  /* Skip this test for now, as we're working on the
   * input that will become the content */
  xit("should display the content of the tweet", () => {
    const { container } = renderResult;
    expect(container).toHaveTextContent("Hello World");
  });

  it(`should display the user's username on the page`, () => {
    const usernameElement = screen.getByLabelText("username");
    expect(usernameElement).toBeInTheDocument();
    expect(usernameElement).toHaveTextContent("ndland");
  });

  it("should display a tweet title", () => {
    const title = screen.getByLabelText("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Tweet Title");
  });

  it('should have a input with the placeholder "What\'s happening?"', () => {
    const input = screen.getByPlaceholderText("What's happening?");
    expect(input).toBeInTheDocument();
  });

  it("should have a button with the text Tweet", () => {
    const button = screen.getByText("Tweet");
    expect(button).toBeInTheDocument();
  });

  describe('when the user clicks the "Tweet" button', () => {
    const user = userEvent.setup();

    it(`should display the tweet after clicking the 'Tweet' button `, async () => {
      const input = screen.getByPlaceholderText("What's happening?");
      const button = screen.getByText("Tweet");

      await user.click(input);
      await user.keyboard("My First Tweet");

      screen.debug(input);

      await user.click(button);

      expect(screen.getByText("My First Tweet")).toBeInTheDocument();
    });
  });
});
