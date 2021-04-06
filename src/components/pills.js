import styled from 'styled-components'
import chroma from 'chroma-js'

export const Pill = styled.div`
    border: 2px solid ${({})};
    padding: .5em; 
    background: ${({ theme }) => theme.background}; 
    border-radius: calc(${({ theme }) => theme.borderRadius});
    border: ${ ({ theme }) => `1px solid ${chroma(theme.middleground).darken(0.5)}`};
`