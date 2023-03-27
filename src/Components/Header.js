import React from "react";

function Header() {
  return (
    <>
      <div className="bg-orange-500 text-white py-4 px-6">
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden w-20 h-20">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEJwJ6kaM-4iuwgIercDw31SyKiknthPnA_MYgNm4mQ&s"
              alt="logo"
            ></img>
          </div>
          <div className="pl-2">
            <p>Hello,</p>
            <p>Test User</p>
            <p>testuser@gmail.com</p>
          </div>
          <div className="ml-auto">
            <p>10 Followers</p>
            <div>
              <button>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
