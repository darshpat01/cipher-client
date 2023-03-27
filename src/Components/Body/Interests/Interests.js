import React from "react";
import InterestCard from "./InterestCard";

function Interests() {
  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold">Interests</h1>
      <div className="flex py-4 flex-wrap">
        <InterestCard text="Machine learning" />
        <InterestCard text="Machine learning" />
        <InterestCard text="Machine learning" />
        <InterestCard text="Machine learning" />
        <InterestCard text="Machine learning" />
      </div>
    </div>
  );
}

export default Interests;
