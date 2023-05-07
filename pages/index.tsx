import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Footer from "../components/footer";
import Guest from "../public/aaron-beng.png";
import HwaChong from "../public/hci-logo.png";
import Nanyang from "../public/nygh-logo.png";
import Slc from "../public/slc-logo.png";
import SLC from "../public/slc-small.png";
import OneTeam from "../public/one.svg";
import BigLogo from "../public/biglogo.png";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("adminCommittee");
  const [selectedTabDates, setSelectedTabDates] = useState("firstDay");
  function handleTabClick(tabName: any) {
    setSelectedTab(tabName);
  }

  function handleDateClick(tabDate: any) {
    setSelectedTabDates(tabDate);
  }

  return (
    <>
      <Head>
        <title>28th SLC</title>
        <meta name="description" content="Home | 28th SLC" />
        <meta property="og:title" content="28th Student Leaders Convention" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          property="og:description"
          content="28th Student Leaders Convention"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-3/4 m-auto text-center">
        <section className="relative grid h-screen place-items-center">
          <Image
            src={BigLogo}
            alt="logo"
            width={2048}
            height={2048}
            className="mr-2"
          />
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
          className="grid my-12 md:my-0 md:h-screen place-items-center"
          id="about"
        >
          <div>
            <h1 className="mt-12 mb-8 text-4xl font-bold text-center underline md:mt-0">
              About Us
            </h1>
            <div className="grid grid-cols-1 gap-8 mb-8">
              <a className="relative w-32 h-32 mx-auto md:h-48 md:w-48">
                <Image src={Slc} alt="slc" fill />
              </a>
            </div>
            <hr className="my-2"></hr>
            <p className="text-base md:text-xl">
              The Student Leaders Convention (SLC) is an annual event organised{" "}
              <Link href={"https://www.hci.edu.sg/"} className="underline ">
                Hwa Chong Institution
              </Link>
              , providing a platform for delegates from around the world to
              discuss important issues and gain insight into societal problems.
              The convention, which began as a one-day local event in 1994, has
              evolved into a three-day international convention. Initiated by
              Aaron Beng, a former student leader and Singapore's current Chief
              of Defence Force, the first SLC was graced by Minister for
              National Development, Mr Lim Hng Kiang. Since then, delegates have
              had the privilege of conversing with various prominent political
              leaders, including Deputy Prime Minister, Mr Tharman
              Shanmugaratnam, and Senior Minister of State, Dr Janil
              Puthucheary.
            </p>
          </div>
        </section>
        <section
          className="grid my-12 md:my-0 md:h-screen place-items-center"
          id="theme"
        >
          <div className="grid gird-cols-1 md:grid-cols-2">
            <div className="relative w-32 h-32 mx-auto md:h-64 md:w-64 md:ml-0">
              <Image src={SLC} alt="logo" fill />
            </div>
            <div className="m-auto">
              <h1 className="my-2 text-3xl font-bold text-center md:text-right">
                Change Or Continuity: A False Dichotomy
              </h1>
              <p className="text-base text-center md:text-right md:text-xl">
                The constant presence of change and volatility has been a part
                of human society since the beginning of time. Recent events,
                such as the Russo-Ukraine war, COVID-19 pandemic, and the
                overturning of Roe v. Wade, have highlighted our vulnerability
                and the need to appreciate what we take for granted. However,
                these events also bring about positive changes and beckon the
                arrival of change. Student leaders must prepare for a vastly
                different future and preserve certain fundamental aspects of
                human consciousness. The convention aims to encourage students
                to reflect on the future, gain insight, and prepare for the era
                to come.
              </p>
            </div>
          </div>
        </section>
        <section className="grid my-12 md:my-0 md:h-screen place-items-center">
          <div className="grid gird-cols-1 md:grid-cols-2">
            <Image
              src={Guest}
              className="w-64 m-auto mx-auto align-middle rounded-full md:mr-0 md:order-last"
              alt="aaron-beng"
            />
            <div className="m-auto">
              <h1 className="my-2 text-3xl font-bold text-center md:text-left">
                Our Guest Of Honor
              </h1>
              <p className="text-base text-center md:text-left md:text-xl">
                RADM Beng, who chaired the first Student Leaders Convention, was
                a former student of Hwa Chong Institution where he completed his
                high school education. In his time at Hwa Chong Junior College,
                he represented the college in the New South Wales International
                English & Science Competition. After finishing his studies at
                Hwa Chong Institution, RADM Beng was granted the President's
                Scholarship and the Singapore Armed Forces Overseas Scholarship
                to pursue Engineering & Economics at Yale University. He
                successfully completed his degree and was conferred with a
                Bachelor's of Science.
              </p>
            </div>
          </div>
        </section>
        <section className="grid my-12 md:my-0 place-items-centerr">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-center md:text-4xl">
              Convention Outline
            </h1>
            <p>
              An outline of the schedule of activities happening throughout the
              convention
            </p>
            <button className="px-4 py-2 my-4 text-black transition-colors duration-500 ease-in-out bg-transparent border-2 border-black rounded-full hover:bg-black hover:text-white">
              Download
            </button>
          </div>
        </section>
        <section className="grid my-12 md:my-0 md:h-screen place-items-center">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-center md:text-4xl">
              Convention Dates
            </h1>
            <hr className="my-2"></hr>
            <h2 className="font-bold md:text-2xl">
              28th May - 31st May @ Hwa Chong Institution, Singapore
            </h2>
            <p className="my-2 text-base text-gray-400">
              Timings are in GMT+0800
            </p>
            <hr></hr>
            <div className="grid grid-cols-3 gap-8 my-2">
              <button
                className={`text-lg ${
                  selectedTabDates === "firstDay" ? "font-bold" : ""
                }`}
                onClick={() => handleDateClick("firstDay")}
              >
                Day 1
              </button>
              <button
                className={`text-lg ${
                  selectedTabDates === "secondDay" ? "font-bold" : ""
                }`}
                onClick={() => handleDateClick("secondDay")}
              >
                Day 2
              </button>
              <button
                className={`text-lg ${
                  selectedTabDates === "thirdDay" ? "font-bold" : ""
                }`}
                onClick={() => handleDateClick("thirdDay")}
              >
                Day 3
              </button>
            </div>
            <hr></hr>
            <div className="mt-4">
              {selectedTabDates === "firstDay" && (
                <div>
                  <h2 className="text-2xl font-bold">First Day</h2>
                  <p>Content for the First Day tab goes here</p>
                </div>
              )}
              {selectedTabDates === "secondDay" && (
                <div>
                  <h2 className="text-2xl font-bold">Second Day</h2>
                  <p>Content for the Second Day tab goes here</p>
                </div>
              )}
              {selectedTabDates === "thirdDay" && (
                <div>
                  <h2 className="text-2xl font-bold">Third Day</h2>
                  <p>Content for the Third Day tab goes here</p>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="grid my-12 md:my-0 md:h-screen place-items-center">
          <div className="hidden md:block">
            <div className="grid text-center place-items-center">
              <h1 className="mb-8 text-4xl font-bold text-center underline">
                Organising Committee
              </h1>
              <div className="grid grid-cols-4 gap-8">
                <button
                  className={`text-lg ${
                    selectedTab === "adminCommittee" ? "font-bold" : ""
                  }`}
                  onClick={() => handleDateClick("adminCommittee")}
                >
                  Admin Committee
                </button>
                <button
                  className={`text-lg ${
                    selectedTab === "conceptsCommittee" ? "font-bold" : ""
                  }`}
                  onClick={() => handleTabClick("conceptsCommittee")}
                >
                  Concepts Committee
                </button>
                <button
                  className={`text-lg ${
                    selectedTab === "logisticsCommittee" ? "font-bold" : ""
                  }`}
                  onClick={() => handleTabClick("logisticsCommittee")}
                >
                  Logistics Committee
                </button>
                <button
                  className={`text-lg ${
                    selectedTab === "programmesCommittee" ? "font-bold" : ""
                  }`}
                  onClick={() => handleTabClick("programmesCommittee")}
                >
                  Programmes Committee
                </button>
              </div>
              <div className="mt-8">
                {selectedTab === "adminCommittee" && (
                  <div>
                    <h2 className="text-2xl font-bold">Admin Committee</h2>
                    <p>Content for the Admin Committee tab goes here</p>
                  </div>
                )}
                {selectedTab === "conceptsCommittee" && (
                  <div>
                    <h2 className="text-2xl font-bold">Concepts Committee</h2>
                    <p>Content for the Concepts Committee tab goes here</p>
                  </div>
                )}
                {selectedTab === "logisticsCommittee" && (
                  <div>
                    <h2 className="text-2xl font-bold">Logistics Committee</h2>
                    <p>Content for the Logistics Committee tab goes here</p>
                  </div>
                )}
                {selectedTab === "programmesCommittee" && (
                  <div>
                    <h2 className="text-2xl font-bold">Programmes Committee</h2>
                    <p>Content for the Programmes Committee tab goes here</p>
                  </div>
                )}
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
