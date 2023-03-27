import React from "react";
import { Select } from "@chakra-ui/react";
import EditButton from "../../EditButton";
import Heading from "../../Fonts/Heading";

function Professional() {
  return (
    <div className="py-4">
      <div className="flex py-4">
        <Heading text="Professional Information" />
        <div className="ml-auto">
          <EditButton />
        </div>
      </div>
      <div className="flex">
        <div className="basis-1/2 pr-2">
          <label>Highest education</label>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
        <div className="basis-1/2 pl-2">
          <label>What do you do currently?</label>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default Professional;
