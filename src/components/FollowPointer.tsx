import "../App.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../hook/use-follow-pointer";
import { FollowPointerBox } from "./styled";

export default function FollowPointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <FollowPointerBox>
      <motion.div
        ref={ref}
        className="w-5 h-5 absolute  rounded-full bg-sky-500 "
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 300,
          restDelta: 0.001,
        }}
      />
    </FollowPointerBox>
  );
}
