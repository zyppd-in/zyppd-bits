import React, { useContext, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { PrimaryBtn, SecondaryBtn } from '../components/buttons'
import { CloseRounded as Cross } from '@material-ui/icons'
import { useLocalStorage } from '../hooks'
import { useEffect } from 'react/cjs/react.development'



export const Modal = ({ children, isVisible, title, shade, close = false, style }) => {

    const container = useRef(null)

    useEffect(() => {
        const firstInput = container.current.querySelector('input')
        firstInput && firstInput.focus()
    }, [container.current, isVisible])

    return ReactDOM.createPortal(
        <div
            ref={container}
            aria-hidden={isVisible}
            className={`${isVisible ? 'block' : 'hidden'} flex items-center justify-center z-50 fixed top-0 left-0 right-0 bottom-0`}
        >
            {isVisible && shade && <div
                className='fixed z-10 top-0 left-0 right-0 bottom-0 bg-opacity-25 bg-gray-800'
                onClick={close}
            ></div>}
            <div
                className={`transition ${isVisible ? 'translate-y-3' : 'translate-y-6'} fadeIn bg-foreground rounded-lg shadow z-20 p-4 w-full max-w-2xl min-h-[50vh] max-h-screen`}
            >
                <div
                    hasClose={!!close}
                    className='flex mb-2'
                >
                    {!!close &&
                        <button
                            onClick={close}
                            aria-label="Close Modal"
                            style={{
                                background: 'none',
                                border: 'none',
                                margin: '0', padding: '0'
                            }}
                        >
                            <Cross />
                        </button>
                    }
                    {title && <h2 className='ml-2'>{title}</h2>}
                </div>
                {children}
            </div>
        </div>, document.body
    )
}

export const Notification = ({ children }) => {
    return (
        <div className='border-2 border-warning radius-md p-2'>
            {children}
        </div>
    )
}


export const OneOffNotification = ({ title, children, name, cb }) => {

    const [value, setValue] = useLocalStorage(name)
    console.log(value !== true)

    const handleClick = () => {
        setValue(true)
        cb && cb()
    }
    return !value && ReactDOM.createPortal(
        <div className='fixed min-h-56 bottom-0 left-0 right-0 flex justify-center pb-2'>
            <div className='min-h-50 bg-foreground shadow rounded-lg p-4'>
                {title &&
                    <h1>{title}</h1>
                }
                <div className="content">
                    {children}
                </div>

                <PrimaryBtn className="mt-4" onClick={() => handleClick()}>No Problem</PrimaryBtn>
            </div>
        </div>
        , document.body)
}