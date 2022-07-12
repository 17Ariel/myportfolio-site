import React from "react";
const Contact = () => {
  return (
    <div className="h-78 flex flex-col justify-center items-center gap-8 bg-slate-50">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-xl">Wanna work with me? That's great</h2>
        <a
          href="mailto:gencianeo.arield@gmail.com"
          className="text-purple-900 text-lg font-semibold border-2 border-purple-900 px-3 py-2 bg-white shadow-sm rounded w-36 flex justify-center items-center focus:bg-purple-900 focus:text-white hover:text-white hover:bg-purple-900 cursor-pointer">
          Email Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
