import React from "react";
import { Select } from "@chakra-ui/react";
import EditButton from "../../EditButton";
import Heading from "../../Fonts/Heading";
import { useEffect, useContext, useState } from "react";
import AuthContext from "../../../store/auth-context";
import axios from "axios";

function Professional() {
  const authCtx = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const editHandler = () => {
    setIsEditing((prevState) => !prevState);
  };

  const [highestEducation, setHighestEducation] = useState("");
  const [occupation, setOccupation] = useState("");
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
        console.log(response.data.user.highestEducation);
        setHighestEducation(response.data.user.highestEducation);
        setOccupation(response.data.user.occupation);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [authCtx.token, authCtx.email]);

  return (
    <div className="py-4">
      <div className="flex py-4">
        <Heading text="Professional Information" />
        <div className="ml-auto">
          <EditButton
            text={!isEditing ? "edit" : "save"}
            onClick={editHandler}
          />
        </div>
      </div>
      <div className="flex">
        <div className="basis-1/2 pr-2">
          <label>Highest education</label>
          <Select
            placeholder={highestEducation}
            value={highestEducation}
            isReadOnly={true}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
        <div className="basis-1/2 pl-2">
          <label>What do you do currently?</label>
          <Select placeholder={occupation} value={occupation} isReadOnly={true}>
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
