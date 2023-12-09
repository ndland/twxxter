import Image from "next/image";
import React from "react";

interface TweetProps {
  profilePic: string;
  content: string;
  username: string;
  title: string;
}

const Tweet: React.FC<TweetProps> = ({
  profilePic,
  content,
  username,
  title,
}) => {
  return (
    <div className="dark:bg-slate-800 mx-auto m-4 max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl p-4 flex flex-row space-x-8">
      <div className="relative w-16 h-16 flex-shrink-0">
        <div>
          <Image
            className="rounded-full h-full w-full object-cover absolute"
            src={profilePic}
            alt="Profile Picture"
            width={100} // note: see https://nextjs.org/docs/app/building-your-application/optimizing/images#remote-images for more info
            height={100}
          />
        </div>
      </div>
      <div className="flex-grow">
        <div
          aria-label="username"
          className="text-indigo-500 font-semibold md:text-lg"
        >
          @{username}
        </div>
        <div aria-label="title" className="dark:text-white font-semibold">
          {title}
        </div>
        <div className="dark:text-white text-sm">{content}</div>
      </div>
    </div>
  );
};

export default Tweet;
