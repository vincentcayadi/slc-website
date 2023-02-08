import Link from "next/link";
export default function Navbar() {
  return (
    <div className="p-2 m-2 text-xl text-center ">
      <Link className="p-2" href={""}>
        Participating Schools
      </Link>
      <Link className="p-2" href={""}>
        E-Booklet
      </Link>
      <Link className="p-2" href={""}>
        Contact Us
      </Link>
    </div>
  );
}
