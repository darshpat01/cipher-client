import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import AuthContext from "../../../store/auth-context";
import axios from "axios";

function PasswordModal({ onClick, setEdit }) {
  const authCtx = React.useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  const onSaveHandler = () => {
    console.log(oldPassword, newPassword);
    let data = JSON.stringify({
      email: `${authCtx.email}`,
      password: oldPassword,
      newPassword: newPassword,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3009/changePassword",
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    setEdit(false);
    onClose();
  };

  React.useEffect(() => {
    if (onClick) {
      onOpen();
    }
  }, [onClick, onOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Old Password</FormLabel>
              <Input
                placeholder="Old Password"
                type="password"
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>New Password</FormLabel>
              <Input
                placeholder="New Password"
                type="password"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onSaveHandler}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PasswordModal;
