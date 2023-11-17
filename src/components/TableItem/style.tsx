import styled from "styled-components";

export const Td = styled.td`
    color: black;
    padding-top: 20px;
    text-align: ${(props) => (props.align ? "center" : "start")};
    word-break: break-all;


    svg {
        width: 18px;
        height: 18px;
    }
`

export const Tr = styled.tr``

export const deleteDiv = styled.div`
    cursor: pointer;
`

export const TdSon = styled.div`
    margin-left: 0px;
    margin-right: 150px;
`

export const TdSonII = styled.div`
    margin-left: 0px;
    margin-right: 300px;
`

export const TdSonIII = styled.div`
    margin-left: 0px;
    margin-right: 320px;
`