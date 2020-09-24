import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;    max-width: 500px;
    font-family: sans-serif;
    background: #eee;
`;

export const MainData = styled.div`
    margin-top: 100px;
`;

export const Wrapper = styled.div`
    font-family: sans-serif;
    display: flex;
    align-items: center;
    gap: 20px; 
    padding: 20px;
    display:${props => !props.show && 'none'}
    span{
        font-weight:bold;
    }
    input{
        width: 17px;
        height: 17px;
    }
    border-radius: 20px;
    padding: 10px;
    margin: 20px 0;
    margin-left:40px;


`;

export const Column = styled.div`
padding: 2px;
`
export const Observations = styled.div`
margin: 15px;
    text-align: justify;
    margin-bottom: 130px;
    margin-top:20px;

`



export const InputSearchData = styled.input`
    max-width: 300px;
    width: 80%;
    height: 25px;
    margin: 30px 0;
    position: fixed;
        top: 30px;
`;

export const Span = styled.span`
font-weight:bold;
`;

export const Calculate = styled.button`
font-family: sans-serif;
cursor:pointer;
position: fixed;
bottom: 30px;
width: 100%;
  max-width: 296px;
  height: 48px;
  margin: 30px 0;
  border-radius: 2px;
  border: solid 0;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  transition: background-color 0.2s;

  background: #F9B12A;
  color: black;



  &:hover {
    background: #fcc45d;
  }

  transition: width 0.7s linear;
`;


