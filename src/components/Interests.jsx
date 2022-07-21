import React from "react";
import styled from "styled-components";

const InterestsStyles = styled.div`

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

export default function Interests() {
  return (
    <InterestsStyles>
      <div>
        <h4>Interests</h4>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </InterestsStyles>
  );
}
