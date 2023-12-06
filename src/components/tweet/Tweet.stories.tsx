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
  profilePic:
    "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
};
