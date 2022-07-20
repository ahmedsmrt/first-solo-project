import React from 'react'
import styled from 'styled-components'

const InfoStyles = styled.div`

    img {
        width: 317px;
    }

`


export default function Info() {
  return (
    <InfoStyles>
        <div>
            <img src="https://images.pexels.com/photos/3153203/pexels-photo-3153203.jpeg?cs=srgb&dl=pexels-canva-studio-3153203.jpg&fm=jpg" alt="" />
        </div>
    </InfoStyles>
  )
}
