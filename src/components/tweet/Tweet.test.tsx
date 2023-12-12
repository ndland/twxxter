import React from "react";
import { RenderResult, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Tweet from "./Tweet";

const MY_FIRST_TWEET = "My First Tweet";
const MY_EDITED_TWEET = "My Edited Tweet";
const user = userEvent.setup();

describe("Tweet", () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Tweet profilePic={imageUrl} username="ndland" />);
  });

  it("should render without crashing", () => {
    const { container } = renderResult;
    expect(container).toBeInTheDocument();
  });

  it("should display the users profile image on the page", () => {
    const img = renderResult.getByAltText("Profile Picture");
    expect(img.src).toContain(encodeURIComponent(imageUrl));
  });

  it("should display the content of the tweet", async () => {
    const user = userEvent.setup();

    await user.click(tweetInput());
    await user.keyboard("Hello World");
    await user.click(tweetButton());

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });

  it(`should display the user's username on the page`, () => {
    const usernameElement = screen.getByLabelText("username");
    expect(usernameElement).toBeInTheDocument();
    expect(usernameElement).toHaveTextContent("ndland");
  });

  /**
   * Skipping this test for now as I'm not sure if a
   * tweet should have a title.
   */
  xit("should display a tweet title", () => {
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

      await user.click(input);
      await user.keyboard("My First Tweet");

      const button = screen.getByText("Tweet");
      await user.click(button);

      expect(screen.getByText("My First Tweet")).toBeInTheDocument();
    });

    it("should not display the tweet if the input is empty", async () => {
      const button = screen.getByText("Tweet");

      await user.click(button);
      const placeholder = screen.getByPlaceholderText("Enter a twxxt");
      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveClass("placeholder:text-red-500");
    });
  });

  describe("liking a twxxt", () => {
    const user = userEvent.setup();

    describe("whern there is a twxxt", () => {
      beforeEach(async () => {
        const input = screen.getByPlaceholderText("What's happening?");
        const button = screen.getByText("Tweet");

        await user.click(input);
        await user.keyboard("My First Tweet");

        await user.click(button);
      });

      it("should display the number of likes if there are any likes on the twxxt", async () => {
        const likeButton = screen.getByLabelText("like");
        await user.click(likeButton);

        const likes = screen.getByLabelText("likes");

        expect(likes).toBeInTheDocument();
        expect(likes).toHaveTextContent("1");
      });

      it(`should not display the likes if the like count = 0`, () => {
        const likes = screen.queryByLabelText("likes");
        expect(likes).not.toBeInTheDocument();
      });

      it(`should 'unlike' a twxxt if the button is clicked more than once`, async () => {
        const likeButton = screen.getByLabelText("like");

        await user.click(likeButton);
        await user.click(likeButton);

        const likes = screen.queryByLabelText("likes");
        expect(likes).not.toBeInTheDocument();
      });
    });

    describe("when there is not a twxxt", () => {
      it(`should only be allowed to like a twxxt if there is a twxxt`, async () => {
        const likeButton = screen.queryByLabelText("like");
        const likes = screen.queryByLabelText("likes");

        expect(likeButton).not.toBeInTheDocument();
        expect(likes).not.toBeInTheDocument();
      });
    });
  });

  describe("editing a tweet", () => {
    it("should allow a user to edit their tweet", async () => {
      await tweet(MY_FIRST_TWEET);

      const twxxt = screen.getByText(MY_FIRST_TWEET);
      expect(twxxt).toBeInTheDocument();

      await user.click(twxxt);

      await tweet(MY_EDITED_TWEET);

      expect(screen.getByText(MY_EDITED_TWEET)).toHaveTextContent(
        MY_EDITED_TWEET,
      );
    });

    it("should reset the color of the placeholder if a user had previously tweeted", async () => {
      await user.click(tweetButton());

      const placeholder = screen.getByPlaceholderText("Enter a twxxt");
      expect(placeholder).toHaveClass("placeholder:text-red-500");

      await tweet(MY_FIRST_TWEET);

      await user.click(screen.getByText(MY_FIRST_TWEET));
      const newPlaceholder = screen.getByPlaceholderText(MY_FIRST_TWEET);

      expect(newPlaceholder).toHaveClass("placeholder:text-slate-400");
    });
  });
});

/**
 * Helper function to get the tweet input field.
 *
 * @returns {HTMLElement} The HTML element of the tweet input field.
 */
const tweetInput = (): HTMLElement => {
  return screen.getByLabelText("tweet input");
};

/**
 * Helper function to get the tweet button.
 *
 * @returns {HTMLElement} The HTML element of the tweet input field.
 */
const tweetButton = (): HTMLElement => {
  return screen.getByRole("button", { name: /tweet/i });
};

/**
 * This asynchronous function simulates a user tweeting a message.
 * It first clicks on the tweet input field, then types the tweet content,
 * and finally clicks the tweet button to send the tweet.
 *
 * @param {string} tweetContent - The content of the tweet to be sent.
 * @returns {Promise<void>} A Promise that resolves when all actions (clicking and typing) are completed.
 */
const tweet = async (tweetContent: string): Promise<void> => {
  await user.click(tweetInput());

  await user.keyboard(tweetContent);

  await user.click(tweetButton());
};
