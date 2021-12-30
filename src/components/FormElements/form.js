import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import SelectStart from 'react-select';
import { Themes } from '../../theme/themes'
import chroma from 'chroma-js';
import {
    CheckRounded as Tick,
    EditRounded as EditIcon
} from '@material-ui/icons';
import { ChromePicker, } from 'react-color'
import { useLocalStorage } from '../../hooks'
import { PrimaryBtn } from '../buttons';
import styles from './FormElements.module.scss'

export const Progress = styled.progress`
    width: 100%; 
    height: 1em; 
    background: ${({ theme }) => theme.textColor};
    border-radius: ${({ theme }) => theme.borderRadius};
    appearance: none;
    
    
    &[value]{
        background: ${({ theme }) => theme.brandColor};
        border-radius: 2px;
    }
`

const Check = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }
    .checkmark {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 0;

        border-radius: ${({ theme }) => theme.borderRadius};
        border: ${({ theme, checked }) => `.1rem solid ${checked ? theme.brandColor : chroma(theme.background).darken(1)}`};
        // background-color: ${({ theme }) => theme.foreground};
        background: ${({ theme }) => theme.middleground};
        // box-shadow: ${({ theme }) => theme.shadow};
        width: 1.5rem;
        height: 1.5rem;
        display: flex; 
        justify-content: center;
        align-items: center;
        transition: .1s ease;
        svg{
            opacity: .4;
            // transform: scale(0);
            path {
                fill: ${({ theme, checked }) => theme.textColor};
            }
            
        }
        &.checked {
            box-shadow: ${({ theme }) => theme.shadow};
            background: ${({ theme }) => theme.brandColor};
            svg {
                opacity: 1;
            }
          }
    }
    

`
export function Checkbox({ label, checked, onClick, name }, props) {

    function handleClick(e) {
        console.log(checked, e.target)
        return onClick && onClick({ ...e, [e.target]: { ...e.target, value: props.checked } })
    }
    return (
        <label
            class="form-check-label inline-block  cursor-pointer mb-2"
        >
            <input
                // checked
                class="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
                type="checkbox"
                id={name} />
            Default checkbox
        </label>
    )
}

const CheckBtnStyle = styled.label`
    padding: .5em;
    border-radius: ${({ theme }) => `calc(${theme.borderRadius} * 3)`};
    font-weight: bold; 
    input {
        display: none;
    }
    flex: 1 1 66px;
    box-shadow: ${({ theme }) => theme.shadow};
    ${({ checked, theme }) => {
        return checked && `
                background: ${theme.stateColors.positive};
            `
    }}
`

export const Checklist = ({ options, onClick }) => {

    const [checked, setChecked] = useState(!!value)


    useEffect(() => {
        onClick(value)
    }, [checked])

    function handleChange() {
        setChecked(!checked)
        onClick(value)
    }
    return (
        <CheckBtnStyle
            checked={checked}
        >
            <input
                onChange={() => handleChange()}
                type="checkbox" name={name}
            />
            {label}
        </CheckBtnStyle>
    )
}