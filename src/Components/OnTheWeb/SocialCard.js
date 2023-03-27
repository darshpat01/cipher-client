import React, { Children } from "react";

function SocialCard({ link, name, children }) {
  return (
    <div className="p-3">
      <h1>{name}</h1>
      <div className="flex bg-orange-500 items-center p-2 rounded-md">
        <div className="pr-2">{children}</div>
        <div>
          <p>{link}</p>
        </div>
      </div>
    </div>
  );
}

export default SocialCard;
