import React from "react";

function FollowerCard() {
  return (
    <>
      <div className="flex-col p-4 bg-slate-500 mx-2 rounded-md text-white">
        <div className="pb-2 px-5 justify-items-center">
          <img
            className="rounded-full h-20 w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEJwJ6kaM-4iuwgIercDw31SyKiknthPnA_MYgNm4mQ&s"
            alt="logo"
          ></img>
        </div>
        <p className="text-sm">Name</p>
        <p className="text-sm">Email</p>
        <p className="text-sm">Followers</p>
      </div>
    </>
  );
}

export default FollowerCard;
