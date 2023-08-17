import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import {
  AvatarBox,
  NavbarBox,
  NavbarWrapper,
  StyledHeader,
  TitleName,
  variants,
} from "./styled";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import Avatar from "components/header/Avatar";
import Socials from "./Socials";
import { MenuItemvariants } from "components/shared/MenuItemVariants";
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 5,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
};

export const Header = () => {
  const [isOpen, toggleOpen] = useCycle(true, false);
  const containerRef = useRef(null);

  return (
    <div className="z-50">
      <StyledHeader
        variants={variants}
        initial={true}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <NavbarWrapper variants={sidebar}>
          <NavbarBox>
            <AvatarBox>
              <Avatar />
            </AvatarBox>
            <motion.div variants={MenuItemvariants}>
              <TitleName>Sahil Mamedov</TitleName>
            </motion.div>
            <Socials />
            <Navigation />
          </NavbarBox>
        </NavbarWrapper>

        <MenuToggle toggle={() => toggleOpen()} />
      </StyledHeader>
    </div>
  );
};
