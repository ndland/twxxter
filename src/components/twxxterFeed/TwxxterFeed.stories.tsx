// Tweet.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import TwxxterFeed from "./TwxxterFeed";
import Tweet from "../tweet/Tweet";

const meta: Meta<typeof TwxxterFeed> = {
  title: "Components/TwxxterFeed",
  component: TwxxterFeed,
};

export default meta;
type Story = StoryObj<typeof TwxxterFeed>;

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
