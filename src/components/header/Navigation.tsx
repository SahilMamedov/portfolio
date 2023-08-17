import * as React from "react";
import { motion } from "framer-motion";
import { MenuItemvariants } from "components/shared/MenuItemVariants";

import { variants } from "./styled";
import { NavLink } from "react-router-dom";
import { links } from "components/shared/Links";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <motion.ul className="mt-9" variants={variants}>
      {links.map((link, i) => (
        <NavLink key={i} to={link.path}>
          <motion.li
            variants={MenuItemvariants}
            whileTap={MenuItemvariants.tap}
            whileHover={MenuItemvariants.hover}
            className={pathname===link.path?'text-blue-600':''}
          >
            <div className="mr-5">{link.icon}</div>
            <div>{link.name}</div>
          </motion.li>
        </NavLink>
      ))}
    </motion.ul>
  );
};

