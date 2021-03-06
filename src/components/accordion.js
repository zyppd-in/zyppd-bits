import React, { useState } from 'react'
import styled from 'styled-components'
import chroma from 'chroma-js'
import { ChevronRightRounded as RightChevron, ExpandMoreRounded as DownChevron } from '@material-ui/icons'

const Summary = styled.summary`
    display: flex;
    align-items: center;
    font-weight: 500;
`
const Details = styled.details`
    padding: 1em .5em 1em .5em; 
    hr {
        margin: 1em .5em;
        height: 1px;
        background: ${({ theme }) => `${chroma(theme.foreground).darken(0.3)}`};
        border: none;
    }
    border: ${({ theme }) => `.1rem solid ${chroma(theme.foreground).darken(0.3)}`};
    border-radius: ${({ theme }) => theme.borderRadius};
`
export const Accordion = ({ title, children }) => {

    const [open, setOpen] = useState(false);

    return (
        <Details>
            <Summary open={open} onClick={() => setOpen(!open)}>{!open ? <RightChevron /> : <DownChevron />}{title}</Summary>
            <hr />
            {children}
        </Details>
    )
}
