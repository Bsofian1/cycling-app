import React from "react";
import styled from "styled-components";
import CoffeeLogo from "../img/coffee.svg";
import ViewLogo from "../img/eye.svg";
import WaterLogo from "../img/water.svg";
import RepairLogo from "../img/repair.svg";
import MenuLogo from "../img/menu.svg";

export default function Menu(props) {
  const currentEvent = props.event;

  let menuItemStyleWater = {};
  let menuItemStyleCoffee= {};
  let menuItemStyleView = {};
  let menuItemStyleRepair = {};

  if (currentEvent === "water") {
    menuItemStyleWater = {
      borderBottom: "3px solid #118ab2",
    };
  }else{
    menuItemStyleWater = {};
  }
  if (currentEvent === "coffee") {
    menuItemStyleCoffee = {
      borderBottom: "3px solid #ef476f",
    };
  }else{
    menuItemStyleCoffee = {};
  }
  if (currentEvent === "view") {
    menuItemStyleView = {
      borderBottom: "3px solid #06d6a0",
    };
  }else{
    menuItemStyleView = {};
  }
  if (currentEvent === "repair") {
    menuItemStyleRepair = {
      borderBottom: "3px solid #ffd166",
    };
  }else{
    menuItemStyleRepair = {};
  }



  const handleChangeMenu = (event) => {
    props.setEvent(event);
  };

  return (
    <div>
      <MenuWrapper>
        <ul>
          <li style={menuItemStyleCoffee}>
            <button onClick={() => handleChangeMenu("coffee")}>
              <img src={CoffeeLogo} alt="" />
            </button>
          </li>
          <li style={menuItemStyleView}>
            <button onClick={() => handleChangeMenu("view")}>
              <img src={ViewLogo} alt="" />
            </button>
          </li>
          <li style={menuItemStyleWater}>
            <button onClick={() => handleChangeMenu("water")}>
              <img src={WaterLogo} alt="" />
            </button>
          </li>
          <li style={menuItemStyleRepair}>
            <button onClick={() => handleChangeMenu("repair")}>
              <img src={RepairLogo} alt="" />
            </button>
          </li>
          <li>
            <button onClick={() => handleChangeMenu("")}>
              <img src={MenuLogo} alt="" />
            </button>
          </li>
        </ul>
      </MenuWrapper>
    </div>
  );
}

const MenuWrapper = styled.div`
  position: absolute;

  //background-color
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  bottom: 0;

  //center horizontal
  left: 50%;
  transform: translate(-50%, -50%);
  height: 10%;
  max-height: 100px;
  width: 80%;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: right;
    list-style-type: none;
    justify-content: space-around;
    align-items: center;
    li {
      height: 100%;

      button {
        margin-top: 30px;
        border: none;
        background-color: transparent;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        img {
          width: 25px;
          color: black;
        }
        @media(max-width: 500px){
        margin-top: 15px;
      }
      }
      @media(max-width: 500px){
        margin-top: 0;
      }
      button:active {
        box-shadow: 0 3px 12px 0 rgba(31, 38, 135, 0.17);
      }
    }
  }
`;
