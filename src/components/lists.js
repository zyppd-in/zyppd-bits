/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import chroma from 'chroma-js';

const Li = styled(motion.li)`
    padding: 1em;
    display: flex;
    align-items: center;
    position: relative;
    
  
    svg:first-of-type {
        margin-right: .5em
    }

    &.with-icon-last svg:last-child {
        margin-left: auto;
        margin-right: 0;
    }


    cursor: ${({ onClick }) => onClick && 'pointer'};
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

// box-shadow: ${({ theme }) => theme.shadow};
export const ListItemStyle = styled(Li)`
        border: ${({ theme, isValidated }) => `.1rem solid ${chroma(theme.foreground).darken(0.3)}`};
        border-radius: ${({ theme }) => theme.borderRadius};
        margin: 0.5em 0;
        background: ${({ theme }) => theme.foreground};
        transition: box-shadow .2s ease;

    
        ${({ type, theme }) => {
        return type === 'disabled' ?
            ` 
                    background: ${theme.disabledForeground};
                    box-shadow: none;
                    pointer-events: none;
                `
            : ``
    }}

    svg path, svg circle {
        fill: ${({ theme, type }) => type === 'warning' ? theme.stateColors.warning : ''};
    }

    
`

export const SubtleListItemStyle = styled(Li)`
padding: 1em;
background: ${({ theme }) => theme.middleground};
border - bottom: 1px solid lightgrey;
${({ active, theme }) => active === true && `
            font-weight: 500;
            color: ${theme.brandColor};
        `}
`

export const ListItem = (props) => {

    const listEl = useRef(null)

    useEffect(() => {

        if (listEl.current.lastChild.tagName === 'svg') {
            listEl.current.classList.add('with-icon-last')
        }

    }, [])

    return (
        <ListItemStyle className={'ListItem'} ref={listEl} {...props}>
            {props.children}
        </ListItemStyle>
    )
}

export const SubtleListItem = (props) => {


    const listEl = useRef(null)
    const active = props.active || false
    useEffect(() => {
        if (listEl.current.lastChild.tagName === 'svg') {
            listEl.current.classList.add('with-icon-last')
        }
    })


    return (
        <SubtleListItemStyle className={'SubtleListItem'} ref={listEl} {...props} active={active}>
            {props.children}
        </SubtleListItemStyle>
    )
}