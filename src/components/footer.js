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
        color: #43E896;
    }

`

export function Footer() {
    return (
        <FooterStyles>
            <div className="title">
                <a href="https://zyppd.in">
                    <h3>zyppd.in</h3>
                </a>
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} zyppd.in</p>
        </FooterStyles>
    )
}