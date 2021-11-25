import React from 'react'
import styled from 'styled-components'
import dompurify from 'dompurify'
import chroma from 'chroma-js'


export const P = ({ children }) => {
  const sanitizer = dompurify.sanitize;

  children = typeof children === 'object' ? children.join('') : children
  return (
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