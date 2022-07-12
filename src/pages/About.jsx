import React from "react";
import profile from "../assets/profile.jpeg";
const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center items-center h-81 gap-10 flex-col">
      <h1 className="text-3xl font-semibold">About Me</h1>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-4">
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
      </div>
    </div>
  );
};

export default About;
