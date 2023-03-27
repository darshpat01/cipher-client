import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function EditButton({ className, onClick, children }) {
  return (
    <div className={className}>
      <Button colorScheme="orange" onClick={onClick}>
        Edit
      </Button>
    </div>
  );
}

export default EditButton;
