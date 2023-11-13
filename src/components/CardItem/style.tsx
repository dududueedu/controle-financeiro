import styled from 'styled-components'

export const CardItemC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px 5px;
    width: 30%;
    color: #000;

    @media(max-width: 750px){
        width: 20%;

        p {
            font-size: 12px;
        }

        span {
            font-size: 12px;
        }

        svg {
            display: none;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
    margin: 0px 0px 10px 0px;

    svg {
        width: 25px;
        height: 25px; 
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
`;

export const Total = styled.p`
    font-size: 30px;
    font-weight: bold;
`;

export const TotalInput = styled.p`
    font-size: 30px;
    font-weight: bold;
    color: green;
`;

export const TotalOutput = styled.p`
    font-size: 30px;
    font-weight: bold;
    color: red;
`;