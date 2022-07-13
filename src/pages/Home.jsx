import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { homeVariant } from "../utils/animationVariants";
const Home = () => {
  return (
    <div className="flex justify-center items-center h-81">
      <motion.div
        className="flex flex-col gap-3"
        animate="visible"
        variants={homeVariant}
        initial="hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl xxl:text-5xl">
          Hi, Im Ariel
        </h1>
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl xxl:text-5xl">
          I develop things in the web
        </h1>
        <div className="bg-purple-900 h-2 hidden md:block lg:block xl:block xxl:block sm:w-36 md:w-48 lg:w-48 xl:w-48 xxl:w-48 md:self-end lg:self-end xl:self-end xxl:self-end relative"></div>
        <Link
          to="about"
          smooth={true}
          className="text-purple-900 border-2 border-purple-900 px-3 py-2 bg-white shadow-sm text-sm md:text-md lg:text-md xl:text-md rounded w-36 flex justify-center items-center hover:text-white hover:bg-purple-900 cursor-pointer">
          <span className="text-md md:text-lg lg:text-xl xl:text-xl xxl:text-xl font-semibold">
            About Me
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
