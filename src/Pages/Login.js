import { React, useState, useContext } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../store/auth-context";

const formItemsStyle = "pb-4 w-[300px] text-black";

function Login() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://cipher-7phw.onrender.com/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        // check if response is 200
        if (res.status === 200) {
          // navigate to dashboard
          console.log("Success");
          console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userName", res.data.user.name);
          localStorage.setItem("userEmail", res.data.user.email);
          authCtx.login(res.data.token);

          navigate("/profile");
        } else {
          console.log("Unable to Login");
        }
      })
      .catch((err) => {
        alert("Invalid Credentials");
      });
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[#f3f5f9]">
        <div className="flex-col text-center">
          <form onSubmit={onSubmitHandler}>
            <div className={formItemsStyle}>
              <Input type="email" placeholder="Email" onChange={handleEmail} />
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
            <div className={formItemsStyle}>
              <Button type="submit" colorScheme="orange">
                Login
              </Button>
            </div>
            <div className="text-blue-400 font-semibold hover:underline">
              <Link to="/register" className="text-orange-500">
                <p>Register</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
