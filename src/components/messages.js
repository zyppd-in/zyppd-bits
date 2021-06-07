
import styled from 'styled-components'
import chroma from 'chroma-js'

export const Message = styled.div`
    padding: .5em;
    display: inline-block;
    text-align: center;
    border-radius: ${({ theme }) => theme.borderRadius};
    width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
    background: ${({ theme, type }) => type ? theme.stateColors[type] : theme.textColor};
    color: ${({ theme }) => theme.foreground};
    font-weight: 500;
    ${({ type, theme }) => {
        return type === 'negative' ? `color: whitesmoke`
            : type === 'warning' || type === 'positive' ? `color: #333;` : ``
    }};   
`