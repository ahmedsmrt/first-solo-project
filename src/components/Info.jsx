import React from 'react'
import styled from 'styled-components'

const InfoStyles = styled.div`

    background-color: #1A1B21!important;
    border-top-left-radius: 10px;
        border-top-right-radius: 10px;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    div {
        background-color: #1A1B21;
        overflow: hidden;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    img {
        width: 317px;
        height: 317px;
    }

    .about-text {
        padding: 5px 0px;
        text-align: center;
        font-family: 'Inter', sans-serif;
        background-color: #1A1B21;
    }

    h2 {
        font-size: 25px;
        margin: 20px 0 0 0;
        color: #FFFFFF;
        background-color: #1A1B21;
    }

    h5 {
        font-size: 12.8px;
        padding: 0;
        margin: 5px 0 9px 0;
        color: #F3BF99;
        background-color: #1A1B21;
        font-weight: 400;
    }

    .about-text a {
        text-decoration: none;
        font-size: 10.24px;
        color: #F5F5F5;
        text-align: center;
        background: #1a1b21;
        
    }

    .btn-container {
        width: 80%;
        margin: 15px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        gap: 15px;
        font-family: 'Inter', sans-serif;

    }

    .btn-container a {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        height: 33px;
        width: 115px;
        border-radius: 6px;
        text-decoration: none;
        font-size: 14px;
        position: relative;
    }

    .btn-email {
        color: #374151;
        background-color: #FFFFFF;
    }

    .btn-email:hover {
        background-color: #dfdfdf;
    }

    .btn-email::before {
        content: url(https://raw.githubusercontent.com/ahmedsmrt/first-solo-project/eff4c23fbdefb2dfd61fd76707c92e0ad1254f17/src/assets/Mail.svg);
        position: absolute;
        width: 14px;
        height: 14px;
        left: 17px;
        top: 9px;
    }

    .btn-linkedin {
        background-color: #5093E2;
        color: #FFFFFF;
    }

    .btn-linkedin:hover {
        background-color: #3b7fcc;
    }

    
    .btn-linkedin::before {
        content: url(https://raw.githubusercontent.com/ahmedsmrt/first-solo-project/eff4c23fbdefb2dfd61fd76707c92e0ad1254f17/src/assets/linkedin.svg);
        position: absolute;
        width: 14px;
        height: 14px;
        left: 10px;
        top: 9px;
    }

`


export default function Info() {
  return (
    <InfoStyles>
        <div>
            <img src="https://github.com/ahmedsmrt/first-solo-project/blob/master/src/assets/Mask%20Group%201.jpg?raw=true" alt="professional headshot" />
            <div className="about-text">
            <h2>Ahmed Gasim</h2>
            <h5>Frontend Developer</h5>
            <a href="https://ahmedgasim.netlify.app/" target="_blank">ahmedgasim.netlify.app</a>
            </div>
            <div className="btn-container">
                <a href="mailto:sabrthruit@gmail.com" className="btn-email">Email</a>
                <a href="https://www.linkedin.com/in/ahmed-gasim-b601ab129/" target="_blank" className="btn-linkedin">LinkedIn</a>
            </div>
        </div>
    </InfoStyles>
  )
}
