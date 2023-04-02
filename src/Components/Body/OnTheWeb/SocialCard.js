import React, { Children } from "react";
import { useState } from "react";

function SocialCard({ link, name, editing, onChange, children }) {
  const [links, setLinks] = useState(link);

  return (
    <div className="p-3">
      <h1>{name}</h1>
      <div className="flex bg-white items-center p-2 rounded-md text=[#222831]">
        <div className="pr-2">{children}</div>
        <div>
          {/* <p>{link}</p> */}
          {/* Input
           */}
          <input
            className=" focus:outline-none"
            type="text"
            value={link}
            isReadOnly={!editing}
            onChange={editing ? onChange : null}
          />
        </div>
      </div>
    </div>
  );
}

export default SocialCard;
