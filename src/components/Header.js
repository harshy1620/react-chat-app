import React from "react";
import { GrGroup } from "react-icons/gr";

const Header = () => {
  return (
    <div className="header">
      <div className="left-side">
        <p className="heading-title">Introductions</p>
        <p className="heading-subtitle">Let's brainstorm together! </p>
      </div>

      <div className="right-side">
        <GrGroup className="group-icon" />
      </div>
    </div>
  );
};

export default Header;
