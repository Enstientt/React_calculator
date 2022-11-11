import styled, {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
body{
   display:flex;
   justify-content:center;
   align-items:center;
   background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgb(70, 252, 170) 100%);

}
`;
export const Container = styled.div`
height: 86vh;
width: 25.7vw;
position: absolute;
margin-top:0px;
top: 50%;
left:50%;
transform: translate(-50%,-50%);
outline: 5px red;
background-color:lightcyan;
overflow: hidden;
@media screen and (max-width: 480px) {
width: 100vw;
height: 100vh;
}
`;
export const Input = styled.input`
width:  344px;
height: 96px;
font-size: larger;
position: relative;
background-color:#c5c5c5;
border: 1px solid black;
font-size: 48px;
top:0px;
${props=>props.color !=='Nada'?'opacity: 26.5%; border:1px dashed black':1};
@media  screen and (max-width:480px) {
width: 100vw;
height: 24vh;
}
`

export const Buttons = styled.div`
width: 348px;
height: calc(85vh - 96px);
margin: 0 ;
overflow-x: hidden;
display: grid;
position: relative;
grid-template-columns: repeat(4, 1fr);
border: 1px solid black;
background:linear-gradient(315deg, #485461 0%, #28313b 74%);
@media  screen and (max-width:480px) {
width: 100vw;
height: 75vh;
}
;
`;
export const ButtonIn = styled.input`
 height: 80px;
 width: calc(24vw /4);
 font-size: larger;
 text-align: center;
 outline: none;
 opacity :0.6 ;
 cursor: pointer;
 ${props=>props.value == '='?'grid-column-start : 3; grid-column-end:5; width:15vw;':1};
 background-color: ${props => !/[1-9]/.test(props.value)? '#8c8c8c':'#b9b9b9'};
 transition: all 0.4s ease-in-out;
 ${props=>props.value == '='?'background-color:#fffdaa;':'#d3d3d3'};
 :hover{
    background-color: #c9c9f9;
   }
   transform: scale(1);
   @media screen and (max-width: 480px ) {
      width: calc(90vw/4);
      height: calc(70vh/5);
      ${props=>props.value == '='?'grid-column-start : 3; grid-column-end:5; width:48vw':1};
   }
 `