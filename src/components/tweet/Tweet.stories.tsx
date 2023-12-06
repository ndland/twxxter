// Tweet.stories.tsx
import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Tweet from "./Tweet";

export default {
  title: "Components/Tweet",
  component: Tweet,
} as Meta;

const Template: Story<{ message: string }> = (args) => <Tweet {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Hello, world!",
};
