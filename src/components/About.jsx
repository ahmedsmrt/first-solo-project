import React from "react";
import styled from "styled-components";

const AboutStyles = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
font-family: 'Inter', sans-serif;
    margin: 0;
    
div {
    background: #1a1b21;
    padding: 20px 30px 0px 30px;

}

h4 {
    background: #1a1b21;
    color: #F5F5F5;
    margin: 0;
}

p {
    background: #1a1b21;
    color: #DCDCDC;
    text-align: top;
    line-height: 15.48px;
    font-size: 10.24px;
    margin-top: 5px;
}

 
`;

export default function About() {
  return (
    <AboutStyles>
      <div>
        <h4>About</h4>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
    </AboutStyles>
  );
}
