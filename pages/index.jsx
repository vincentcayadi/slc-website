import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";

import Footer from "../components/footer";
import Guest from "../public/aaron-beng.png";

import SLC from "../public/slc-small.webp";
import BigLogo from "../public/biglogo.webp";

import admin from "../public/admin.webp";
import concepts from "../public/concepts.webp";
import logs from "../public/logs.webp";
import progs from "../public/progs.webp";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("adminCommittee");
  const [selectedTabDates, setSelectedTabDates] = useState("firstDay");

  function handleTabClick(tabName) {
    setSelectedTab(tabName);
  }

  function handleDateClick(tabDate) {
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
        <div className="bg-black/40">
          <div className="grid w-3/4 h-screen grid-cols-1 m-auto text-white lg:grid-cols-2 place-items-center">
            <div>
              <h1 className="text-3xl font-bold text-left text-white lg:mt-0">
                About Us
              </h1>
              <hr className="my-2"></hr>
              <p className="text-sm text-left lg:text-lg">
                The Student Leaders Convention is an esteemed annual event
                organised by Hwa Chong Institution aimed at providing a platform
                for delegates to discuss global issues. It was initiated in 1995
                as a local one-day event, but has since grown into a three-day
                convention. Distinguished political leaders such as Mr Tharman
                Shanmugaratnam have attended the convention.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url('/filler.webp')`,
        }}
        className="bg-center bg-no-repeat bg-cover"
        id="theme"
      >
        <div className="bg-white/90">
          <div className="grid w-3/4 h-screen m-auto place-items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="grid place-items-center">
                <Image src={SLC} alt="logo" className="w-32 lg:w-64" />
              </div>
              <div className="my-2 lg:my-0">
                <h1 className="text-lg font-bold text-center lg:text-3xl lg:text-right text-slcOrange">
                  Change Or Continuity:{" "}
                  <span className="block">A False Dichotomy</span>
                </h1>
                <hr className="my-2"></hr>
                <p className="text-xs text-center lg:text-right lg:text-base">
                  From the beginning of time, change and volatility have been
                  constants of human society. With events occuring at an
                  unprecedented rate recently, change is inevitable. With this
                  in mind, student leaders have to understand that the world
                  that they grew up in will be totally alien to the one which
                  they will be eventually leading in. More importantly, they
                  have to recognise that there still remain certain fundamental
                  aspects of the human condition which must be preserved.
                  Through this convention, we hope to set students&apos; minds
                  to ponder about the future, thinking about how they can
                  facilitate change that does not come at the expense of
                  continuity, thus gaining both insight and preparation for
                  their endeavours to come.
                </p>
              </div>
            </div>
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
              Chong Institution, RADM Beng was granted the President&apos;s
              Scholarship and the Singapore Armed Forces Overseas Scholarship to
              pursue Engineering & Economics at Yale University. He was later
              conferred with a Bachelor&apos;s of Science.
            </p>
          </div>
        </div>
      </section>
      <section className="grid text-center place-items-center">
        <div>
          <h1 className="text-3xl font-bold text-center lg:text-4xl text-slcOrange">
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
          <div className="my-2 text-center">
            {selectedTabDates === "firstDay" && (
              <table className="m-auto border-separate border-spacing-4">
                <thead>
                  <tr className="text-base lg:text-lg">
                    <th>Timing</th>
                    <th>YAs 1 - 3</th>
                    <th>YAs 4 - 6</th>
                  </tr>
                </thead>
                <tr className="text-sm lg:text-base">
                  <td>0730 - 0800</td>
                  <td colSpan={2}>Registration</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>0800 - 0830</td>
                  <td colSpan={2}>Welcome Address / Briefing</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>0830 - 0930</td>
                  <td colSpan={2}>Icebreakers / Performance Practice</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>0930 - 1200</td>
                  <td colSpan={2}>Concepts Discussion</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1200 - 1300</td>
                  <td>Lunch</td>
                  <td>Concepts Discussion</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1300 - 1400</td>
                  <td>Concepts Discussion</td>
                  <td>Lunch</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1400 - 1600</td>
                  <td colSpan={2}>Opening Ceremony</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1600 - 1800</td>
                  <td colSpan={2}>Concepts Discussion</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1800 - 1830</td>
                  <td colSpan={2}>Performance Practice</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1830 - 1900</td>
                  <td colSpan={2}>Dismissal (Local Delegates)</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1900 - 2100</td>
                  <td colSpan={2}>Welcome Dinner</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>2100</td>
                  <td colSpan={2}>Dismissal (Foreign Delegates)</td>
                </tr>
              </table>
            )}
            {selectedTabDates === "secondDay" && (
              <table className="m-auto border-separate border-spacing-4">
                <thead className="border-b border-gray-500">
                  <tr className="text-base lg:text-lg">
                    <th>Timing</th>
                    <th>YAs 1 - 3</th>
                    <th>YAs 4 - 6</th>
                  </tr>
                </thead>
                <tr className="text-sm lg:text-base">
                  <td>0730 - 0800</td>
                  <td colSpan={2}>Registration</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>0800 - 1100</td>
                  <td colSpan={2}>Concepts Discussion</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1100 - 1200</td>
                  <td>Concepts Discussion</td>
                  <td>Lunch</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1200 - 1300</td>
                  <td>Lunch</td>
                  <td>Concepts Discussion</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1300 - 1400 </td>
                  <td colSpan={2}>Intra-YA Presentation</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1400 - 1500</td>
                  <td colSpan={2}>Concepts Discussion</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1500 - 1700</td>
                  <td colSpan={2}>Mass Games</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1700 - 1900</td>
                  <td colSpan={2}>Dinner</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1900 - 2100</td>
                  <td colSpan={2}>Night Fiesta</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>2100</td>
                  <td colSpan={2}>Dismissal</td>
                </tr>
              </table>
            )}
            {selectedTabDates === "thirdDay" && (
              <table className="m-auto border-separate border-spacing-4">
                <thead className="border-b border-gray-500">
                  <tr className="text-base lg:text-lg">
                    <th>Timing</th>
                    <th>YAs 1 - 3</th>
                    <th>YAs 4 - 6</th>
                  </tr>
                </thead>
                <tr className="text-sm lg:text-base">
                  <td>0730 - 0800</td>
                  <td colSpan={2}>Registration</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>0800 - 0900</td>
                  <td colSpan={2}>Concepts Discussion</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>0900 - 1000</td>
                  <td colSpan={2}>Setting up of Exhibition</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1000 - 1200</td>
                  <td colSpan={2}>Exhibition</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1200 - 1300</td>
                  <td>Lunch</td>
                  <td>Performance Perparation</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1300 - 1400</td>
                  <td>Performance Perparation</td>
                  <td>Lunch</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1400 - 1645</td>
                  <td colSpan={2}>Grand Finale</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1645 - 1700</td>
                  <td colSpan={2}>Debrief</td>
                </tr>
                <tr className="text-sm lg:text-base">
                  <td>1700</td>
                  <td colSpan={2}>Dismissal</td>
                </tr>
              </table>
            )}
          </div>
        </div>
      </section>
      <section className="grid my-12 text-center lg:my-0 lg:h-screen place-items-center">
        <div className="hidden lg:text-center lg:block lg:place-items-center">
          <div className="">
            <h1 className="mb-4 text-4xl font-bold text-center text-slcOrange">
              Organising Team
            </h1>
            <hr></hr>
            <div className="grid grid-cols-4 gap-8 my-2">
              <button
                className={`text-lg ${
                  selectedTab === "adminCommittee" ? "font-bold" : ""
                }`}
                onClick={() => handleTabClick("adminCommittee")}
              >
                Admin Team
              </button>
              <button
                className={`text-lg ${
                  selectedTab === "conceptsCommittee" ? "font-bold" : ""
                }`}
                onClick={() => handleTabClick("conceptsCommittee")}
              >
                Concepts Team
              </button>
              <button
                className={`text-lg ${
                  selectedTab === "logisticsCommittee" ? "font-bold" : ""
                }`}
                onClick={() => handleTabClick("logisticsCommittee")}
              >
                Logistics Team
              </button>
              <button
                className={`text-lg ${
                  selectedTab === "programmesCommittee" ? "font-bold" : ""
                }`}
                onClick={() => handleTabClick("programmesCommittee")}
              >
                Programmes Team
              </button>
            </div>
            <hr></hr>
            <div className="my-2">
              {selectedTab === "adminCommittee" && (
                <div className="grid gap-4 grid-row-2 place-items-center ">
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
                <div className="grid gap-4 grid-row-2 place-items-center ">
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
                <div className="grid gap-4 grid-row-2 place-items-center ">
                  <Image
                    src={logs}
                    alt="logs"
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-xs">
                    From left to right: Yap Han Yang, Jayden Tan, Vincent
                    Cayadi, Jake Ying (AIC), Jovan Lim (IC), Chan Jian Kai,
                    Reegan Loke and Jerome Ng
                  </p>
                </div>
              )}
              {selectedTab === "programmesCommittee" && (
                <div className="grid gap-4 grid-row-2 place-items-center ">
                  <Image
                    src={progs}
                    alt="progs"
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-xs">
                    From left to right: Zhou Ruiyu, Kaden Isaac Kwan, Randal
                    Siow, Ashton Tan (IC), Jayden Teo (AIC), Hong Guofeng, Chen
                    Zhining and Li Xiyuan
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="block w-3/4 m-auto lg:hidden">
        <div className="grid text-center place-items-center">
          <div>
            <h1 className="mb-8 text-2xl font-bold text-center text-slcOrange">
              Organising Team
            </h1>
            <div className="grid gap-8">
              <div className="grid gap-4 grid-row-2 place-items-center">
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
              <div className="grid gap-4 grid-row-2 place-items-center ">
                <Image
                  src={concepts}
                  alt="concepts"
                  height={400}
                  className="rounded-lg"
                />
                <p className="text-xs">
                  From left to right: Toh Cheung See, Loh Hao Yuan, Ryan Leow,
                  Alfie Sun (AIC), Elijah Koh (IC), Zhang XiaoYu (AIC), Kyan
                  Tay, Jasper Wong and Hagen Lee
                </p>
              </div>
              <div className="grid gap-4 grid-row-2 place-items-center ">
                <Image
                  src={logs}
                  alt="logs"
                  height={400}
                  className="rounded-lg"
                />
                <p className="text-xs">
                  From left to right: Yap Han Yang, Jayden Tan, Vincent Cayadi,
                  Jake Ying (AIC), Jovan Lim (IC), Chan Jian Kai, Reegan Loke
                  and Jerome Ng
                </p>
              </div>
              <div className="grid gap-4 grid-row-2 place-items-center ">
                <Image
                  src={progs}
                  alt="progs"
                  height={400}
                  className="rounded-lg"
                />
                <p className="text-xs">
                  From left to right: Zhou Ruiyu, Kaden Isaac Kwan, Randal Siow,
                  Ashton Tan (IC), Jayden Teo (AIC), Hong Guofeng, Chen Zhining
                  and Li Xiyuan
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
