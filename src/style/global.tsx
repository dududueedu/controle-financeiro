import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
    }
    
    body {
        font-family: 'Poppins', Sans-Serif;
        background-color: rgba(144,48,213,255);
        color: rgba(255,255,255,255)
    }
      
    .logo{
        width: 60px;
        height: 60px;
        border-radius: 100%;
    }
`;

export default Global;