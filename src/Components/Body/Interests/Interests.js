import React from "react";
import Heading from "../../Fonts/Heading";
import InterestCard from "./InterestCard";
import EditButton from "../../EditButton";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../../store/auth-context";

function Interests() {
  const authCtx = useContext(AuthContext);
  const [interests, setInterests] = useState([]);
  useEffect(() => {
    let data = JSON.stringify({
      email: `${authCtx.email}`,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3009/getUserDetails",
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.data.user.interests);
        setInterests(response.data.user.interests);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [authCtx.token, authCtx.email]);
  return (
    <div className="py-4">
      <div className="flex py-4">
        <Heading text="Interests" />
        <div className="ml-auto">
          <EditButton />
        </div>
      </div>
      <div className="flex py-4 flex-wrap">
        {interests.map((interest) => (
          <InterestCard text={interest} />
        ))}
      </div>
    </div>
  );
}

export default Interests;
