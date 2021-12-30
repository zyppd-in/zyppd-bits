import React, { useState, useEffect, useRef } from 'react'
import { useLocalStorage } from '../../hooks'
import styles from './FormElements.module.scss'

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
    needsEditing = false,
    confirm = () => { }
}
    , props) {

    const [isValidated, setIsValidated] = useState(false);
    const [val, setVal] = useState()
    const [storageVal, setStorageVal] = useLocalStorage(name || 'placeholder')
    const [hasIcon, setHasIcon] = useState(false)
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
            setHasIcon(true)
        }

    }, [])


    function handleConfirmation(key) {
        if (key !== 'Enter') return
        confirm()
    }

    return (
        <div>
            {message &&
                <label htmlFor={name} style={{
                    margin: '.25em .5em'
                }}>{message}</label>
            }

            <div
                ref={InputEl}
                disabled={disabled}
                isValidated={isValidated}
                validationNeeded={validationNeeded}
                needsEditing={needsEditing}
                className={`
                mb-2 shadow border-background transition relative rounded-lg w-full p-1 flex items-center ${hasIcon ? styles.hasIcon : null}
                ${needsEditing && `${styles.needsEditing} border-warning`}
                ${isValidated && `border-success`}
                `}
                aria-label={`Update ${name}`}
                data-validated={isValidated}
            >
                {children}
                <input
                    value={val}
                    className="input p-1 w-full bg-foreground rounded-md"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    {...props}
                    required={validationNeeded ? true : false}
                    onKeyDown={e => handleConfirmation(e.key)}
                />

            </div>
        </div>
    )
}