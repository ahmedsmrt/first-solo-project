import React from 'react'
import styled from 'styled-components'

const InfoStyles = styled.div`

    img {
        width: 317px;
        height: 317px;
    }

`


export default function Info() {
  return (
    <InfoStyles>
        <div>
            <img src="https://images.pexels.com/photos/11871114/pexels-photo-11871114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </InfoStyles>
  )
}
