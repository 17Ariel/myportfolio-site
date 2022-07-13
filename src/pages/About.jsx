import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutVariant } from "../utils/animationVariants";
import profile from "../assets/profile.jpeg";
const About = () => {
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
    <div
      id="about"
      className="flex justify-center items-center h-81 gap-10 flex-col">
      <motion.h1
        variants={aboutVariant}
        ref={ref}
        animate={control}
        initial="hidden"
        className="text-3xl font-bold">
        About Me
      </motion.h1>
      <motion.div
        variants={aboutVariant}
        ref={ref}
        animate={control}
        initial="hidden"
        className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-4">
        <img
          src={profile}
          alt="profile"
          className="rounded-full h-32 w-32 md:w-60 lg:w-60 xl:w-60 md:h-60 lg:h-60 xl:h-60"
        />
        <div className="flex flex-col gap-4 w-64 md:w-90 lg:w-90 xl:w-90">
          <p className="text-md md:text-xl lg:text-xl xl:text-xl xxl:text-xl leading-8">
            Hi, my name is Ariel D. Gencianeo, Im from Manaoag, Pangasinan. I
            started to code way back 2018, which is my first year in
            college.Currenlty my focus is Javascript specially the React Library
            which is currently the most popular frontend technology in
            Javascript ecosystem.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
