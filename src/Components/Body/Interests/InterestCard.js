import React from "react";

function InterestCard({ text }) {
  return (
    <div className="pr-4">
      <div className="bg-orange-100 px-3 py-2 text-center rounded-md">
        <p className="font-bold text-orange-500 text-sm">{text}</p>
      </div>
    </div>
  );
}

export default InterestCard;
