import React, { useState } from "react";
import "./login.css";
import { BiHide, BiShow } from "react-icons/bi";
import closed from "./assets/hide.gif";
import open from "./assets/watching.gif";
import peaking from "./assets/monkey-peaking.gif";

export default function Login() {
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setShow((show) => !show);
  };

  const changeToHide = () => {
    setNum(num => num=2)
  }

  const changeToShow = () => {
    setNum(num => num=0)
  }

  const changeToPeaking =() => {
    setNum(num => num=1)
  }
  
  

  return (
    <div className="main-container">
      <h1>Login</h1>

      <div className="main-img">

        {num === 0 ? (
          <img src={open} alt="" className="show-img" />
        ) : num === 1 ? (
          <img src={peaking} alt="" className="peak-img" />
        ) : (
          <img src={closed} alt="" className="hide-img" />
        )}

      </div>
      
      <input type="text" placeholder="Username" onClick={() => {changeToShow(); setShow(false); }} className="username" />
      <div className="password-container">
        <input
          type={show ? "text" : "password"}
          name="pass"
          id=""
          className="pass"
          placeholder="Password"
          onChange={() => changeToHide()}
        />

        {show ? (
          <BiShow onClick={() => {handleClick(); changeToHide()}} className="showIcon" />
        ) : (
          <BiHide onClick={() => {handleClick(); changeToPeaking() }} className="showIcon"/>
        )}
      </div>
    </div>
  );
}
