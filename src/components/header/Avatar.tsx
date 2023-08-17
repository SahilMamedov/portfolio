import React from "react";
import Photo from "../../public/assest/image/myPhoto.jpg";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import myPhoto from "assest/image/myPhoto.jpg";
import { StyledImg } from "./styled";
import { MenuItemvariants } from "components/shared/MenuItemVariants";
const AvatarBox = styled.div``;

const Avatar = () => {
  const control = useAnimation();

  return (
    <AvatarBox>
      <motion.div variants={MenuItemvariants}>
        <StyledImg
          onClick={() => {
            control.start({
              borderRadius: ["45%", "40%", "35%", "30%", "25%"],
              transition: {
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeatDelay: 1,
              },
              scale: [1, 1.1, 1.2, 1, 1],
              rotate: [0, 0, 360, 360, 360],
            });
          }}
          onDoubleClick={() => {
            control.start({
              borderRadius: ["25%", "30%", "35%", "45%", "50%"],
              transition: { duration: 2 },
            });
          }}
          animate={control}
          alt=""
          src={myPhoto}
        />
      </motion.div>
    </AvatarBox>
  );
};
export default Avatar;
