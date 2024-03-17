import React from "react";
import Link from "next/link";
const Projects = () => {
  return (
    <section className=" w-full mx-auto bg-gray-950 pt-10 min-h-96 ">
      <main className=" w-3/4 lg:w-1/2 mx-auto">
        <div className="font-Josefin">
          <h2 className="text-white text-xl lg:text-3xl font-bold ">
            Projects
          </h2>
        </div>
        <div className="py-4">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <li className="border-2 text-white p-3 rounded-xl leading-loose lg:leading-loose">
              <Link href="https://devtales.netlify.app">
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg ">
                  Devtales
                </h2>
              </Link>
              <p>MERN based Blogging website.</p>
            </li>
            <li className="border-2 text-white p-3 rounded-xl leading-loose lg:leading-loose">
              <Link href="https://letscooktasty.netlify.app">
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg ">
                  Letscooktasty
                </h2>
              </Link>
              <p>MERN based Recipe sharing website.</p>
            </li>
            <li className="border-2 text-white p-3 rounded-xl leading-loose lg:leading-loose">
              <Link href="https://myapimaster.netlify.app">
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg ">
                  API-Master
                </h2>
              </Link>
              <p>React.js based website to test APIs during Development.</p>
            </li>
            <li className="border-2 text-white p-3 rounded-xl leading-loose lg:leading-loose">
              <Link href="https://edittextwithrajat.netlify.app">
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg ">
                  Edit-Text
                </h2>
              </Link>
              <p>Basic React.js based text editor.</p>
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
};

export default Projects;
