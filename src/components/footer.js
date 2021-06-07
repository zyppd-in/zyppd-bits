import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
    padding: 1em;
    background: ${({ theme }) => theme.middleground};
    display: flex; 
    flex-wrap: wrap;
    > * {
        flex: 1 1 300px;
    }

    .title, .copyright{
        flex: 100%;
        display: flex; 
        justify-content: center;
    }
    .title{
        color: ${({ color }) => color};
    }

`

export function Footer({ business = 'zyppd.in', color = '#43E896' }) {
    return (
        <FooterStyles color={color}>
            <div className="title">
                <a href="https://zyppd.in">
                    <h3>{business}</h3>
                </a>
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} {business}</p>
        </FooterStyles>
    )
}