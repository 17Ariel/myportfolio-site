import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { projectDescp, projectImg } from "../utils/animationVariants";
import { useInView } from "react-intersection-observer";
const Projectchild = ({ src, title, description, code, live }) => {
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
    <div className="flex flex-row gap-8 flex-wrap justify-center">
      <motion.img
        ref={ref}
        animate={control}
        initial="hidden"
        variants={projectImg}
        src={src}
        alt={src}
        transition={{ duration: 0.6 }}
        className=" h-60 w-80 sm:h-72 sm:w-96 md:h-72 md:w-96 lg:h-80 lg:w-project xl:h-80 xl:w-project"
      />
      <motion.div
        className="flex flex-col gap-4 w-96 items-center"
        ref={ref}
        animate={control}
        initial="hidden"
        transition={{ duration: 0.6 }}
        variants={projectDescp}>
        <h2 className="text-xl">{title}</h2>
        <p className="text-lg text-center">{description}</p>
        <div className="flex gap-4">
          <a
            href={code}
            className="font-semibold bg-purple-900 border-2 border-purple-900 px-3 py-2 text-white shadow-sm rounded text-sm md:text-md lg:text-md xl:text-md w-36 flex justify-center items-center hover:bg-white hover:text-purple-900 cursor-pointer">
            Source Code
          </a>
          <a
            href={live}
            className="font-semibold text-purple-900 border-2 border-purple-900 px-3 py-2 bg-white shadow-sm rounded text-sm md:text-md lg:text-md xl:text-md w-36 flex justify-center items-center hover:text-white hover:bg-purple-900 cursor-pointer">
            See Live
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Projectchild;
