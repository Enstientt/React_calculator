import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
width: 32vw;
position: absolute;
margin-top:0px;
top: 50%;
left:50%;
transform: translate(-50%,-50%);
border: 5px;
background-color:lightcyan;
overflow: hidden;
box-shadow: 10px 10px 10px grey;
@media screen and (max-width: 350) {
height: 700px;
width: 100%;
margin-top:0px;
}
`;
export const Input = styled.input`
width: inherit;
height: 100px;
font-size: larger;
position: relative;
background: ${props=>props.color ==='nada'?'nothing':props.color};
font-size: 60px;
top:0px;
`

export const Buttons = styled.div`
width: 100%;
height: calc(100vh - 100px);
overflow-x: hidden;
display: grid;
grid-template-columns: repeat(4, 1fr);
background:linear-gradient(315deg, #485461 0%, #28313b 74%);
@media  screen and (max-width:350px) {
width: 100%;
height: 600px;
}
;
`;
export const ButtonIn = styled.input`
 height: 100px;
 width: calc(28vw /4);
 border-radius:30% ;
 font-size: larger;
 text-align: center;
 background-color: ${props => props.value === '='? 'lightblue':props.value ==='+'?'orange':props.value ==='-'?'cyan':props.value ==='*'?'red':props.value ==='Del'?'purple':'rgb(80 60 209)' };
 :hover{
    background-color: #454545;
   }
   transform: scale(1);
   @media screen and (max-width: 350px ) {
      width: calc(300px/4);
      height: calc(450px/5);
   }
 `