import React from "react";
import { Textarea } from "@chakra-ui/react";
import EditButton from "../EditButton";
import Heading from "../Fonts/Heading";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import { useEffect } from "react";

function AboutMe() {
  const authCtx = React.useContext(AuthContext);

  const [aboutMe, setAboutMe] = React.useState("");
  const [isEditing, setIsEditing] = React.useState(false);

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
        setAboutMe(response.data.user.about);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [authCtx.token, authCtx.email]);

  return (
    <div>
      <div className="flex py-4">
        <Heading text="About Me" />
        <div className="ml-auto">
          <EditButton />
        </div>
      </div>
      <div className="bg-white">
        <Textarea
          placeholder="Add something about you"
          value={aboutMe}
          readOnly={!isEditing}
        />
      </div>
    </div>
  );
}

export default AboutMe;
