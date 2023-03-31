import { React, useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const formItemsStyle = "pb-4 w-[300px] text-black";

function Register() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleEmail = (event) => setEmail(event.target.value);
  const handleName = (event) => setName(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3009/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        // check if response is 200
        if (res.status === 200) {
          // navigate to dashboard
          console.log("Success");
          localStorage.setItem("token", res.token);
          localStorage.setItem("userName", res.user.name);
          localStorage.setItem("userEmail", res.user.email);
          navigate("/profile");
        } else {
          console.log("Unable to Register");
        }
      })
      .catch((err) => {
        alert("Invalid Details");
      });
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[#f3f5f9]">
        <div className="flex-col text-center">
          <form onSubmit={onSubmitHandler}>
            <div className={formItemsStyle}>
              <Input placeholder="Name" onChange={handleName} />
            </div>
            <div className={formItemsStyle}>
              <Input placeholder="Email" onChange={handleEmail} />
            </div>
            <div className={formItemsStyle}>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={handlePassword}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? (
                      <div className="text-black">
                        <BiHide />
                      </div>
                    ) : (
                      <div className="text-black">
                        <BiHide />
                      </div>
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>
            <div>
              <div className="pb-2">
                <Button colorScheme="orange" type="submit">
                  Sign Up
                </Button>
              </div>
              <div className="text-orange-500 font-semibold hover:underline">
                <Link to="/login">
                  <p>Go to SignIn</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
