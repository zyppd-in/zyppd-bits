import styled from 'styled-components'
import chroma from 'chroma-js'
import { motion } from 'framer-motion'
export const Group = styled(motion.div)`
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: .5em;
    margin: 1em 0;
    background: ${({ theme }) => theme.middleground};
    border: ${({ theme, type }) => `.1rem solid ${type ? chroma(theme.stateColors[type]).brighten(0.3) : chroma(theme.middleground).brighten(0.4)}`};

`