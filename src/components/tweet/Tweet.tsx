import Image from "next/image";
import React from "react";

interface TweetProps {
  profilePic: string;
}

const Tweet: React.FC<TweetProps> = ({ profilePic }) => {
  return (
    <div className="relative w-16 h-16">
      <Image
        className="rounded-full"
        src={profilePic}
        alt="Profile Picture"
        fill
      />
    </div>
  );
};

export default Tweet;
