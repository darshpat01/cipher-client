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
        setAboutMe(response.data.user.about);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [authCtx.token, authCtx.email]);

  const editHandler = () => {
    setIsEditing((prevState) => !prevState);
    if (isEditing) {
      let data = JSON.stringify({
        email: `${authCtx.email}`,
        about: aboutMe,
      });

      let config = {
        method: "patch",
        maxBodyLength: Infinity,
        url: "https://cipher-7phw.onrender.com/updateUser",
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div className="flex py-4">
        <Heading text="About Me" />
        <div className="ml-auto">
          <EditButton
            text={!isEditing ? "edit" : "save"}
            onClick={editHandler}
          />
        </div>
      </div>
      <div className="bg-white">
        <Textarea
          placeholder="Add something about you"
          value={aboutMe}
          readOnly={!isEditing}
          onChange={(e) => setAboutMe(e.target.value)}
        />
      </div>
    </div>
  );
}

export default AboutMe;
