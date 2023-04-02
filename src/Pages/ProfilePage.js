import React from "react";
import AboutMe from "../Components/Body/AboutMe";
import CipherMap from "../Components/Body/CipherMap/CipherMap";
import Header from "../Components/Header";
import Interests from "../Components/Body/Interests/Interests";
import OnTheWeb from "../Components/Body/OnTheWeb/OnTheWeb";
import Password from "../Components/Body/Password/Password";
import Professional from "../Components/Body/Professional/Professional";

function ProfilePage() {
  return (
    <div>
      <Header />
      <div className=" px-4 bg-[#f3f5f9]">
        <AboutMe />
        <CipherMap />
        <OnTheWeb />
        <Professional />
        <Password />
        <Interests />
      </div>
    </div>
  );
}

export default ProfilePage;
