import React, { useState, useEffect } from 'react'

export function TextArea({
    children,
    type,
    placeholder,
    name = '',
    handleInput = () => { },
    message,
    className,
    value = "",
    disabled = false,
}, props) {

    const [val, setVal] = useState(value)
    function handleChange(e) {
        handleInput(e)
        setVal(e.target.value)
    }
    return (
        <div className="my-2">
            {message &&
                <label htmlFor={name} className="my-1 mx-2">{message}</label>
            }
            <div>
                <textarea
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    value={val}
                    className={`w-full radius-lg bg-foreground p-2`}
                    style={{
                        minHeight: '10rem'
                    }}
                    {...props}
                >

                </textarea>
            </div>
        </div>
    )
}