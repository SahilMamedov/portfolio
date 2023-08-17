import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper=styled.div`
height: 100vh;
padding: 30px 16px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
gap: 40px;

@media only screen and (max-width: 780px) {
   flex-direction: column;
   padding-bottom: 70px;
   height: 100%;
    }
   
`

export const Container=styled.div`
display: flex;
align-items: center;
gap: 20px;

@media only screen and (max-width: 1024px) {
 flex-direction: column;
}
@media only screen and (max-width: 426px) {
 flex-direction: column;
}
`


export const StyledLocationBox=styled.div`
 margin-bottom: 15px;
border-radius: 10px;
width: 100%;
height: 280px;
@media only screen and (max-width: 1024px) {
height: 190px;
}
@media only screen and (max-width: 780px) {
height: 250px;
}
`
export const LocationBox=motion(StyledLocationBox)

export const ContactTitle=styled.h1`
color:white;
font-size: 28px;
margin-bottom: 10px;
`
export const StyledContactBox=styled.div`
border: 3px solid rgba(13, 126, 233, 0.555);
padding: 20px 10px;
border-radius: 8px;
font-size: 14px;
color: white;
display: flex;
align-items: center;
cursor: pointer;
margin-bottom: 15px;
`
export const ContactBox=motion(StyledContactBox)


export const IconBox=styled.div`
border-radius: 50%;
display: flex;
width: 40px;
height: 40px;
color: white;
align-items: center;
justify-content: center;
border: 2px solid blue;
margin-right: 10px;
`



export const StyledTextField = styled.div`
label{
  color: white;
}
input {
  color: yellow;
  background-color: #1f4168;
  border-radius: 8px;
  
}
`;
export const TextFieldMessage={
  backgroundColor:'#1f4168',
  borderRadius:'8px',
}
export const SendButtonBox=styled.button`
display: flex;
width: 100%;
justify-content: center;
margin: 20px 0px;
`

export const SendButton=styled.button`
color: black;
text-align: center;
padding: 10px 20px;
border-radius: 10px;
background-color: #85a8bd;


`