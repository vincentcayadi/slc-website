import Footer from "../components/footer";
import Guest from "../public/aaron-beng.jpg";
import Image from "next/image";
import HwaChong from "../public/hci-logo.png";
import Nanyang from "../public/nygh-logo.png";
import Slc from "../public/slc-logo.png";
import Link from "next/link";
import Homer from "../public/homer.png";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>28th SLC</title>
        
      </Head>
      <div className="w-3/4 m-auto text-center font-helvetica">
        <div className="grid h-screen place-items-center">
          <div>
            <h1 className="mb-8 text-6xl font-bold md:text-8xl ">28th SLC</h1>
            <p className="text-xl md:text-3xl">
              Change or continuity, a false dichotomy
            </p>
          </div>
        </div>
        <div className="mb-12">
          <h1 className="mb-12 text-4xl font-bold text-center underline">
            About Us
          </h1>
          <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3">
            <a className="relative w-32 h-32 mx-auto md:h-64 md:w-64">
              <Image src={HwaChong} alt="hwachong" fill />
            </a>
            <a className="relative w-32 h-32 mx-auto md:h-64 md:w-64">
              <Image src={Slc} alt="slc" fill />
            </a>
            <a className="relative w-32 h-32 mx-auto md:h-64 md:w-64">
              <Image src={Nanyang} alt="nygh" fill />
            </a>
          </div>
          <hr className="my-2 border-2"></hr>
          <p className="w-5/6 mx-auto">
            The Student Leaders Convention (SLC) is an annual event organised by{" "}
            <Link href={"https://www.hci.edu.sg/"} className="underline ">
              Hwa Chong Institution
            </Link>
            , and co-facilitated by{" "}
            <Link href={"https://www.nygh.edu.sg/"} className="underline ">
              Nanyang Girls' High School
            </Link>
            . The convention serves as an avenue for Delegates across the globe
            to come together and discuss pertinent issues in our world and
            communities. It is an open platform for Delegates to learn the
            different perspectives of other Delegates and gain insight into
            societal issues, empowering them with the confidence and strength to
            spark positive change at home.
          </p>
        </div>
        <div className="mb-12">
          <h1 className="mb-12 text-4xl font-bold text-center underline">
            Theme Rationale
          </h1>

          <div className="relative w-32 h-32 mx-auto md:h-64 md:w-64">
            <Image src={Homer} alt="logo" fill />
          </div>
          <h2 className="text-xl font-bold underline">
            Change Or Continuity, A False Dichotomy
          </h2>
          <p className="w-5/6 mx-auto">
            Homer is clumsy, fat and very lazy. He is also an alcoholic, and is
            not very intelligent. He works as a Safety Inspector at the
            Springfield Nuclear Power Plant. Homer is one of the most popular
            and famous fictional characters and is thought of as one of the
            greatest comedic animated characters of modern times.
          </p>
        </div>
        <div className="mb-12">
          <h1 className="mt-4 mb-4 text-4xl font-bold underline">
            Guest Of Honor
          </h1>
          <div>
            <Image
              src={Guest}
              className="mx-auto mb-2 rounded-lg"
              alt="aaron-beng"
            />
            <h1 className="mb-4 text-3xl font-bold underline">Aaron Beng</h1>
            <p className="w-5/6 mx-auto">
              The inaugural SLC was initiated by a student leader named Aaron
              Beng, who was awarded the President’s Scholarship and Singapore
              Armed Forces Scholarship after he completed his A-levels, and was
              graced by Minister Lim Hng Kiang. The first SLC was held in 1994
              and it has evolved from a one-day local convention to the
              three-day international convention it is today.
            </p>
          </div>
        </div>
        <div>
          <h1 className="mb-12 text-4xl font-bold text-center underline">
            Timeline
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
