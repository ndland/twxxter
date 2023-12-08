import Image from "next/image";
import React from "react";

interface TweetProps {
  profilePic: string;
  content: string;
}

const Tweet: React.FC<TweetProps> = ({ profilePic, content }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="relative w-16 h-16 flex-shrink-0">
        <Image
          className="rounded-full h-full w-full object-cover absolute"
          src={profilePic}
          alt="Profile Picture"
          width={100} // note: see https://nextjs.org/docs/app/building-your-application/optimizing/images#remote-images for more info
          height={100}
        />
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Tweet;
