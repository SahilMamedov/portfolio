import { motion } from "framer-motion";
import styled from "styled-components";



export const Header=styled.div`
 color: white;
  @media only screen and (max-width: 430px) {
    display: none;
    }
`
export const StyledHeader=motion(Header)



export const StyledNavbarWrapper=styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 230px;
  background-color: #101a27;
`
export const NavbarWrapper=motion(StyledNavbarWrapper)



export const Img=styled.img`
width: 130px;
height: 130px;
border-radius: 50%;
border: 10px solid #2c2f3f;
`
export const StyledImg=motion(Img)



export const StyledSocialItem=styled.div`
cursor: pointer;
margin: 4px 4px 15px 4px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 6px solid #2c2f3f;

`
export const SocialItem=motion(StyledSocialItem)



export const StyledSocialBox=styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const SocialBox=motion(StyledSocialBox)


export const AvatarBox=styled.div`
display: flex;
justify-content: center;
margin: 12px 0px;
`



export const NavbarBox=styled.div`
display: flex;
flex-direction: column;
margin-top: 40px;
padding: 25px;
`


export const TitleName=styled.h1`
text-align: center;
font-size: 20px;
font-weight: 600;
margin: 12px 0px;
`



export const IconStyle={
  fontSize:'20px'
}


export const SocialIconHover={scale: 1.1,color:'#0965ee'}

export const SocialIconTansition={type: "spring",stiffness: 250,damping: 4 }

export const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
