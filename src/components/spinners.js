import React from 'react'
import styled from 'styled-components'

export function Spinner({ style }) {

  return (
    <SpinnerStyles style={style} className="spinner">
      <div className="rect1 spinnerBit"></div>
      <div className="rect2 spinnerBit"></div>
      <div className="rect3 spinnerBit"></div>
      <div className="rect4 spinnerBit"></div>
      <div className="rect5 spinnerBit"></div>
    </SpinnerStyles>
  )
}

const SpinnerStyles = styled.div`
    margin: 0 auto;
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 10px;
  
  & > div {
    min-height: 100%;
    width: 6px;
    margin: 0 1px;
    display: inline-block;
    background: ${({ theme }) => theme.brandColor};
    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .spinnerBit{
    min-height: 100%;
    width: 6px;
    margin: 0 1px;
  }
  
  & .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  
  & .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  
  & .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  
  & .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
  
  @-webkit-keyframes sk-stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
    20% { -webkit-transform: scaleY(1.0) }
  }
  
  @keyframes sk-stretchdelay {
    0%, 40%, 100% { 
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% { 
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }
`