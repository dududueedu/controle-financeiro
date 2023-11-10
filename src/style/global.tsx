import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', Sans-Serif;
        background-color: rgba(144,48,213,255);
        color: rgba(255,255,255,255)
    }

    *{
        margin: 0;
    }
      
    .logo{
        width: 60px;
        height: 60px;
        border-radius: 100%;
    }
`;

export default Global;