import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    bottom: 10px;
    border: none;
    border-radius: 2px;
    width: auto;
    display:flex;
    cursor: pointer;
`;

export const Input = styled.input`
    display: block;
    padding: 0.5em;
    margin: 0.1em;
    border: none;
    border-radius: 3px;
    width: 190px;
    &:focus-visible{
        outline: 1px solid #eee!important;
    }
`;

export const TextArea = styled.textarea`
    display: block;
    padding: 0.5em;
    margin: 0.5em 0.5em 0.5em 0!important;
    border: none;
    border-radius: 3px;
    width: 190px;
    &:focus-visible{
        outline: 1px solid #eee!important;
    }
`;

export const Button = styled.button`
    border: 1px solid #787878;
`