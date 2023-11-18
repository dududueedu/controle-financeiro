import styled from "styled-components";

export const Table = styled.table`
    table-layout: fixed;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 0px 0px 20px 20px;
    max-width: 1120px;
    margin: auto;
`
export const Thead = styled.thead``
export const Tbody = styled.tbody`
    display: block;
    width: 1075px;
    overflow: auto;
    height: 200px;
`
export const Tr = styled.tr``

export const Th = styled.th`
    color: black;
    border-bottom: inset;
    padding-bottom: 5px;
    text-align: start;
    width: ${(props) => (props.width ? props.width + "%" : "auto")};
`