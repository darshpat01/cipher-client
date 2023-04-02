import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function EditButton({ className, onClick, text, children }) {
  return (
    <div className={className}>
      <Button colorScheme="orange" onClick={onClick}>
        <p className="uppercase">{text}</p>
      </Button>
    </div>
  );
}

export default EditButton;
