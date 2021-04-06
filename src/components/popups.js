import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { PrimaryBtn, SecondaryBtn } from '../components/buttons'
import { Cross } from '../components/icons'
import { useLocalStorage } from '../hooks'

const ModalStyles = styled(motion.div)`
    background: ${({ theme }) => theme.foreground};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow};
    z-index: 15;
    padding: 1em;
    margin: 0 1em;
    width: 100%;
    max-width: 600px; 
    max-height: 90vh;
    overflow: scroll;
    h2 {
        margin-bottom: .5em;
    }
`

export const Shade = styled.div`
    position: fixed;
    z-index: 11;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0.3, 0.3, 0.3, 0.3);
`
const Container = styled.div`
    display: flex; 
    place-items: center;
    justify-content: center;
    align-items: center;
    position: fixed; 
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 45;
`
export const Modal = ({ children, isVisible, title, shade, close = false, style }) => {

    // console.log("close ", !!close())
    return <AnimatePresence>
        {isVisible &&
            <Container>
                {isVisible && shade && <Shade
                    onClick={close}
                ></Shade>}
                <ModalStyles
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}

                    style={style}
                >
                    <ModalHeader hasClose={!!close}>
                        {!!close &&
                            <div onClick={close}>
                                <Cross faint={true} />
                            </div>
                        }
                        {title && <h2>{title}</h2>}
                    </ModalHeader>
                    {children}
                </ModalStyles>
            </Container>
        }
    </AnimatePresence >
}
const ModalHeader = styled.div`
    display: flex;
    svg {
            margin-top: .25em;
    }
    svg path {
            fill: ${({ theme }) => theme.textColor};
    }
    h2 {
        display: inline-block;
        margin-left: ${({ hasClose }) => hasClose ? '.5em' : '0'};
        align-self: center;
    }
`
const ToastItemStyle = styled(motion.figure)`
    margin-bottom: 1em;
    padding: 1em;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme, type }) => theme.stateColors[type]};
    font-weight: bold;
    color: #333;
    ${({ type }) => type === 'negative' && `
        color: whitesmoke;
    `}
`

export function ToastItem(props) {

    return (
        <ToastItemStyle
            type={props.appearance}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
        >
            {props.children}
        </ToastItemStyle>
    )

}

export const Notification = styled.div`
    border: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    top: -7.5px;
    left: -7.5px;
    background: red;
    background: ${({ theme, type }) => theme.stateColors[type]};
    color: ${({ theme }) => theme.textColor};
    box-shadow: ${({ theme }) => theme.shadow};
    font-weight: 500;
    &:hover::after{
            transform: scaleX(1);
    }
    &::before{
            content: '';
        width: 25px;
        height: 25px;
        position: absolute;
        top: -5px;
        left: -5px;
        :hover{
            border: .1rem solid;
        }
    }
    ${({ message, theme, type }) => {

        return !!message && `
            &::after{
                content: '${message}';
                position: absolute; 
                border-radius: ${theme.borderRadius};
                color: ${theme.textColor};
                background: ${theme.stateColors[type]};
                height: 25px; 
                width: auto;
                white-space: nowrap;
                top: -12.5px;
                left: 20px;
                padding: .5em;
                transform-origin: left;
                transform: scaleX(0);
                transition: .1s ease-out;
            }
        `
    }}
`


const CookiesNotification = styled.div`
    position: fixed;
    bottom: 1em;
    left: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: calc(100% - 2em);
    max-width: 700px;
    min-height: 50px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.background};
    box-shadow: ${({ theme }) => theme.shadow};
    border: .1rem solid ${({ theme }) => theme.brandColor};
    color: ${({ theme }) => theme.textColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 1em;
    z-index: 50;
    p {
            font - size: 80%;
    }
`


export const OneOffNotification = ({ children, name }) => {

    const [value, setValue] = useLocalStorage(name)

    return !value && ReactDOM.createPortal(
        <AnimatePresence>
            <CookiesNotification>
                <div className="content">
                    {children}
                </div>
                <div
                    style={{ marginTop: '1em' }}
                >
                    <PrimaryBtn onClick={() => setValue(true)}>No Problem</PrimaryBtn>
                </div>
            </CookiesNotification>
        </AnimatePresence>

        , document.body)
}