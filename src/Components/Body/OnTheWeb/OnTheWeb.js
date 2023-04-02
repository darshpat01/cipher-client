import React from "react";
import SocialCard from "./SocialCard";
import { AiFillLinkedin } from "react-icons/ai";
import EditButton from "../../EditButton";
import Heading from "../../Fonts/Heading";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../../store/auth-context";

function OnTheWeb() {
  const authCtx = React.useContext(AuthContext);
  const [socials, setSocials] = useState([]);
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
        setSocials(response.data.user.socials);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [authCtx.token, authCtx.email]);

  return (
    <div>
      <div className="flex py-4">
        <Heading text="On the Web" />
        <div className="ml-auto">
          <EditButton />
        </div>
      </div>
      <div className="flex flex-wrap">
        <SocialCard name="LinkedIn" link={socials.linkedin}>
          <AiFillLinkedin size={30} />
        </SocialCard>
        <SocialCard name="Github" link={socials.github}>
          <AiFillLinkedin size={30} />
        </SocialCard>
        <SocialCard name="Facebook" link={socials.facebook}>
          <AiFillLinkedin size={30} />
        </SocialCard>
        <SocialCard name="Instagram" link={socials.instagram}>
          <AiFillLinkedin size={30} />
        </SocialCard>
        <SocialCard name="Website" link={socials.website}>
          <AiFillLinkedin size={30} />
        </SocialCard>
      </div>
    </div>
  );
}

export default OnTheWeb;
