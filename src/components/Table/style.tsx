import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    max-width: 1120px;
    margin: 20px auto;
`
export const Thead = styled.thead``
export const Tbody = styled.tbody`
`
export const Tr = styled.tr``

export const Th = styled.th`
    color: black;
    border-bottom: inset;
    padding-bottom: 5px;
    text-align: start;
    width: ${(props) => (props.width ? props.width + "%" : "auto")};
`