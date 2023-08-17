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
  ExperienceItem,
  Container,
  SkillTitle,
  Wrapper,
} from "./styled";

const Skills = () => {
  const [skillRotate, setskillRotate] = useState(true);
  const [ExperienceRotate, setExperienceRotate] = useState(true);
  const [open, setOpen] = useState<boolean>(false);
  const [itemId, setItemId] = useState<number>(0);

  const handleClickExperience = () => {
    setExperienceRotate(!ExperienceRotate);
    if (ExperienceRotate) setItemId(0);
  };

  return (
    <Container>
      <SkillTitle>My Skills</SkillTitle>
      <Wrapper>
        <ExperienceBox>
          <ExperienceContainer experienceRotate={ExperienceRotate}>
            {ExperienceImages.map((img) => (
              <Tooltip
                key={img.id}
                open={itemId === img.id}
                placement="top"
                title={ExperienceRotate ? "" : `${img.tooltip}`}
                disableHoverListener={!img.tooltip}
              >
                <ExperienceItem
                  translateValue={img.translateValue}
                  src={img.src}
                  bordercolor={img.borderColor}
                  onClick={() => setItemId(img.id)}
                />
              </Tooltip>
            ))}
          </ExperienceContainer>
          <Tooltip placement="top" title={ExperienceRotate ? "" : "Experience"}>
            <ExperienceImage
              onClick={handleClickExperience}
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
