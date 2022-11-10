import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
width: 30vw;
position: absolute;
margin-top:0px;
top: 50%;
left:50%;
transform: translate(-50%,-50%);
border: 5px;
background-color:lightcyan;
overflow: hidden;
box-shadow: 10px 10px 10px grey;
@media screen and (max-width: 480px) {
width: 100vw;
margin-top:0px;
}
`;
export const Input = styled.input`
width: inherit;
height: 120px;
font-size: larger;
position: relative;
background: ${props=>props.color ==='nada'?'nothing':props.color};
font-size: 60px;
top:0px;
@media  screen and (max-width:480px) {
width: 100vw;
height: 25vh;
}
`

export const Buttons = styled.div`
width: 100%;
height: calc(100vh - 120px);
margin: 0 ;
overflow-x: hidden;
display: grid;
grid-template-columns: repeat(4, 1fr);
background:linear-gradient(315deg, #485461 0%, #28313b 74%);
@media  screen and (max-width:480px) {
width: 100vw;
height: 75vh;
}
;
`;
export const ButtonIn = styled.input`
 height: 100px;
 width: calc(28vw /4);
 font-size: larger;
 text-align: center;
 ${props=>props.value == '='?'grid-column-start : 3; grid-column-end:5; width:15vw':1};
 background-color: ${props => !/[1-9]/.test(props.value)? 'lightblue':'#d3d3d3'};
 ${props=>props.value == '='?'background-color:#fffd20;':'#d3d3d3'};
 :hover{
    background-color: #f1f1f1;
   }
   transform: scale(1);
   @media screen and (max-width: 480px ) {
      width: calc(90vw/4);
      height: calc(70vh/5);
      ${props=>props.value == '='?'grid-column-start : 3; grid-column-end:5; width:48vw':1};
   }
 `