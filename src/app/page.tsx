import React from "react";
import Tweet from "../components/tweet/Tweet";
import TwxxterFeed from "@/components/twxxterFeed/TwxxterFeed";

export default function Home() {
  const tweets = Array(5)
    .fill(0)
    .map((_, i) => (
      <Tweet
        key={i}
        profilePic="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        username={`joshuaswift_${i}`}
      />
    ));
  return (
    <div className="w-full h-full bg-slate-800">
      <TwxxterFeed tweets={tweets} />
      <Tweet
        username="ndland"
        profilePic="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
      />
    </div>
  );
}
