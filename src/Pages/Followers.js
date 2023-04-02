import React from "react";
import FollowerCard from "../Components/Followers/FollowerCard";
import Heading from "../Components/Fonts/Heading";

function Followers() {
  return (
    <>
      <div className="h-screen bg-[#f3f5f9]">
        <div className="p-4">
          <Heading text="Users following you" />
          <div className="flex flex-wrap pt-4">
            <FollowerCard />
            <FollowerCard />
            <FollowerCard />
            <FollowerCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Followers;
