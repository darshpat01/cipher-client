import React from "react";
import Heading from "../../Fonts/Heading";
import EditButton from "../../EditButton";
import { Input } from "@chakra-ui/react";

function Password() {
  return (
    <>
      <div className="flex py-4">
        <Heading text="Password and Security" />
        <div className="ml-auto">
          <EditButton />
        </div>
      </div>
      <div>
        <Input type="password" value="................" />
      </div>
    </>
  );
}

export default Password;
