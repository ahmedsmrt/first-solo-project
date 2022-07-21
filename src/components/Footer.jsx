import React from "react";
import styled from "styled-components";

const FooterStyles = styled.div`
width: 100%;
background: #1a1b21;
border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    div {
        position: relative;
        background: #161619;
        display: flex;
        bottom: 0;
        padding: 15px 65px;
        justify-content: space-around;
        margin: 0%;
        height: 40px;
        align-items: center;
        margin-top: 45px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    div img {
        width: 25px;
        height: 25px;
    }

    div img:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    div img:nth-child(1):hover {
        fill: yellow;
    }

`;

export default function Footer() {
  const footerArray = [
    "https://raw.githubusercontent.com/ahmedsmrt/first-solo-project/eff4c23fbdefb2dfd61fd76707c92e0ad1254f17/src/assets/Twitter%20Icon.svg",
    "https://raw.githubusercontent.com/ahmedsmrt/first-solo-project/eff4c23fbdefb2dfd61fd76707c92e0ad1254f17/src/assets/Facebook%20Icon.svg",
    "https://raw.githubusercontent.com/ahmedsmrt/first-solo-project/eff4c23fbdefb2dfd61fd76707c92e0ad1254f17/src/assets/Instagram%20Icon.svg",
    "https://raw.githubusercontent.com/ahmedsmrt/first-solo-project/eff4c23fbdefb2dfd61fd76707c92e0ad1254f17/src/assets/GitHub%20Icon.svg",
  ];

  return (<FooterStyles>
    <div>
      {footerArray.map((el) => {
        return <img src={el} alt="social-icon" />;
      })}
    </div>
  </FooterStyles>)

  
}
