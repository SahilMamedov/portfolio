import ParticlesContainer from "components/ParticlesContainer";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { styled } from "styled-components";
import myPhoto from "assest/image/myPhoto.jpg";
import { Title, Wrapper } from "./styled";
import { StyledSun } from "components/Sun";
export default function Home() {
  const [text] = useTypewriter({
    words: ["Programmer ", "And", "Front end Developer"],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });
  const Box = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    font-size: 40px;
    /* background-image: url(${myPhoto});
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vh;
    background-size: contain;
    background-attachment: fixed; */
  `;
  return (
    <main>
      <Wrapper>
        <div className="w-3/5">
          <Box>
            <Title>Hello I'm</Title>
            <div className="text-yellow-500 pl-7">
              {text} <Cursor cursorBlinking={true} cursorColor="red" />
            </div>
          </Box>
        </div>
        <StyledSun />
        <ParticlesContainer />
      </Wrapper>
    </main>
  );
}
