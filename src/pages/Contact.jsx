import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { contactVariant } from "../utils/animationVariants";
const Contact = () => {
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
    <div className="h-78 flex flex-col justify-center items-center gap-8 bg-slate-50">
      <motion.h1
        variants={contactVariant}
        ref={ref}
        animate={control}
        initial="hidden"
        className="text-3xl font-bold">
        Contact
      </motion.h1>
      <motion.div
        variants={contactVariant}
        ref={ref}
        animate={control}
        initial="hidden"
        className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-md sm:text-lg md:text-lg lg:text-xl xl:text-xl">
          Wanna work with me? That's great
        </h2>
        <a
          href="mailto:gencianeo.arield@gmail.com"
          className="text-purple-900 text-lg font-semibold border-2 border-purple-900 px-3 py-2 bg-white shadow-sm rounded w-36 flex justify-center items-center hover:text-white hover:bg-purple-900 cursor-pointer">
          Email Me
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
