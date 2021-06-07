import { createGlobalStyle } from 'styled-components'
import chroma from 'chroma-js'

const commonStyles = {
    shadow: '0 1px 1px rgba(0,0,0,0.15), 0 2px 2px rgba(0,0,0,0.10), 0 4px 4px rgba(0,0,0,0.05);',
    expandedShadow: '0 7px 18px rgba(0,0,0,0.1), 0 4px 5px rgba(0,0,0,0.15)',
    warning: '#db3a32',
    borderRadius: '.2em'
}

const stateColors = {
    positive: '#43E896',
    success: '#43E896',
    error: '#E84747',
    negative: '#E84747',
    warning: '#F4D217',
    disabled: '#9AA6B3',
    default: '#323233'
}


export const Themes = (brandColor = "#43E896", range = ["white", "#ededed"]) => {

    let pallete = range.length && chroma.scale(range)
        .mode('lch').colors(3)

    const mainColor = range ? range[0] : theme
    let textColor = chroma(range[0]).luminance() > 0.4 ? '#333' : 'whitesmoke'

    return {
        ...commonStyles,
        pallete,
        textColor: textColor,
        secondaryTextColor: chroma(textColor).darken(1),
        disabledForeground: chroma(pallete[0]).darken(0.3),
        foreground: pallete[0],
        middleground: pallete[1],
        background: pallete[2],
        highlight: 'red',
        brandColor: brandColor,
        stateColors: {
            ...stateColors
        }
    }
}

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
    }

    body, html{
        padding: 0;
        margin: 0;
        background: whitesmoke;
        font-family: Quicksand, Helvetica, sans-serif;
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textColor};
        scroll-behavior: smooth;
    }
    
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
    svg{
        min-height: 25px;
        min-width: 25px;
    }
    p a {
        text-decoration: underline;
    }
    
    .zyppd-background{
        background: rgb(67,232,150);
        background: radial-gradient(
        farthest-side at bottom left,
        rgba(67,232,150,1), 
        transparent
        ),
        radial-gradient(
        farthest-corner at bottom right,
        rgba(105, 50, 200, 1), 
        rgba(67,232,150,1)
        );

    }

    .zyppd__menu{
        z-index: 40;
        position: relative;
    }
    
`


