import Link from "next/link";
import About from "../pages/about";
import Logo from "../public/logo.png";
import Booklet from "../public/booklet.png";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="p-4 mt-4 bg-gray-900 shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
          <Image
            src={Logo}
            alt="logo"
            width={48}
            height={48}
            className="mr-2"
          />
          <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
            28th Student Leader Convention
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-4 text-base text-gray-300 sm:mb-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center mb-4 sm:mb-0">
              E-Booklet
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
