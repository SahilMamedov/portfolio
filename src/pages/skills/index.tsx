import jsImage from "../../assest/image/js.png";
import { ExperienceImages, SkillImages } from "components/SkillsImages";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import experinceImage from "../../assest/image/experience.png";
import {
  ExperienceBox,
  SkillsBox,
  JsImage,
  SkillContainer,
  SkillItem,
  ExperienceContainer,
  ExperienceImage,
  ExperinceItem,
  Container,
  SkillTitle,
  Wrapper,
} from "./styled";

const Skills = () => {
  const [skillRotate, setskillRotate] = useState(true);
  const [ExperienceRotate, setExperienceRotate] = useState(true);
  return (
    <Container>
      <SkillTitle>My Skills</SkillTitle>
      <Wrapper>
        <ExperienceBox>
          <ExperienceContainer experienceRotate={ExperienceRotate}>
            {ExperienceImages.map((img) => (
              <Tooltip
                placement="top"
                title={ExperienceRotate ? "" : `${img.tooltip}`}
              >
                <ExperinceItem
                  translateValue={img.translateValue}
                  src={img.src}
                  bordercolor={img.borderColor}
                />
              </Tooltip>
            ))}
          </ExperienceContainer>
          <Tooltip placement="top" title={ExperienceRotate ? "" : "Experience"}>
            <ExperienceImage
              onClick={() => setExperienceRotate(!ExperienceRotate)}
              src={experinceImage}
            />
          </Tooltip>
        </ExperienceBox>
        <SkillsBox>
          <SkillContainer skillRotate={skillRotate}>
            {SkillImages.map((img) => (
              <Tooltip
                placement="top"
                title={skillRotate ? "" : `${img.tooltip}`}
              >
                <SkillItem
                  translateValue={img.translateValue}
                  bordercolor={img.borderColor}
                  src={img.src}
                />
              </Tooltip>
            ))}
          </SkillContainer>
          <Tooltip placement="top" title={skillRotate ? "" : "Javascript"}>
            <JsImage
              src={jsImage}
              onClick={() => setskillRotate(!skillRotate)}
            />
          </Tooltip>
        </SkillsBox>
      </Wrapper>
    </Container>
  );
};

export default Skills;
