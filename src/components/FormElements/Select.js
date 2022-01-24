import React, { useState, useEffect } from 'react'
import styles from './FormElements.module.scss'
import { ExpandMoreRounded } from '@material-ui/icons'


export function Select({ message, style, options, name, label = "select", onChange = () => { }, defaultValue = null }, props) {

    const [selectedItem, setSelectedItem] = useState(defaultValue || false);

    function handleChange(e) {
        const matchedOption = options.find(option => option.value === e.target.value)
        setSelectedItem(matchedOption)
        onChange(matchedOption)
    }

    return (
        <div className='mb-2 w-full'>
            {message && <label htmlFor={name}>{message}</label>}
            <div className={`relative rounded-lg shadow bg-foreground mb-2 w-full`}>
                <select
                    name={name}
                    value={selectedItem.value}
                    onChange={handleChange}
                    className={`${styles.select} bg-none bg-transparent w-full p-2`}
                >
                    <option disabled selected value>Select...</option>
                    {options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        )
                    })}
                </select>
                <div className='absolute right-3 top-2 pointer-events-none'>
                    <ExpandMoreRounded />
                </div>
            </div>
        </div>
    )
}