import Footer from "../components/footer";
import Guest from "../public/aaron-beng.png";
import Image from "next/image";
import HwaChong from "../public/hci-logo.png";
import Nanyang from "../public/nygh-logo.png";
import Slc from "../public/slc-logo.png";
import Link from "next/link";
import Homer from "../public/homer.png";
import Head from "next/head";
import OneTeam from "../public/one.svg";
const Home = () => {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Home | 28th SLC" />
        <title>28th SLC</title>
      </Head>
      <div className="w-3/4 m-auto text-center">
        <section className="relative grid h-screen place-items-center">
          <div>
            <h1 className="mb-8 text-6xl font-bold md:text-8xl ">28th SLC</h1>
            <p className="text-xl md:text-3xl">
              Change Or Continuity, A False Dichotomy
            </p>
          </div>
          <div className="absolute grid w-full bottom-4 place-items-center">
            <a
              href="#about"
              className="mx-auto text-sm text-center duration-200 animate-bounce sm:text-lg"
            >
              Scroll down
            </a>
          </div>
        </section>
        <section
          className="grid mb-12 text-left md:mb-0 place-items-center md:h-screen "
          id="about"
        >
          <div>
            <h1 className="mt-12 mb-4 text-4xl font-bold text-center underline md:mt-0">
              About Us
            </h1>
            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3">
              <a className="relative w-32 h-32 mx-auto md:h-48 md:w-48">
                <Image src={HwaChong} alt="hwachong" fill />
              </a>
              <a className="relative w-32 h-32 mx-auto md:h-48 md:w-48">
                <Image src={Slc} alt="slc" fill />
              </a>
              <a className="relative w-32 h-32 mx-auto md:h-48 md:w-48">
                <Image src={Nanyang} alt="nygh" fill />
              </a>
            </div>
            <hr className="my-2"></hr>
            <p className="text-base md:text-xl">
              The Student Leaders Convention (SLC) is an annual event organised
              by{" "}
              <Link href={"https://www.hci.edu.sg/"} className="underline ">
                Hwa Chong Institution
              </Link>
              , and co-facilitated by{" "}
              <Link href={"https://www.nygh.edu.sg/"} className="underline ">
                Nanyang Girls' High School
              </Link>
              . The convention is an open platform for student leaders to put
              aside their differences, and gain insight to empower themselves
              with the confidence and strength to make a positive change back
              home. It has continually evolved since 1999 from a one-day local
              event to the four-day international convention it is today.
            </p>
            <p className="text-base md:text-xl">
              The theme for the 28th SLC is{" "}
              <a href="#theme">
                <b>"Change Or Continuity, A False Dichotomy"</b>
              </a>
            </p>
          </div>
        </section>
        <section
          className="grid h-screen mb-12 md:mb-0 place-items-center"
          id="theme"
        >
          <div>
            <div className="relative w-32 h-32 mx-auto md:h-64 md:w-64">
              <Image src={Homer} alt="logo" fill />
            </div>
            <h2 className="my-2 text-xl font-bold md:text-4xl">
              Change Or Continuity, A False Dichotomy
            </h2>
            <p className="w-5/6 mx-auto">
              Homer is clumsy, fat and very lazy. He is also an alcoholic, and
              is not very intelligent. He works as a Safety Inspector at the
              Springfield Nuclear Power Plant. Homer is one of the most popular
              and famous fictional characters and is thought of as one of the
              greatest comedic animated characters of modern times.
            </p>
          </div>
        </section>
        <section className="grid h-screen mb-12 md:mb-0 place-items-center">
          <div className="grid gird-cols-1 md:grid-cols-2">
            <Image
              src={Guest}
              className="w-64 mx-auto mb-2 rounded-full md:mr-0 md:mb-0 md:order-last"
              alt="aaron-beng"
            />
            <div className="m-auto">
              <h1 className="mb-4 text-3xl font-bold text-center md:text-left">
                Our Guest Of Honor
              </h1>
              <p className="text-base text-center md:text-left md:text-xl">
                The inaugural SLC was initiated by a student leader named Aaron
                Beng, who was awarded the President’s Scholarship and Singapore
                Armed Forces Scholarship after he completed his A-levels, and
                was graced by Minister Lim Hng Kiang. The first SLC was held in
                1994 and it has evolved from a one-day local convention to the
                three-day international convention it is today.
              </p>
            </div>
          </div>
        </section>
        <section className="grid h-screen mb-12 md:mb-0 place-items-center">
          <div>
            <h1 className="mb-4 text-4xl font-bold text-center underline">
              Timeline
            </h1>
            <hr className="my-2"></hr>
            <h2 className="text-lg font-bold md:text-2xl">
              Convention Dates: 28th May - 31st May @ Hwa Chong Institution,
              Singapore
            </h2>
            <p className="my-2 text-base text-gray-400">
              Timings are in GMT+0800
            </p>
            <hr></hr>
            <details className="my-2 text-xl font-semibold">
              <summary>Day 1 | 28th May</summary>
              bleh bleh
            </details>
            <details className="my-2 text-xl font-semibold">
              <summary>Day 2 | 29th May</summary>
              bleh bleh
            </details>
            <details className="my-2 text-xl font-semibold">
              <summary>Day 3 | 30th May</summary>
              bleh bleh
            </details>
          </div>
        </section>
        <section className="grid mb-12 md:mb-0 place-items-center md:h-screen">
          <div className="hidden md:block">
            <div className="grid h-screen text-center place-items-center">
              <h1 className="text-4xl font-bold text-center underline ">
                Organising Committe
              </h1>
              <div className="grid grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <OneTeam />
                </div>
                <p className="">From left to right</p>
                <div className="">From Right to Left</div>
                <div className="md:col-span-2">
                  <OneTeam />
                </div>
                <div className="md:col-span-2">
                  <OneTeam />
                </div>
                <div className="">From left to right</div>
                <div className="">From Right to Left</div>
                <div className="md:col-span-2">
                  <OneTeam />
                </div>
              </div>
            </div>
          </div>
          <section className="block md:hidden">
            <div className="grid text-center place-items-center">
              <div>
                <h1 className="mb-8 text-3xl font-bold text-center underline">
                  Organising Committe
                </h1>
                <div className="grid gap-8">
                  <div>
                    <div>
                      <OneTeam />
                    </div>
                    <p>From left to right</p>
                  </div>
                  <div>
                    <OneTeam />
                  </div>
                  <p>From left to right</p>
                  <div>
                    <OneTeam />
                  </div>
                  <p>From left to right</p>
                  <div>
                    <OneTeam />
                  </div>
                  <p>From left to right</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
