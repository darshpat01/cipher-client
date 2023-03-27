import React from "react";
import SocialCard from "./SocialCard";
import { AiFillLinkedin } from "react-icons/ai";
import EditButton from "../EditButton";
import Heading from "../Fonts/Heading";

function OnTheWeb() {
  return (
    <div>
      <div className="flex py-4">
        <Heading text="On the Web" />
        <div className="ml-auto">
          <EditButton />
        </div>
      </div>
      <div className="flex flex-wrap">
        <SocialCard
          name="LinkedIn"
          link="https://www.linkedin.com/in/kevin-lee-0b0b4b1b9/"
        >
          <AiFillLinkedin size={30} />
        </SocialCard>
        <SocialCard
          name="LinkedIn"
          link="https://www.linkedin.com/in/kevin-lee-0b0b4b1b9/"
        >
          <AiFillLinkedin size={30} />
        </SocialCard>
        <SocialCard
          name="LinkedIn"
          link="https://www.linkedin.com/in/kevin-lee-0b0b4b1b9/"
        >
          <AiFillLinkedin size={30} />
        </SocialCard>
        <SocialCard
          name="LinkedIn"
          link="https://www.linkedin.com/in/kevin-lee-0b0b4b1b9/"
        >
          <AiFillLinkedin size={30} />
        </SocialCard>
        <SocialCard
          name="LinkedIn"
          link="https://www.linkedin.com/in/kevin-lee-0b0b4b1b9/"
        >
          <AiFillLinkedin size={30} />
        </SocialCard>
      </div>
    </div>
  );
}

export default OnTheWeb;
