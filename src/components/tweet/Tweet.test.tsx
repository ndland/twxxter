import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tweet from "./Tweet";

describe("Tweet", () => {
  it("should render without crashing", () => {
    const { container } = render(<Tweet />);
    expect(container).toBeInTheDocument();
  });
});
