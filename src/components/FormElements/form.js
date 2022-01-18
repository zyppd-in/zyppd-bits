import React from 'react'
import styled from 'styled-components'
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
                class="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
                type="checkbox"
                id={name} />
            {label}
        </label>
    )
}
