import styled from 'styled-components';

export const InputContent = styled.div`
    width : 100%;
    height: 3.5rem;
    display : flex;
    align-items : center;
    justify-content : flex-start;
`;

export const InputLabel = styled.label`
    width: 35%;
    height: 3.5rem;

    color : #3c4043;
    font-weight : 500;
    font-size : 1.2rem;
    text-shadow: #838383 0em 0em 0.1em;

    display: flex;
    align-items: center;
    justify-content : flex-end;
    padding-right : 0.6rem;

    white-space: nowrap;
    overflow: auto;
`; 

export const InputData = styled.input`
    width : 65%;
    height: 3.5rem;
    padding-left : 0.8rem;
    padding-right : 0.8rem;

    border : solid 0.1rem #ced4da;
    border-radius : 0.4rem;

    background-color: #ffffff; 

    color:#495057;

    text-shadow: #f0c3bfad 0.0em 0.0em 0.1em;
    transition: width 0.4s ease-in-out;  
    box-shadow: inset 0 0 0.2em #ddd;

    :focus {
        border-color:#66afe999;  
        background: #fbfbfb;
        box-shadow: inset 0 1px 1px #00000013, 0 0 4px #66afe999;
        border-width: 1.5px;
    }
`; 
