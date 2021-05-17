import React, { useState, useEffect, useContext } from 'react'
import ReactDOM from 'react-dom';

import styled, { ThemeProvider } from 'styled-components';
import { Themes, GlobalStyle } from './themes'
import { Modal } from '../components/popups'
import { PrimaryBtn } from '../components/buttons'
// import { ToastProvider } from 'react-toast-notifications';
// import { ToastItem } from '../components/popups'
// import { useCheck } from '../hooks'

// export const ModalsContext = React.createContext({ checking: true });
export const ModalsContext = React.createContext({})

function Check({ isVisible, close, message, cb }) {


    function handleConfirm() {
        cb()
        close()
    }

    // const doc = document.body || false
    // const el = typeof document !== `undefined` ? document.createElement('div') : null
    return typeof document !== `undefined` ? ReactDOM.createPortal(
        <Modal
            isVisible={isVisible}
            close={close}
            shade={true}
            style={{
                zIndex: '55',
            }}
            title={message}
        >
            <div
                style={{
                    display: 'flex',
                    gap: '1em',
                }}
            >

                <PrimaryBtn
                    type="negative"
                    fullWidth={true}
                    onClick={close}
                    style={{ marginRight: '.25em' }}
                >
                    Cancel
            </PrimaryBtn>
                <PrimaryBtn
                    type="positive"
                    fullWidth={true}
                    onClick={handleConfirm}
                    style={{ marginLeft: '.25em' }}
                >
                    Confirm
            </PrimaryBtn>
            </div>
        </Modal>
        , document.body
    ) : ''
}

function ModalsProvider(props) {

    const [checking, setChecking] = useState(false)

    return (
        <ModalsContext.Provider value={{ checking, setChecking }}>
            {props.children}
            <Check
                isVisible={checking.checking}
                cb={checking.cb}
                message={checking.message}
                close={() => setChecking(false)}
            />
        </ModalsContext.Provider>
    )
}


export const ZyppdComponents = ({ brandColor = '#43E896', range = ["#fafafa", "#f7f7f7"], children, toastDuration = 2500, toastPosition = "bottom-center" }) => {
    if (range[0] === null, range[1] === null) range = ["#fafafa", "#f7f7f7"]

    const [checking, setChecking] = useState(false)
    return (
        <ThemeProvider theme={Themes(brandColor, range)}>

            <GlobalStyle />


            <ModalsProvider
                test={"test"}
            >
                {children}
            </ModalsProvider>
        </ThemeProvider>

    )
}
