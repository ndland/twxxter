import React from "react";
import { RenderResult, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tweet from "./Tweet";

describe("Tweet", () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";
  const tweet = "Hello World";
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Tweet profilePic={imageUrl} content={tweet} />);
  });

  it("should render without crashing", () => {
    const { container } = renderResult;
    expect(container).toBeInTheDocument();
  });

  it("should display the users profile image on the page", () => {
    const img = renderResult.getByAltText("Profile Picture");
    expect(img.src).toContain(encodeURIComponent(imageUrl));
  });

  it("should display the content of the tweet", () => {
    const { container } = renderResult;
    expect(container).toHaveTextContent("Hello World");
  });
});
