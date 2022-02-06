import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { Paleta } from "./theme";

export const GlobalStyles = createGlobalStyle`
    ${normalize}
    ${Paleta}

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        color: var(--black);
        font-family: var(==font-primary);
    }
    ol, ul {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    button {
        cursor: pointer;
        border: none;
    }
    button, input{
        outline: none;
    }
    body {
        padding-top: 19px;
    }
    /* scrollbar style */
    ::-webkit-scrollbar{
        
    }
    ::-webkit-scrollbar:hover{
      
    }
    ::-webkit-scrollbar-track{
      
    }
    ::-webkit-scrollbar-thumb{
      
    }
    ::-webkit-scrollbar-thumb:hover {
    }
`;
