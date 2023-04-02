import React from "react";
import Heading from "../../Fonts/Heading";
import EditButton from "../../EditButton";
import { Input } from "@chakra-ui/react";
import PasswordModal from "./PasswordModal";

function Password() {
  const [isEditing, setIsEditing] = React.useState(false);

  const onClickHandler = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex py-4">
        <Heading text="Password and Security" />
        <div className="ml-auto">
          <EditButton
            text={!isEditing ? "edit" : "save"}
            onClick={onClickHandler}
          />
          <PasswordModal onClick={isEditing} setEdit={setIsEditing} />
        </div>
      </div>
      <div>
        <Input type="password" value="................" />
      </div>
    </>
  );
}

export default Password;
