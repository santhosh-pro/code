import styled from 'styled-components';

export const ObjectEditor = styled.div`
    width : 100vw;
    height: 100vh auto;
    background-color : #faf8f9;
    
`;

export const ObjectEditorHeader = styled.div`
    width : 100%;
    height : 4rem;

    display : flex;
    align-items : center;
    justify-content : flex-end;

    background-color: #06aeaa; 

    label {
        font : 500 2rem poppins;
        margin-right : 1rem;
        color : #fff;
    }

    border-top-right-radius: 0.8rem;
    border-top-left-radius: 0.8rem;
`;

export const ToolBarContainer = styled.div`
    width : 100%;
    height : 4rem;
    background-color : #fff;

    padding-left : 0.8rem;
    padding-right : 0.8rem;

    border-top: solid 0.1rem;
    border-bottom: solid 0.1rem;
    border-color:var(--color-line-in-white);
`

export const ToolBarButtons = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    
    button {

        display: flex;
        justify-content: center;
        align-items: center;
        border-color:var(--color-line-in-white);
        border-radius:2rem;
        border-style: solid;
        border-width: 0;
        box-shadow: 0;
        background-color: transparent;
        opacity: 1;
        transition: background-color 15ms; 
        height: 3.3rem;
        width: 3.3rem;
        cursor: pointer;

        :hover {
            background-color: #f2f2f2;
        }

    }
`

/*
 img {
   
            -moz-transform: scale(0.90);
            -webkit-transform: scale(0.90);
            transform: scale(0.90); 

            border-radius:2rem;

        } 
*/

export const ObjectView = styled.div`
    width : 100%;
    height: 100%;
    
    display : flex;
    align-items : start;
    justify-content : center;

    padding : 1rem;
   
`;

export const ObjectContent = styled.div`
    width: 100%;
    height: 100%;
    background-color : #fff;
    border-radius : 0.8rem;
`; 

export const Layout = styled.div`
    width: 100%;
    height : auto;
    
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : flex-start;

    padding : 0.4rem;
`;

//${ props => `${props.color}` };

export const LayoutContent = styled.div`
    width : 100%;
    height: auto;
    
    display : grid;
    grid-template-columns : repeat( ${props => `${ props.columns }` }, 1fr );
  
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 0.5rem;

    grid-column-gap : 0.5rem;
    grid-row-gap : 0.5rem;
`; 

export const LayoutTitle = styled.header`

    width: 100%;    
    height: 2.5rem;

    display: flexbox;
    justify-content: flex-start;
    align-items: center;

    background-color : #fff;

    padding-left : 2rem;

    label {
        font-weight: bold;    
        font-size: 1.7rem;
        color:#303030;
        height: 100%; 
        text-align: center;
    }

    hr {
        background-color: #fff;
        position: relative;
        background-image: linear-gradient(169.9deg, #d7d8da, transparent);
        border: 0;
        height: 0.1rem;
        left: 1.5rem;    
        top: 1.1rem;
    }
`;

export const ObjectLayout = styled.div`
    width : 100%;
    height: 100%;
    background-color : #fff;
    
    display : grid;
    grid-template-columns : repeat( ${props => `${ props.columns }` }, 1fr );
  
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

    grid-auto-rows: 6rem;
    grid-column-gap: 1rem;

    background-color: #fff;
`; 

export const Input = styled.div`
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

export const ObjectList = styled.div`
    width  : 100%;
    height : 100%;
  
    border-radius : 0.8rem;
    border: solid 0.01rem;
    border-color:var(--color-line-in-white);

`;

export const ObjectListToolBar = styled.div`
    width : 100%;
    height: 3.5rem;

    background: linear-gradient(to bottom,  #ffffff 0%,#fff9f9 100%,#fff9f9 60%,#ffffff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9f9f9', endColorstr='#f9f9f9',GradientType=0 );
    box-shadow:#f0c3bfad 0.0em 0.0em 0.1em; 

    border-top-left-radius : 0.8rem;
    border-top-right-radius : 0.8rem;

    padding-left : 0.4rem;

    display: flex;
    align-items: center;
    justify-content: start;
    
    button {

        display: flex;
        justify-content: center;
        align-items: center;
        border-color:var(--color-line-in-white);
        border-radius:2rem;
        border-style: solid;
        border-width: 0;
        box-shadow: 0;
        background-color: transparent;
        opacity: 1;
        transition: background-color 15ms; 
        height: 3rem;
        width: 3rem;
        cursor: pointer;

        img {
            display : flex;
            align-items : center;
            justify-content : center;
        }

        :hover {
            background-color: #f2f2f2;
        }

    }
`;

export const ObjectListContent = styled.div`
    width: 100%;
    height: 100%;
    display : flex;
    align-items: center;
    justify-content : flex-start;
        
    border-radius : 0.8rem;
    padding : 0.2rem;

    display : inline-flex;
    justify-content : flex-start;
    align-items : flex-start;

`;

export const ObjectListMaster = styled.div` 
    width : 20%;
    height: 100%;
    background-color: #fff;

    padding : 0.4rem;

    table {
        width : 100%;
        height : 100%;
        background-color : #fff;
        border-right : solid 0.1rem var(--color-line-in-white);
    }

`;

export const ObjectListSeparator = styled.div`
    width : 0.15rem;
    height : 2rem;
    align-self : center;
   
    border-right : solid 0.1rem var(--color-line-in-white);
    border-left : solid 0.1rem var(--color-line-in-white);

    display : flex;
    align-items : center;
    justify-content : center;   

    cursor: col-resize; 

`;

export const ObjectListDetail = styled.div`
    width : 100%;
    height: 100%;
    background-color : #fff;
`;