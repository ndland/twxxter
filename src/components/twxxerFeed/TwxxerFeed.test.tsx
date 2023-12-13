import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import TwxxerFeed from "./TwxxerFeed";
import Tweet from "../tweet/Tweet";

describe("TwxxerFeed", () => {
  it("should render", () => {
    const { container } = render(<TwxxerFeed tweets={[]} />);

    expect(container).toBeInTheDocument();
  });

  it("renders multiple tweets", () => {
    const tweets = Array(5)
      .fill(0)
      .map((_, i) => (
        <Tweet
          key={i}
          profilePic="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg"
          username={`joshuaswift_${i}`}
        />
      ));
    const { container } = render(<TwxxerFeed tweets={tweets} />);

    expect(container.querySelector(".feed")?.children.length).toBe(5);
  });
});
