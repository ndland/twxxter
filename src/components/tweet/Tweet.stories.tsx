// Tweet.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import Tweet from "./Tweet";
import { LoremIpsum } from "lorem-ipsum";

const meta: Meta<typeof Tweet> = {
  title: "Components/Tweet",
  component: Tweet,
};

export default meta;
type Story = StoryObj<typeof Tweet>;

export const Default: Story = {
  args: {
    profilePic:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    content: "Hello World",
  },
};

export const LongTweet: Story = {
  args: {
    profilePic:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    content: new LoremIpsum().generateParagraphs(3),
  },
};
