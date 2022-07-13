import React from "react";
import kapik from "../assets/kapik.png";
import recipegram from "../assets/Recipegram.png";
import Projectchild from "../components/Projectchild";
const Project = () => {
  return (
    <div className="min-h-81 flex flex-col justify-center items-center gap-10 bg-slate-50 p-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <Projectchild
        src={kapik}
        title="Kapik"
        description="A simple coffee landing page, develop using React, Tailwindcss and
        Framer Motion."
        code="https://github.com/17Ariel/kapik"
        live="https://17ariel.github.io/kapik/"
      />
      <Projectchild
        src={recipegram}
        title="Recipegram"
        description="A Recipe app develop using React, Tailwindcss and Spoonacular api.
        This project allows the user to search for different types of recipes as well as displaying 
        some random recipe.
        ."
        code="https://github.com/17Ariel/recipegram"
        live="https://recipegram.vercel.app/"
      />
    </div>
  );
};

export default Project;
