import React from 'react'
import styled, { keyframes } from 'styled-components'
import chroma from 'chroma-js'

const gradientAnimation = keyframes`
    0%{
        opacity: 0.2;
    }
    50%{
        opacity: 0.3;
    }
    100%{
        opacity: 0.2;
    }
    `
// 0%{background-position:14% 0%}
// 50%{background-position:87% 100%}
// 100%{background-position:14% 0%}


const widthAnimation = keyframes`
  from {
    transform: scaleX(0.8);
}

to {
    transform: scaleX(1);
  }
`;


export const SkeletonListItem = styled.div`
    display: inline-block;
    width: 100%;
    background-size: 400% 400%;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: linear-gradient(45deg, ${({ theme }) => `${theme.textColor}, ${chroma(theme.textColor).brighten(.4)}`});
    animation: ${gradientAnimation} 4s ease-out infinite;
    position: relative;
    padding: .5em;
    &:not(:last-child){
        margin-bottom: .3em;
    }
    `


export const SkeletonText = styled.div`
    transform-origin: left;
    background: ${({ theme }) => chroma(theme.textColor).darken(1)};
    border-radius: ${({ theme }) => theme.borderRadius};
    height: ${({ height }) => height}em; 
    width: ${({ width }) => width}%;
    position: asbolute;
    animation: ${widthAnimation} 4s ease-out infinite;
    animation-direction: alternate;

  &:not(:last-child){
      margin-bottom: .3em;
  }
`

export function Skeleton({ amount = 3 }) {
    return (
        Array.from({ length: amount }).map((item, i) => {
            return (
                <SkeletonListItem
                    key={i}
                >
                    {Array.from({ length: Math.max(1, Math.round(Math.random() * 3)) }).map((item, i) => {
                        return (
                            <SkeletonText
                                key={i}
                                width={Math.max(30, Math.floor(Math.random() * 100))}
                                height={Math.max(2, Math.random() * 3)}
                            ></SkeletonText>
                        )
                    })}
                </SkeletonListItem>

            )
        })
    )
}