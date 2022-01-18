import React from 'react'
import styled from 'styled-components'
import chroma from 'chroma-js'



import dompurify from 'dompurify'

export const P = ({ children }) => {
  const sanitizer = dompurify.sanitize;

  children = typeof children === 'object' ? children.join('') : children
  return (
    // children.replace(/\n/g, '<br/>') handles adding new paragraphs when appropriate by replacing the new line character '\n' with '<br/>'

    // dompurify.santize prevents any code users may have entered from running, without this users could run JS code and really mess things up.
    // Generally, try to avoid putting content in as HTML, but in this case we have to do so to get the line breaks.
    <p
      dangerouslySetInnerHTML={{ __html: sanitizer(children.replace(/\n/g, '<br/>')) }}
    >
    </p>
  )
}

export const Title = styled.h1`
  color: ${({ theme }) => theme.brandColor};
`
export const Subtitle = styled.h2`
  font-size: 1.3em;
  font-weight:${props => props.bold ? '700' : '500'};
  color: ${({ theme }) => theme.textColor};
`
export const H1 = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-weight:${props => props.bold ? '700' : '500'};
  ${props => props.style}
`

export const H2 = styled.h2`
  color: ${({ theme }) => theme.textColor};
  font-weight: ${props => props.bold ? '700' : '500'};
  ${props => props.style}
`

export const H3 = styled.h3`
  color: ${({ theme }) => theme.textColor};
  font-weight: ${props => props.bold ? '700' : '500'};
  ${props => props.style}
`

export const H4 = styled.h4`
  color: ${({ theme }) => theme.textColor};
  font-weight: ${props => props.bold ? '700' : '500'};
  ${props => props.style}
`

export const H5 = styled.h5`
  color: ${({ theme }) => theme.textColor};
  font-weight: ${props => props.bold ? '700' : '500'};
  ${props => props.style}
`