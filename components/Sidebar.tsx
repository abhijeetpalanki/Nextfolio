import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="/avatar-1.jpg"
        alt="user avatar"
        className="object-cover w-32 h-32 mx-auto rounded-full"
        height="128"
        width="128"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Abhijeet</span> Palanki
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Full Stack Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="https://drive.google.com/file/d/1Oui1qXP2vN87r0I6QYEw-o2GJhipOCT2/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a
          href="https://www.facebook.com/abhijeetpalanki"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/abhi.your.pal/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://github.com/abhijeetpalanki"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/abhijeetpalanki/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Bentonville, AR</span>
        </div>
        <p className="my-2">abhijeet.palanki9@gmail.com</p>
        <p className="my-2">+1 (203) 385-2663</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:abhijeet.palanki9@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
