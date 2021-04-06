
import styled from 'styled-components'
import chroma from 'chroma-js'

// export const Message = styled.p`
//     width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
//     border-radius: ${({ theme }) => theme.borderRadius};
//     background: ${({ type }) => theme.stateColors['error']};
// `

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
        // color: ${ ({ theme, type }) => {
        //     return chroma(theme.stateColors[type]).luminance() > 0.4 ? '#333' : 'whitesmoke'
        // }};

// export const SuccessMessage = styled(Message)`
//     color: green;
//     background: ${({ theme }) => theme.stateColors.success};
//     color: whitesmoke;
// `