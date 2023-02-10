import OneTeam from "../public/one.svg";
import Footer from "../components/footer";
/* later i change this to a pop up */
function About() {
  return (
    <>
      <div className="grid md:h-screen place-items-center">
        <div>
          <h1 className="mb-12 text-4xl font-bold text-center underline">
            About Us
          </h1>
          <div className="grid grid-cols-1 mb-8 md:grid-cols-3"></div>
          <p>
            The Student Leaders Convention (SLC) is an annual event organised by
            Hwa Chong Institution, and co-facilitated by Nanyang Girls' High
            School. The convention serves as an avenue for Delegates across the
            globe to come together and discuss pertinent issues in our world and
            communities. It is an open platform for Delegates to learn the
            different perspectives of other Delegates and gain insight into
            societal issues, empowering them with the confidence and strength to
            spark positive change at home.
          </p>
          <p className="mt-4">
            The first SLC was held in 1994 and it has evolved from a one-day
            local convention to the three-day international convention it is
            today. The inaugural SLC was initiated by a student leader named
            Aaron Beng, who was awarded the President’s Scholarship and
            Singapore Armed Forces Scholarship after he completed his A-levels,
            and was graced by Minister Lim Hng Kiang. Previous Delegates have
            also had the honour of conversing with political leaders such as
            Senior Minister of State Dr Janil Puthucheary, Deputy Prime Minister
            Tharman Shanmugaratnam, Former Minister Lim Swee Say, Former
            Minister for Health Mr George Yeo, Minister for Communications and
            Information Mrs Josephine Teo, and Senior Minister of State for
            Transport Mr Chee Hong Tat.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="grid h-screen text-center place-items-center">
            <h1 className="text-4xl font-bold text-center underline ">
              27th SLC Organising Committe
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
        <div className="block md:hidden">
          <div className="grid text-center place-items-center">
            <div>
              <h1 className="mb-8 text-xl font-bold text-center underline">
                27th SLC Organising Committe
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
        </div>
      </div>
    </>
  );
}

export default About;
