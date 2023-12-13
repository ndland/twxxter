// Tweet.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import TwxxertFeed from "./TwxxerFeed";
import Tweet from "../tweet/Tweet";

const meta: Meta<typeof TwxxertFeed> = {
  title: "Components/TwxxerFeed",
  component: TwxxertFeed,
};

export default meta;
type Story = StoryObj<typeof TwxxertFeed>;

export const Default: Story = {
  args: {
    tweets: Array(5)
      .fill(0)
      .map((_, i) => (
        <Tweet
          key={i}
          profilePic="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
          username={`joshuaswift_${i}`}
        />
      )),
  },
};
