import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

body{
    background-color:#ffe4b5;
}

`
export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin-left: 30%;
    margin-top: 50px;
    
`

export const TextAlignDeco = styled.p `

text-align: center;
font-size: large;
font-weight: bold;
color: #008080	;
`
export const TextAlign = styled.p `

text-align: start;
font-size: large;

`
