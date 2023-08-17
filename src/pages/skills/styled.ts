import styled, { keyframes, css } from "styled-components";
interface Props {
    bordercolor?: string;
    skillRotate?:boolean;
    experienceRotate?:boolean;
    translateValue?:string
}

export const spinAnimation = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const SkillTitle=styled.h1`
font-size: 30px;
color: white;
margin-top: 30px;
`
export const Wrapper =styled.div`
display: flex;
justify-content: center;
@media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    height: 100%;
    justify-content: start;
   overflow: hidden;
  }
  @media only screen and (max-width: 430px) {
  padding-bottom: 70px;
  }
`;
export const JsImage = styled.img`
  cursor: pointer;
  border: 3px solid rgb(108, 161, 197);
  border-radius: 50%;
  width: 300px;
  height: 300px;
  position: absolute;
  @media only screen and (max-width: 1240px) {
    width: 250px;
    height: 250px;
  }
  @media only screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
  @media only screen and (max-width: 425px) {
    width: 170px;
    height: 170px;
  }
  @media only screen and (max-width: 320px) {
    width: 150px;
    height: 150px;
  }
`;


export const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SkillContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 600px;
  height: 600px;
  @media only screen and (max-width: 1240px) {
    width: 500px;
    height: 500px;
  }
  @media only screen and (max-width: 1024px) {
    width: 400px;
    height: 500px;
  }
  @media only screen and (max-width: 425px) {
  width: 300px;
    height: 380px;
  }
  ${({ skillRotate }) =>
        skillRotate &&
        css`
            animation: ${spinAnimation} 8s linear infinite;
        `}
`;


export const SkillItem = styled.img<Props>`
  position: absolute;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: transparent;
  border: 10px solid${(props) => props.bordercolor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2 ease;
  padding: 6px;
  @media only screen and (max-width: 1240px) {
    width: 80px;
    height: 80px;
  }
  @media only screen and (max-width: 1024px) {
    border: 5px solid ${(props) => props.bordercolor};
    width: 70px;
    height: 70px;
  }
  @media only screen and (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
  @media only screen and (max-width: 320px) {
    width: 50px;
    height: 50px;
  }
  background-size: cover;
  background-position: center;
   ${({ translateValue }) =>
   `
    transform: translate(${translateValue});
  `}

`;


// Experience Style


export const ExperienceContainer=styled.div<Props>`
width: 600px;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
${({ experienceRotate }) =>
        experienceRotate &&
        css`
            animation: ${spinAnimation} 8s linear infinite;
        `}


   @media only screen and (max-width: 1240px) {
    width: 500px;
    height: 500px;
  }
  @media only screen and (max-width: 1024px) {
    width: 350px;
    height: 350px;
  }
  @media only screen and (max-width: 425px) {
    width: 350px;
    height: 350px;
  }
`
export const ExperienceImage=styled.img`
 cursor: pointer;
  border: 3px solid rgb(108, 161, 197);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  position: absolute;

  @media only screen and (max-width: 1240px) {
    width: 150px;
    height: 150px;
  }
  
`
export const ExperienceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExperinceItem=styled.img<Props>`
 position: absolute;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: transparent;
  border: 10px solid${(props) => props.bordercolor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2 ease;
  padding: 6px;
  background-size: cover;
  background-position: center;
  position: absolute;

  ${({ translateValue }) =>
   `
    transform: translate(${translateValue});
  `}
  
  @media only screen and (max-width: 1240px) {
    width: 80px;
    height: 80px;
    
  }
 @media only screen and (max-width: 1024px) {
  border: 5px solid ${(props) => props.bordercolor};
    width:60px;
    height: 60px;
  }
  @media only screen and (max-width: 320px) {
    border: 3px solid ${(props) => props.bordercolor};
    width: 55px;
    height: 55px;
  }

`


