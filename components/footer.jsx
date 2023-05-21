import Link from "next/link";
export default function Footer() {
  return (
    <footer className="p-4 mt-4 text-center bg-gray-900 shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#" className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-lg font-semibold text-left text-white md:text-xl">
            28<sup>th</sup> Student Leaders Convention
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-4 font-semibold text-gray-300 sm:mb-0">
          <li>
            <a
              href="#"
              className="mr-2 duration-300 border-b-2 border-transparent hover:border-white md:mr-4"
            >
              E-Booklet
            </a>
          </li>
          <li>
            <a className="mr-2 md:mr-4">|</a>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/28th_slc"
              className="mr-2 duration-300 border-b-2 border-transparent hover:border-white md:mr-4"
            >
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
