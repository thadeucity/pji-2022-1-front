import React from 'react'
import { Global, css } from "@emotion/react";

const cssReset = css`
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
  blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em,
  img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u,
  i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table,
  caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details,
  embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output,
  ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  body {
    position: relative;
    line-height: 1;
    color: #444;
    font-family: sans-serif;
  }

  img {
    position: relative;
  }

  *, :before, :after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  .noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }

  @media (max-width: 1024px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`

export const GlobalStyle: React.FC = () => <Global styles={[cssReset]} />