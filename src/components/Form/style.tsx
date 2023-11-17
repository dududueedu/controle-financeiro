import styled from 'styled-components'

export const Container = styled.div`

    max-width: 1120px;
    margin: 20px auto;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    padding: 20px 0px;
    gap: 10px;

    @media(max-width: 750px){
        display: grid;
    }
`

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const Label = styled.label`
    color: black;
`

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 20px;
    border: 2px solid #ccc;
    cursor: pointer;
`

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-left: 10px;
        margin-right: 20px;
        accent-color: black;
        margin-top: 0;
    }
`

export const Button = styled.button`
    cursor: pointer;
    border-radius: 5px;
    padding: 5px 10px;
    border: none;
    color: white;
    background: teal;
`