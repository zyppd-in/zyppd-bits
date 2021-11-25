import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import SelectStart from 'react-select';
import { Themes } from '../theme/themes'
import chroma from 'chroma-js';
import {
    CheckRounded as Tick,
    EditRounded as EditIcon
} from '@material-ui/icons';
import { ChromePicker, } from 'react-color'
import { useLocalStorage } from '../hooks'
import { PrimaryBtn } from './buttons';

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

export const Form = styled.form`
    width: 100%;
    max-width: 500px;
`

const Field = styled.div`
    color: ${({ theme }) => theme.textColor};
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow};
    padding: .5rem;
    height: 3rem;
    transition: .2s ease;
    border: ${({ theme, isValidated }) => `.1rem solid ${chroma(theme.foreground).darken(0.3)}`};
    border-color:  ${({ theme, isValidated }) => {
        return isValidated ? theme.stateColors.success : chroma(theme.foreground).darken(0.3)
    }};
    background: ${({ theme }) => theme.foreground};
    &:hover, &:focus-within{
        background: ${({ theme }) => chroma(theme.foreground).brighten(0.5)};
    }
    svg:not(.no-margin-right) {
        margin-right: .5em
    }

    .confirm-icon{
        transition: .2s ease-out;
        position: absolute;
        right: .2em;
        top: .2em;
        transform: translateX(-1em);
        padding: .3em;
        opacity: 0;
    }

    ${({ editable }) =>
        editable && `
        box-shadow: none;
        border: 1px solid ${({ theme }) => theme.middleground};
        &:focus-within{
            .confirm-icon{
                transform: translate(0, 0);
                opacity: 1;
            }
            .edit-icon{
                display: none;
            }
        }
        `
    }

    ${({ needsEditing, theme }) => {
        return needsEditing && `
        
            border: .1rem solid ${chroma(theme.stateColors.warning)};
            &::before{
                content: 'Needs Updating';
                position: absolute;
                font-size: 80%;
                font-weight: 500;
                z-index: -1;
                top: 0;
                transform: translate(0, calc(-100% - 0rem));
                right: .5em;
                padding: .2em 1em; 
                border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0;
                color: ${chroma(theme.stateColors.warning).luminance() > 0.4 ? '#333;' : 'whitesmoke;'}
                background: ${(theme.stateColors.warning)};
                height: 20px;
                
            }
        `
    }}
    
    
`

const InputField = styled.input`
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.textColor};
    background: none;
    padding: 0.25rem 0;
    width: 100%;
    overflow: hidden;
    font-size: 1em;
    font: inherit;
    
    
`



export function inputValidation(type, value) {
    if (!type || !value) return
    let validated = false;
    if (type === 'email') {
        return validated = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
    }
    if (type === 'text') {
        return validated = value.length > 1
    }
    if (type === 'tel') {
        return validated = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)
    }

    if (type === 'password') {
        return validated = value.length > 5
    }

    return validated
}

export function Input({
    children,
    type,
    placeholder,
    name = '',
    handleInput = () => { },
    message,
    validationNeeded = true,
    className,
    useStorage = false,
    value,
    disabled = false,
    editable = false,
    handleExit = false,
    needsEditing = false
}
    , props) {


    const [isValidated, setIsValidated] = useState(false);
    const [val, setVal] = useState()
    const [storageVal, setStorageVal] = useLocalStorage(name || 'placeholder')

    const [input, setInput] = useState()
    function handleChange(e) {
        if (disabled) return;
        // name && useStorage && 
        if (name && useStorage) {
            setStorageVal(e.target.value)
            setVal(e.target.value)
        } else {
            setVal(e.target.value)
        }
        if (validationNeeded) {
            setIsValidated(inputValidation(e.target.type, e.target.value))
            return handleInput(e, inputValidation(e.target.type, e.target.value))
        }
        return handleInput(e, true)
    }

    useEffect(() => {
        if (!type) return
        validationNeeded && setIsValidated(inputValidation(type, val))
    }, [val, type])

    const InputEl = useRef(null)

    useEffect(() => {
        setVal(value)
        if (name && useStorage) {
            storageVal && setVal(storageVal)
        }

        if (InputEl.current.firstChild && InputEl.current.firstChild.tagName === 'svg') {
            InputEl.current.classList.add('with-icon')
        }

    }, [])



    return (
        <div>
            {message &&
                <p style={{
                    margin: '.25em .5em'
                }}>{message}</p>
            }

            <Field
                ref={InputEl}
                disabled={disabled}
                isValidated={isValidated}
                validationNeeded={validationNeeded}
                editable={editable}
                needsEditing={needsEditing}
            >
                {children}
                <InputField
                    value={val}
                    className="input"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    {...props}
                    onBlur={editable ? handleExit : null}
                />
                {editable &&
                    <React.Fragment>

                        <PrimaryBtn
                            className="confirm-icon "
                            onClick={handleExit}
                        >
                            <Tick
                                className="no-margin-right"
                                faint={true}
                            />
                        </PrimaryBtn>

                        <EditIcon
                            className="edit-icon no-margin-right"
                            faint={true}
                        />
                    </React.Fragment>
                }
            </Field>
        </div>
    )
}

const TextAreaContainer = styled.div`
    position: relative;
    .icons {
        position: absolute;
        top: .25em;
        right: .25em;
    }
    .confirm-icon{
        transition: .2s ease-out;
        position: absolute;
        right: .2em;
        top: .2em;
        transform: translateX(-1em);
        padding: .3em;
        opacity: 0;
    }

    ${({ editable }) =>
        editable && `
        box-shadow: none;
        border: .1rem solid ${({ theme }) => theme.middleground};
        &:focus-within{
            .confirm-icon{
                transform: translate(0, 0);
                opacity: 1;
            }
            .edit-icon{
                display: none;
            }
        }
        `
    }
`
const TextAreaStyles = styled.textarea`
    transition: .2s ease;
    width: 100%; 
    border-radius: ${({ theme }) => theme.borderRadius};
    min-height: 200px;
    background: ${({ theme }) => theme.foreground}; 
    border: ${({ theme }) => `.1rem solid ${chroma(theme.foreground).darken(0.3)}`};
    box-shadow: ${({ theme, editable }) => editable !== true && theme.shadow};
    padding: .5em; 
    font-size: 1em; 
    font-family: 'Quicksand';
    resize: vertical;
    color: ${({ theme }) => theme.textColor};
    &:hover, &:focus-within{
        background: ${({ theme }) => chroma(theme.foreground).brighten(0.5)};
    }
    
`


export function TextArea({
    children,
    type,
    placeholder,
    name = '',
    handleInput = () => { },
    message,
    validationNeeded = true,
    className,
    useStorage = false,
    value = "",
    disabled = false,
    editable = false,
    handleExit = false
}, props) {

    const [val, setVal] = useState(value)
    function handleChange(e) {
        handleInput(e)
        setVal(e.target.value)
    }
    return (
        <React.Fragment>
            {message &&
                <p
                    style={{
                        margin: '.25em .5em'
                    }}
                >{message}</p>
            }
            <TextAreaContainer
                editable={editable}
            >
                {editable &&
                    <div
                        className="icons"
                    >

                        <PrimaryBtn
                            className="confirm-icon"
                            onClick={handleExit}
                        >
                            <Tick
                                faint={true}
                            />
                        </PrimaryBtn>

                        <EditIcon
                            className="edit-icon"
                            faint={true}
                        />
                    </div>
                }

                <TextAreaStyles
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    value={val}
                    onBlur={editable ? handleExit : null}
                    editable={editable}
                >

                </TextAreaStyles>
            </TextAreaContainer>
        </React.Fragment>
    )
}



const SelectContainer = styled.div`
    .select{   
        position: relative;
        z-index: 11;
        .zyppd__control{
            border-radius: ${({ theme }) => theme.borderRadius};
            border: ${({ theme }) => `.1rem solid ${chroma(theme.foreground).darken(0.3)}`};
            background: ${({ theme }) => theme.foreground};
            padding: 0rem;
            box-shadow: ${({ theme }) => theme.shadow};
            ${({ isDisabled }) => {
        return isDisabled ? `
                box-shadow: none;
                opacity: .5;
                ` : null
    }}
            transition: .2s ease-in-out;
            &--is-focused{
                outline: inherit;
            }
            &:hover, &:focus-within{
                background: ${({ theme }) => chroma(theme.foreground).brighten(0.5)};
            }
        }
        .zyppd__menu {
            border-radius: ${({ theme }) => theme.borderRadius};
            background: ${({ theme }) => theme.foreground};
            background: red;
            border: none;
            padding: 1em;
            position: relative;
            z-index: 12;
        }
        .zyppd__option{
            padding: 1em;
            background: ${({ theme }) => theme.foreground};
            color: ${({ theme }) => theme.textColor};
            border: none;
          
            &:hover {
                background: ${({ theme }) => chroma(theme.foreground).darken(0.2)};
            }
            &--is-focused{
                background: ${({ theme }) => theme.middleground};
            }
        }
        .zyppd__single-value{
            color:  ${({ theme }) => theme.textColor};
        }
        .zyppd__indicator svg path {
            fill:  ${({ theme }) => theme.textColor};
        }

    }
    p {
        margin: .2em .6em;
    }
`

export function Select(props, { style, options, name, label = "select", onChange = () => { }, }) {

    return (
        <SelectContainer isDisabled={props.isDisabled}>
            {props.message && <p> {props.message}</p>}
            <SelectStart
                style={style}
                options={options}
                className='select'
                classNamePrefix="zyppd"
                onChange={onChange}
                {...props}

            />

        </SelectContainer>
    )
}

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
export function Checkbox(props, { label, checked, onClick, name }) {

    function handleClick(e) {
        return onClick && onClick({ ...e, [e.target]: { ...e.target, value: props.checked } })
    }
    return (
        <Check
            checked={props.checked}
        >
            {props.label}
            <input
                name={props.name}
                type="checkbox"
                checked={props.checked}
                value={props.checked}
                onChange={(e) => handleClick(e)}
                {...props}
            >
            </input>
            <span className={`checkmark ${props.checked ? 'checked' : ''}`}>
                <Tick />
            </span>
        </Check>
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