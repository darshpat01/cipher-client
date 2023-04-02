import React from "react";
import SocialCard from "./SocialCard";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import EditButton from "../../EditButton";
import Heading from "../../Fonts/Heading";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../../store/auth-context";

function OnTheWeb() {
  const authCtx = React.useContext(AuthContext);
  const [isEditing, setIsEditing] = React.useState(false);
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");

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
        setLinkedin(response.data.user.socials.linkedin);
        setGithub(response.data.user.socials.github);
        setWebsite(response.data.user.socials.website);
        setInstagram(response.data.user.socials.instagram);
        setFacebook(response.data.user.socials.facebook);
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
        socials: {
          linkedin: linkedin,
          github: github,
          website: website,
          instagram: instagram,
          facebook: facebook,
        },
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
          // console.log(JSON.stringify(response.data));
          console.log(response.data.user.socials);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div className="flex py-4">
        <Heading text="On the Web" />
        <div className="ml-auto">
          <EditButton
            text={!isEditing ? "edit" : "save"}
            onClick={editHandler}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <SocialCard
          name="LinkedIn"
          link={linkedin}
          onChange={(e) => {
            setLinkedin(e.target.value);
          }}
          editing={isEditing}
        >
          <AiFillLinkedin size={30} />
        </SocialCard>
        <SocialCard
          name="Github"
          link={github}
          onChange={(e) => {
            setGithub(e.target.value);
          }}
          editing={isEditing}
        >
          <AiFillGithub size={30} />
        </SocialCard>
        <SocialCard
          name="Facebook"
          link={facebook}
          onChange={(e) => {
            setFacebook(e.target.value);
          }}
          editing={isEditing}
        >
          <AiFillFacebook size={30} />
        </SocialCard>
        <SocialCard
          name="Instagram"
          link={instagram}
          onChange={(e) => {
            setInstagram(e.target.value);
          }}
          editing={isEditing}
        >
          <AiFillInstagram size={30} />
        </SocialCard>
        <SocialCard
          name="Website"
          link={website}
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
          editing={isEditing}
        >
          <BsGlobe size={30} />
        </SocialCard>
      </div>
    </div>
  );
}

export default OnTheWeb;
