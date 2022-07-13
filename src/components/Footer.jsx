import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { contactVariant } from "../utils/animationVariants";

const Footer = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <>
      <motion.footer
        variants={contactVariant}
        ref={ref}
        animate={control}
        initial="hidden"
        className="w-full h-footer flex flex-col justify-center items-center gap-4 px-4 py-2 bg-purple-900 shadow text-white">
        <p className="text-md">&copy; 2022. All rights reserved ARIELG </p>
      </motion.footer>
    </>
  );
};

export default Footer;
