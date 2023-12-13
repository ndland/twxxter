import React from "react";
import Tweet from "../tweet/Tweet";

interface TwxxterFeedProps {
  tweets: React.ReactElement[];
}

const TwxxterFeed: React.FC<TwxxterFeedProps> = ({ tweets }) => {
  return (
    <div className="feed">
      {tweets.map((tweet, index) => (
        <React.Fragment key={index}>{tweet}</React.Fragment>
      ))}
    </div>
  );
};

export default TwxxterFeed;
