import React from "react";
import { Textarea } from "@chakra-ui/react";
import EditButton from "../EditButton";
import Heading from "../Fonts/Heading";

function AboutMe() {
  return (
    <div>
      <div className="flex py-4">
        <Heading text="About Me" />
        <div className="ml-auto">
          <EditButton />
        </div>
      </div>
      <div className="bg-white">
        <Textarea placeholder="Add something about you" />
      </div>
    </div>
  );
}

export default AboutMe;
