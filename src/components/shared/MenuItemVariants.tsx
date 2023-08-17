export const MenuItemvariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  hover: {
    scale: 1.1,
    color: "#0965ee",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  tap: {
    scale: 0.95,
  },
};
