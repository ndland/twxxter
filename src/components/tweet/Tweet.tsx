"use client";

import Image from "next/image";
import React from "react";

interface TweetProps {
  profilePic: string;
  username: string;
  title: string;
}

const Tweet: React.FC<TweetProps> = ({ profilePic, username, title }) => {
  const [input, setInput] = React.useState<string | undefined>(undefined);
  const [tweet, setTweet] = React.useState<string | undefined>(undefined);
  const [placeholder, setPlaceholder] = React.useState<string | undefined>(
    "What's happening?",
  );
  const [placeholderColor, setPlaceholderColor] = React.useState<string>(
    "placeholder:text-slate-400",
  );

  const handleTweet = () => {
    if (!input) {
      setPlaceholder("Enter a twxxt");
      setPlaceholderColor("placeholder:text-red-500");
    }
    setTweet(input);
  };

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
          className="text-indigo-500 font-semibold md:text-lg py-2"
        >
          @{username}
        </div>
        <div aria-label="title" className="dark:text-white font-semibold">
          {title}
        </div>
        {tweet ? (
          <div className="dark:text-white py-4">{tweet}</div>
        ) : (
          <>
            <input
              type="text"
              placeholder={placeholder}
              value={tweet}
              onChange={(e) => setInput(e.target.value)}
              className={`w-full my-2 p-2 rounded-md dark:bg-slate-800 dark:text-white dark:border-2 dark:border-indigo-800 ${placeholderColor}`}
            />
            <div className="flex justify-end">
              <button
                onClick={handleTweet}
                className="bg-indigo-500 text-white rounded-full px-4 py-2 mt-2"
              >
                Tweet
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tweet;
