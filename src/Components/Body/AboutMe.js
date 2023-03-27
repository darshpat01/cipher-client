import React from "react";
import { Textarea } from "@chakra-ui/react";
import EditButton from "../EditButton";

function AboutMe() {
  return (
    <div>
      <div className="flex py-4">
        <h1>About Me</h1>
        <div className="ml-auto">
          <EditButton />
        </div>
      </div>

      <Textarea placeholder="Add something about you" />
    </div>
  );
}

export default AboutMe;
