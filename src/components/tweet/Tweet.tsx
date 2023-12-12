"use client";

import { faThumbsUp as outlineThumb } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as solidThumb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

interface TweetProps {
  profilePic: string;
  username: string;
}

const Tweet: React.FC<TweetProps> = ({ profilePic, username }) => {
  const placeHolderSlateGray400 = "placeholder:text-slate-400";
  const [input, setInput] = React.useState<string | undefined>(undefined);
  const [tweet, setTweet] = React.useState<string | undefined>(undefined);
  const [placeholder, setPlaceholder] = React.useState<string | undefined>(
    "What's happening?",
  );
  const [placeholderColor, setPlaceholderColor] = React.useState<string>(
    placeHolderSlateGray400,
  );
  const [likes, setLikes] = React.useState<number>(0);
  const [hasLiked, setHasLiked] = React.useState<boolean>(false);
  const [tweetTimestamp, setTweetTimestamp] = React.useState<
    string | undefined
  >(undefined);
  const [edited, setEdited] = React.useState<boolean>(false);

  const handleTweet = () => {
    if (!input) {
      setPlaceholder("Enter a twxxt");
      setPlaceholderColor("placeholder:text-red-500");
    }
    setTweet(input);
    setTweetTimestamp(new Date().toLocaleString());
  };

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
      return;
    }
    if (input && !hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleTwxxtClick = () => {
    setEdited(true);
    setPlaceholderColor(placeHolderSlateGray400);
    setPlaceholder(tweet);
    setTweet(undefined);
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
        {tweet ? (
          <>
            <div
              onClick={handleTwxxtClick}
              className="dark:text-white py-4 hover:cursor-pointer"
            >
              {tweet}
            </div>
            <div className="flex justify-between">
              <div className="flex justify-normal space-x-2 items-center">
                {likes === 0 ? (
                  <FontAwesomeIcon
                    aria-label="like"
                    onClick={handleLike}
                    className="text-white"
                    size="xl"
                    icon={outlineThumb}
                  />
                ) : (
                  <FontAwesomeIcon
                    aria-label="like"
                    onClick={handleLike}
                    className="text-white"
                    size="xl"
                    icon={solidThumb}
                  />
                )}

                {likes !== 0 && (
                  <div aria-label="likes" className="text-gray-400">
                    Likes: {likes}
                  </div>
                )}
              </div>

              {tweetTimestamp && (
                <div aria-label="timestamp" className="text-slate-400 text-sm">
                  {edited && <div>Edited: </div>}
                  {tweetTimestamp}
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <input
              type="text"
              aria-label="tweet input"
              placeholder={placeholder}
              value={tweet}
              onChange={(e) => setInput(e.target.value)}
              className={`w-full my-2 p-2 rounded-md dark:bg-slate-800 dark:text-white dark:border-2 dark:border-indigo-800 ${placeholderColor}`}
            />
            <div className="flex justify-end items-center">
              <button
                onClick={handleTweet}
                className="bg-indigo-500 text-white rounded-full px-4 py-2"
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
