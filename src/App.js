import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faCss,
  faNodeJs,
  faGitAlt,
  faFigma,
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faServer, faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import Foto from "./assets/foto.jpeg";
import KPI from "./assets/logo-kpi-fix-1633658890.png";
import SMK from "./assets/smk1.png";
import ITK from "./assets/Lambang_ITK.png";
import Liberty from "./assets/liberty.png";
import Game from "./assets/itkombat.jpg";

function App() {
  const [showFullInfo, setShowFullInfo] = useState(false);

  const toggleInfo = () => {
    setShowFullInfo(!showFullInfo);
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      <nav className="fixed top-0 left-0 w-full  bg-transparent backdrop-blur-lg z-50">
        <div className="max-w-6xl mx-auto text-lg flex justify-center items-center py-4">
          <ul className="flex space-x-8 text-white">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="hero"
        className="relative h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 text-white flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 text-center">
          <div className="flex justify-center items-center  mb-4">
            <h1 className="text-5xl font-bold">Hello, I'm</h1>
            <ReactTyped
              className="text-yellow-400 text-5xl font-bold ml-3"
              strings={["Alex", "Ananda", "Romadhona"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="text-lg font-light tracking-wide mb-6">
            Welcome to My Digital Portfolio
          </p>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className=" bg-yellow-400 text-black px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition cursor-pointer"
          >
            Know Me Better.
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={Foto}
              alt="Your Portrait"
              className="rounded-full shadow-lg w-3/4 md:w-3/4"
            />
          </div>
          {/* Description */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed mb-4">
              I'm a Frontend Web Developer with a passion for designing
              user-friendly and efficient interfaces. My expertise includes
              React, Tailwind CSS, and modern web technologies.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, I enjoy exploring nature, watching football,
              or playing video games.
            </p>
            {/* Button to toggle the display of full info */}
            <button
              onClick={toggleInfo}
              className="mt-4 bg-yellow-400 text-black px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
            >
              {showFullInfo ? "Hide Bio." : "Show Bio."}
            </button>

            {/* Modal Section */}
            {showFullInfo && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-white">
                      Full Bio
                    </h2>
                    <button
                      onClick={toggleInfo}
                      className="text-white text-2xl font-bold"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="mt-4 text-white">
                    <p>
                      <strong>Name:</strong> Alex Ananda Romadhona
                    </p>
                    <p>
                      <strong>Birth Date:</strong> 11 October 2004
                    </p>
                    <p>
                      <strong>Place of Birth:</strong> Bontang, Indonesia
                    </p>
                    <p>
                      <strong>Address:</strong> Balikpapan, Indonesia
                    </p>
                    <p>
                      <strong>Interest:</strong> Frontend Web Development
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-gray-700">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Skill Item */}
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon
                icon={faReact}
                className="text-blue-400 text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold">React</h3>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon
                icon={faJs}
                className="text-yellow-400 text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold">JavaScript</h3>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon
                icon={faCss}
                className="text-cyan-400 text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold">Tailwind CSS</h3>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon
                icon={faNodeJs}
                className="text-green-500 text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold">Node.js</h3>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon
                icon={faGitAlt}
                className="text-orange-500 text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold">Git</h3>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon
                icon={faServer}
                className="text-gray-300 text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold">REST API</h3>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon
                icon={faCode}
                className="text-red-400 text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold">HTML & CSS</h3>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon
                icon={faFigma}
                className="text-purple-400 text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold">Figma</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Experience and Education Section */}
      <section id="experience" className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Experience & Education
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Experience Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                Work Experience
              </h3>
              <ul className="space-y-8">
                <li className="relative flex items-start">
                  {/* Logo */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-gray-700">
                    <img
                      src={KPI}
                      alt="Company Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Details */}
                  <div className="ml-6">
                    <h4 className="text-xl font-bold">Internship</h4>
                    <p className="text-sm text-gray-400">
                      PT Kaltim Parna Industri - April to June 2021
                    </p>
                    <p className="text-sm text-gray-300 mt-2">
                      Developed a landing page for PT Kaltim Parna Industri
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                Education
              </h3>
              <ul className="space-y-8">
                <li className="relative flex items-start">
                  {/* Logo */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-gray-700">
                    <img
                      src={ITK}
                      alt="Institution Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Details */}
                  <div className="ml-6">
                    <h4 className="text-xl font-bold">
                      Bachelor's in Computer Science
                    </h4>
                    <p className="text-sm text-gray-400">
                      Institut Teknologi Kalimantan - 2022 to Present
                    </p>
                    <p className="text-sm text-gray-300 mt-2">
                      Currently pursuing studies in software development,
                      focusing on advanced programming and system design.
                    </p>
                  </div>
                </li>
                <li className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-gray-700">
                    <img
                      src={SMK}
                      alt="Institution Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold">High School Diploma</h4>
                    <p className="text-sm text-gray-400">
                      SMK Negeri 1 Bontang - 2019 to 2022
                    </p>
                    <p className="text-sm text-gray-300 mt-2">
                      Focused on software engineering, gaining foundational
                      skills in programming and system development.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-700">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src={Liberty} alt="Project 1" className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Liberty Fishing Pond Website
                </h3>
                <p className="text-sm">
                  This project is a liberty fishing tourism website. The
                  technology used is React and Tailwind CSS, and the development
                  of this website is intended to promote this fishing spot and
                  to make it easier to reserve fishing schedules.
                </p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src={Game} alt="Project 2" className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">ITKombat</h3>
                <p className="text-sm">
                  a 2D fighting game set in the Institut Teknologi Kalimantan
                  (ITK). The characters, buildings and other elements are
                  inspired by ITK. The technologies used are Unity and Aseprite
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            I'm open to opportunities and collaborations! Feel free to reach
            out.
          </p>

          {/* Contact Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="flex flex-col items-center justify-center bg-gray-700 rounded-lg shadow-lg p-6">
              <p className="text-xl font-semibold mb-4">Let's Connect!</p>
              <p className="text-gray-400 mb-4">
                Email: anandaalex573@gmail.com
              </p>
              <p className="text-gray-400 mb-4">Phone: +6282312136060</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/alex.ar.73932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-3xl hover:text-blue-400"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://instagram.com/_anandaalexx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 text-3xl hover:text-pink-400"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://linkedin.com/in/alex-ananda-romadhona-50aa53291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-3xl hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/anandaalexx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-3xl hover:text-gray-300"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-700 rounded-lg shadow-lg p-6">
              <form>
                <div className="mb-4">
                  <label className="text-left block text-lg font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring focus:ring-yellow-400"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-left block text-lg font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring focus:ring-yellow-400"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-left block text-lg font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring focus:ring-yellow-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-300 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-gray-900 text-center">
        <p className="text-sm">
          &copy; 2024 Alex Ananda Romadhona. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
