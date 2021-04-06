import React, { useState, useEffect, useContext } from 'react'
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';


export const PrimaryBtn = ({ children }) => {
    return (
        <button>
            BTN:
            {children}
        </button>
    )
}