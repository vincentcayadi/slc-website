import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Footer from "../components/footer";
import Guest from "../public/aaron-beng.png";

import SLC from "../public/slc-small.webp";
import OneTeam from "../public/one.svg";
import BigLogo from "../public/biglogo.webp";

import admin from "../public/admin.webp";
import concepts from "../public/concepts.webp";
import logs from "../public/logs.webp";
import progs from "../public/progs.webp";
import { log } from "console";

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
        <title>28th Student Leaders Convention</title>
        <meta name="description" content="Home | 28th SLC" />
        <meta property="og:title" content="28th Student Leaders Convention" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          property="og:description"
          content="28th Student Leaders Convention"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="relative grid w-3/4 h-screen m-auto place-items-center">
        <Image src={BigLogo} alt="logo" height={400} priority={true} />
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
        style={{
          backgroundImage: `url('/about.webp')`,
        }}
        className="h-screen bg-center bg-no-repeat bg-cover"
        id="about"
      >
        <div className="bg-black bg-opacity-30">
          <div className="grid w-3/4 h-screen grid-cols-1 m-auto text-white md:grid-cols-2 place-items-center">
            <div>
              <h1 className="text-3xl font-bold text-left text-white lg:mt-0">
                About Us
              </h1>
              <hr className="my-2"></hr>
              <p className="text-sm text-left lg:text-lg">
                The Student Leaders Convention is an esteemed annual event
                organised by Hwa Chong Institution aimed at providing a platform
                for delegates to discuss global issues. It was initiated in 1994
                as a local one-day event, but has since grown into a three-day
                convention. Distinguished political leaders such as Mr Tharman
                Shanmugaratnam have attended the convention.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="grid w-3/4 h-screen m-auto place-items-center"
        id="theme"
      >
        <div className="grid gird-cols-1 lg:grid-cols-2">
          <div className="grid place-items-center">
            <Image src={SLC} alt="logo" className="w-32 lg:w-64" />
          </div>
          <div className="my-2 lg:my-0">
            <h1 className="text-lg font-bold text-center lg:text-3xl lg:text-right text-slcOrange">
              Change Or Continuity:{" "}
              <span className="block lg:inline ">A False Dichotomy</span>
            </h1>
            <hr className="my-2"></hr>
            <p className="text-sm text-center lg:text-right lg:text-lg">
              Society has always undergone change, and recent events like the
              Russo-Ukraine war and COVID-19 pandemic have shown us how
              vulnerable we can be and the importance to value what we have.
              These events have also created positive changes such as global
              solidarity.
            </p>
          </div>
        </div>
      </section>
      <section className="grid w-3/4 h-screen m-auto place-items-center">
        <div className="grid gird-cols-1 lg:grid-cols-2">
          <Image
            src={Guest}
            className="w-64 m-auto mx-auto align-middle rounded-full lg:mr-0 lg:order-last"
            alt="aaron-beng"
          />
          <div className="m-auto my-2 lg:my-0">
            <h1 className="text-xl font-bold text-center lg:text-3xl lg:text-left text-slcOrange">
              Our Guest Of Honor
            </h1>
            <hr className="my-2"></hr>
            <p className="text-sm text-center lg:text-left lg:text-lg">
              RADM Beng, who chaired the first Student Leaders Convention, was a
              former student of Hwa Chong Institution where he completed his
              high school education. In his time at Hwa Chong Junior College, he
              represented the college in the New South Wales International
              English & Science Competition. After finishing his studies at Hwa
              Chong Institution, RADM Beng was granted the President's
              Scholarship and the Singapore Armed Forces Overseas Scholarship to
              pursue Engineering & Economics at Yale University. He was later
              conferred with a Bachelor's of Science.
            </p>
          </div>
        </div>
      </section>

      <section className="grid h-screen text-center place-items-center">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-center lg:text-4xl text-slcOrange">
            Convention Dates
          </h1>
          <hr className="my-2"></hr>
          <h2 className="font-bold lg:text-2xl">
            29th May - 31st May{" "}
            <span className="block lg:inline">
              @ Hwa Chong Institution, Singapore
            </span>
          </h2>
          <p className="my-2 text-sm text-gray-400 lg:text-base">
            Timings are in GMT+0800
          </p>
          <hr></hr>
          <div className="grid grid-cols-3 gap-8 my-2">
            <button
              className={`text-lg text-slcBlue ${
                selectedTabDates === "firstDay" ? "font-bold " : ""
              }`}
              onClick={() => handleDateClick("firstDay")}
            >
              Day 1
            </button>
            <button
              className={`text-lg text-slcBlue ${
                selectedTabDates === "secondDay" ? "font-bold " : ""
              }`}
              onClick={() => handleDateClick("secondDay")}
            >
              Day 2
            </button>
            <button
              className={`text-lg text-slcBlue ${
                selectedTabDates === "thirdDay" ? "font-bold " : ""
              }`}
              onClick={() => handleDateClick("thirdDay")}
            >
              Day 3
            </button>
          </div>
          <hr></hr>
          <div className="my-2">
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
      <section className="grid my-12 text-center lg:my-0 lg:h-screen place-items-center">
        <div className="hidden lg:text-center lg:block lg:place-items-center">
          <div className="">
            <h1 className="mb-4 text-4xl font-bold text-center text-slcOrange">
              Organising Committee
            </h1>
            <hr></hr>
            <div className="grid grid-cols-4 gap-8 my-2">
              <button
                className={`text-lg ${
                  selectedTab === "adminCommittee" ? "font-bold" : ""
                }`}
                onClick={() => handleTabClick("adminCommittee")}
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
            <hr></hr>
            <div className="my-2">
              {selectedTab === "adminCommittee" && (
                <div className="grid grid-row-2 place-items-center gap-4 ">
                  <Image
                    src={admin}
                    alt="admin"
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-xs">
                    From left to right: Zachary Wong (AOS), Jonathan Leow (AOS),
                    Alastair Chua (OS), Seah Jin Rong and Ethan Lee
                  </p>
                </div>
              )}
              {selectedTab === "conceptsCommittee" && (
                <div className="grid grid-row-2 place-items-center gap-4 ">
                  <Image
                    src={concepts}
                    alt="concepts"
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-xs">
                    From left to right: Toh Cheung See, Loh Hao Yuan, Ryan Leow,
                    Alfie Sun (AIC), Elijah Koh (IC), Zhang Xiao Yu (AIC), Kyan
                    Tay, Jasper Wong and Hagen Lee
                  </p>
                </div>
              )}
              {selectedTab === "logisticsCommittee" && (
                <div className="grid grid-row-2 place-items-center gap-4 ">
                  <Image
                    src={logs}
                    alt="logs"
                    height={400}
                    className="rounded-lg"
                  />
                  <p>Content for the Logistics Committee tab goes here</p>
                </div>
              )}
              {selectedTab === "programmesCommittee" && (
                <div className="grid grid-row-2 place-items-center gap-4 ">
                  <Image
                    src={progs}
                    alt="progs"
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-xs">
                    From left to right: Zhou Ruiyu, Kaden Isaac Kwan, Randal
                    Siow, Ashton Tan (IC), Jayden Teo (AIC), Hong Guofeng, Chen
                    Zhining, Li Xiyuan
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="block lg:hidden w-3/4 m-auto">
        <div className="grid text-center place-items-center">
          <div>
            <h1 className="mb-8 text-xl font-bold text-center text-slcOrange">
              Organising Committe
            </h1>
            <div className="grid gap-8">
              <div className="grid grid-row-2 place-items-center gap-4">
                <Image
                  src={admin}
                  alt="admin"
                  height={400}
                  className="rounded-lg"
                />
                <p className="text-xs">
                  From left to right: Zachary Wong (AOS), Jonathan Leow (AOS),
                  Alastair Chua (OS), Seah Jin Rong and Ethan Lee
                </p>
              </div>
              <div className="grid grid-row-2 place-items-center gap-4 ">
                <Image
                  src={concepts}
                  alt="concepts"
                  height={400}
                  className="rounded-lg"
                />
                <p className="text-xs">
                  From left to right: Toh Cheung See, Loh Hao Yuan, Ryan Leow,
                  Alfie Sun (AIC), Elijah Koh (IC), Zhang Xiao Yu (AIC), Kyan
                  Tay, Jasper Wong and Hagen Lee
                </p>
              </div>
              <div className="grid grid-row-2 place-items-center gap-4 ">
                <Image
                  src={logs}
                  alt="logs"
                  height={400}
                  className="rounded-lg"
                />
                <p>From left to right</p>
              </div>
              <div className="grid grid-row-2 place-items-center gap-4 ">
                <Image
                  src={progs}
                  alt="progs"
                  height={400}
                  className="rounded-lg"
                />
                <p className="text-xs">
                  From left to right: Toh Cheung See, Loh Hao Yuan, Ryan Leow,
                  Alfie Sun (AIC), Elijah Koh (IC), Zhang Xiao Yu (AIC), Kyan
                  Tay, Jasper Wong and Hagen Lee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
