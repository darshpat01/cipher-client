import React from "react";
import Heading from "../../Fonts/Heading";
import InterestCard from "./InterestCard";
import EditButton from "../../EditButton";

function Interests() {
  return (
    <div className="py-4">
      <div className="flex py-4">
        <Heading text="Interests" />
        <div className="ml-auto">
          <EditButton />
        </div>
      </div>
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
