import React from "react";
import styled from "styled-components";
import CoffeeLogo from "../img/coffee.svg";
import ViewLogo from "../img/eye.svg";
import WaterLogo from "../img/water.svg";
import RepairLogo from "../img/repair.svg";
import MenuLogo from "../img/menu.svg";

export default function Menu(props) {
  return (
    <div>
      <MenuWrapper>
        <ul>
          <li>
            <button onClick={() => props.setEvent("coffee")}>
              <img src={CoffeeLogo} alt="" />
            </button>
          </li>
          <li>
            <button onClick={() => props.setEvent("view")}>
              <img src={ViewLogo} alt="" />
            </button>
          </li>
          <li>
            <button onClick={() => props.setEvent("water")}>
              <img src={WaterLogo} alt="" />
            </button>
          </li>
          <li>
            <button onClick={() => props.setEvent("repair")}>
              <img src={RepairLogo} alt="" />
            </button>
          </li>
          <li>
            <button onClick={() => props.setEvent("")}>
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
      button {
        border: none;
        background-color: transparent;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        img {
          width: 25px;
          color: black;
        }
      }
      button:active {
        box-shadow: 0 3px 12px 0 rgba(31, 38, 135, 0.17);
        
      }
      button:focus {
        box-shadow: 0 3px 12px 0 rgba(31, 38, 135, 0.17);
      } 
    }
  }
`;
