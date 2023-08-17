import styled, { keyframes } from "styled-components";

const orbitAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Box = styled.body`
  margin: 0;
  position: absolute;
  z-index: -10;
  right: 0;
  margin-right: 50px;
`;

const Container = styled.div`
  font-size: 10px;
  width: 40em;
  height: 40em;
  position: relative;
`;

const Sun = styled.div`
  position: absolute;
  top: 15em;
  left: 15em;
  width: 10em;
  height: 10em;
  background-color: yellow;
  border-radius: 50%;
  box-shadow: 0 0 3em white;
`;

const Planet = styled.div`
  position: absolute;
  border-style: solid;
  border-color: white transparent transparent transparent;
  border-width: 0.1em 0.1em 0 0;
  border-radius: 50%;
`;

const Earth = styled(Planet)`
  top: 5em;
  left: 5em;
  width: 30em;
  height: 30em;
  animation: ${orbitAnimation} 36.5s linear infinite;
`;

const Moon = styled(Planet)`
  top: 0;
  right: 0;
  width: 8em;
  height: 8em;
  animation: ${orbitAnimation} 2.7s linear infinite;
`;

const Satellite = styled.div`
  content: "";
  position: absolute;
  border-radius: 50%;
`;

const EarthSatellite = styled(Satellite)`
  top: 2.8em;
  right: 2.8em;
  width: 3em;
  height: 3em;
  background-color: aqua;
`;

const MoonSatellite = styled(Satellite)`
  top: 0.8em;
  right: 0.2em;
  width: 1.2em;
  height: 1.2em;
  background-color: silver;
`;

export const StyledSun = () => {
  return (
    <Box>
      <Container>
        <Sun />
        <Earth>
          <EarthSatellite />
          <Moon>
            <MoonSatellite />
          </Moon>
        </Earth>
      </Container>
    </Box>
  );
};
