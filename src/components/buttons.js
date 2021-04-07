import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
// import { RightChevron, LeftChevron } from './icons'
import { Spinner } from './spinners'
import chroma from 'chroma-js'

const Btn = styled.button`
    padding: .5em 1em;
    border: none; 
    font-size: 1em;
    font: inherit;
    align-items: center;
    position: relative;
    cursor: pointer;
    color: ${({ theme, disabled }) => !disabled && theme.textColor};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow};
    transition: .3s ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
   
        &.with-icon-first{
          svg {
            margin-right: .5em;
          }
        }
        
        &.with-icon-last {
          svg {
            margin-left: .5em;
          }
        }
        
        
        
    &.disabled{
        border: ${({ theme }) => `2px solid ${theme.middleground}`};
        box-shadow: none;
        padding-right: 1em;
        cursor: auto;
        pointer-events: none;
      }
    &.fullWidth{
      width: 100%;
        span{
          margin: 0 auto;
        }
      }

span{
  position: relative;
  top: -1px;
}

  ${({ theme, notification }) => {

    return notification && notification.type !== '' && `
        &::before {
            content: '';
            position: absolute;
            top: 4px;
            left: 4px;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background: ${theme.stateColors[notification.type]};
        }
        &::after {
            content: '${notification.text}';
            color: ${theme.textColor};
            text-align: left;
            background: ${theme.stateColors[notification.type]};
            border-radius: ${theme.borderRadius};
            position: absolute;
            top: 0;
            left: 10px;
            overflow: visible;
            padding: .5em;
            opacity: 0;
            transform: translate(0, -50%);
            transition: .2s ease-out;
            
        }
        &:hover::after{
            transform: translate(0, -110%);
            opacity: 1;
        }
  `
  }}
`

const PBtn = styled(Btn)`

    background: ${({ theme, type }) => {
    return !type ?
      theme.brandColor
      : theme.stateColors[type]
  }};

  svg path {
    fill:  ${({ theme }) => chroma(theme.brandColor).luminance() > 0.4 ? '#333' : 'whitesmoke'}
  }

    color: ${({ theme }) => chroma(theme.brandColor).luminance() > 0.4 ? '#333' : 'whitesmoke'};

    
    font-weight: 500;
    
    ${({ type, theme }) => {
    return type === 'negative' ? `color: whitesmoke`
      : type === 'warning' ? `color: #333;` : ``
  }};

    &.disabled{
        background: lightgrey;
        color: #777;
    }
    
    .spinner .spinnerBit{
      background: ${({ theme }) => {
    return chroma(theme.brandColor).luminance() > 0.4 ? '#333' : 'whitesmoke'
  }};
    }

    transition: .2s ease-out;
    &:hover{
      box-shadow: ${({ theme }) => theme.expandedShadow};
    }
  
  `
export const PrimaryBtn = (props) => {

  const BtnEl = useRef(null)

  useEffect(() => {

    if (BtnEl.current.firstChild && BtnEl.current.firstChild.tagName === 'svg') {
      BtnEl.current.classList.add('with-icon-first')
    }
    if (BtnEl.current.lastChild && BtnEl.current.lastChild.tagName === 'svg') {
      BtnEl.current.classList.add('with-icon-last')
    }
  }, [])

  return (
    <PBtn
      ref={BtnEl}
      className={`
    ${props.disabled ? 'disabled' : ''}
    ${props.fullWidth ? 'fullWidth' : ''}
    `}
      {...props}
    >
      {props.waiting === true ?
        <Spinner /> :
        <React.Fragment>
          {props.children}

        </React.Fragment>
      }
      {/* {props.waiting === false && 


        } */}

    </PBtn>
  )
}



const SBtn = styled(Btn)`
    background: ${({ theme }) => theme.foreground};
    box-shadow: none;  
    border: ${({ theme }) => `1px solid ${chroma(theme.middleground).darken(0.5)}`};


    `



export const SecondaryBtn = (props) => {

  const BtnEl = useRef(null)

  useEffect(() => {

    if (BtnEl.current.firstChild && BtnEl.current.firstChild.tagName === 'svg') {
      BtnEl.current.classList.add('with-icon-first')
    }
    if (BtnEl.current.lastChild && BtnEl.current.lastChild.tagName === 'svg') {
      BtnEl.current.classList.add('with-icon-last')
    }
  }, [])

  return (
    <SBtn
      ref={BtnEl}
      className={`
    ${props.disabled ? 'disabled' : ''}
    ${props.forward ? 'forward' : ''}
    ${props.backward ? 'backward' : ''}
    ${props.fullWidth ? 'fullWidth' : ''}
    `}
      {...props}
    >
      {props.waiting === true ?
        <Spinner /> :
        <React.Fragment>
          {props.backward &&
            <LeftChevron />
          }
          {props.children}
          {props.forward &&
            <RightChevron />
          }
        </React.Fragment>
      }
      {/* {props.waiting === false && 


        } */}

    </SBtn>
  )
}


export const Tabs = styled.button`
  width: 100%;
  display: flex;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
`

export const Tab = styled.button`
  border: none;
  font-family: Quicksand, Helvetica, sans-serif;
  font-weight: ${({ active }) => active ? '700' : '400'};
  flex: 1;
  padding: 1em .5em;
  background: ${({ theme }) => theme.background};
  border-bottom: ${({ active, theme }) => active ? `.25em solid  ${theme.brandColor}` : `.25em solid ${theme.middleground}`};
  color: ${({ theme, active }) => active ? chroma(theme.brandColor).luminance() > 0.4 ? '#333' : 'whitesmoke' : theme.textColor};
`

// Not finished
const IconButton = styled.button`
background: none;
border: none;

`

export const IconBtn = ({
  children,
  onClick,
  disabled,
  type,
  style,
}, rest) => {

  return (
    <IconButton style={style}>

      {children}
    </IconButton >
  )
}
// export default PrimaryBtn