import Link from "next/link";
import About from "../pages/about";
export default function Footer() {
  return (
    /* footer for social media links*/
    <>
      <div className="flex flex-row items-center justify-center p-2 m-2 text-xl text-center ">
        Instagram | <Link href="about"> About Us </Link> | Ebooklet
      </div>
    </>
  );
}
