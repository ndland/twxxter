import React from "react";
import Tweet from "../tweet/Tweet";

interface TwxxerFeedProps {
  tweets: React.ReactElement[];
}

const TwxxerFeed: React.FC<TwxxerFeedProps> = ({ tweets }) => {
  return (
    <div className="feed">
      {tweets.map((tweet, index) => (
        <React.Fragment key={index}>{tweet}</React.Fragment>
      ))}
    </div>
  );
};

export default TwxxerFeed;
