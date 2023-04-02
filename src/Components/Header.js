import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";

function Header() {
  const authCtx = useContext(AuthContext);
  const [dp, setDp] = React.useState("");
  useEffect(() => {
    let data = JSON.stringify({
      email: `${authCtx.email}`,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://cipher-7phw.onrender.com/getUserDetails",
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDp(response.data.user.profilePicture);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [authCtx.token, authCtx.email]);

  const logout = () => {
    authCtx.logout();
  };
  return (
    <>
      <div className="bg-orange-500 text-white py-4 px-6">
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden w-20 h-20">
            <img src={dp} alt="logo"></img>
          </div>
          <div className="pl-2">
            <p>Hello,</p>
            <p className="capitalize">{authCtx.name}</p>
            <p>{authCtx.email}</p>
          </div>
          <div className="ml-auto">
            <Link to="/followers">10 Followers</Link>
            <div>
              <Link to="/login" onClick={logout}>
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
