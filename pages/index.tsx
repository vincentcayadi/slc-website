import Profile from "../public/profile.svg";
import Footer from "../components/footer";
const Home = () => {
  return (
    <>
      <div className="w-3/4 m-auto text-center">
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
          <div className="grid grid-cols-1 mb-8 md:grid-cols-3"></div>
          <p className="w-5/6 mx-auto">
            The Student Leaders Convention (SLC) is an annual event organised by
            Hwa Chong Institution, and co-facilitated by Nanyang Girls' High
            School. The convention serves as an avenue for Delegates across the
            globe to come together and discuss pertinent issues in our world and
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
        </div>
        <div className="mb-12">
          <h1 className="mt-4 mb-12 text-4xl font-bold underline">Guests</h1>

          <div className="h-screen md:h-full">
            <Profile className="mx-auto mb-12" />
            <h1 className="mb-4 text-3xl font-bold underline">Aaron Beng</h1>
            <p className="w-5/6 mx-auto">
              The first SLC was held in 1994 and it has evolved from a one-day
              local convention to the three-day international convention it is
              today. The inaugural SLC was initiated by a student leader named
              Aaron Beng, who was awarded the President’s Scholarship and
              Singapore Armed Forces Scholarship after he completed his
              A-levels, and was graced by Minister Lim Hng Kiang. Previous
              Delegates have also had the honour of conversing with political
              leaders such as Senior Minister of State Dr Janil Puthucheary,
              Deputy Prime Minister Tharman Shanmugaratnam, Former Minister Lim
              Swee Say, Former Minister for Health Mr George Yeo, Minister for
              Communications and Information Mrs Josephine Teo, and Senior
              Minister of State for Transport Mr Chee Hong Tat.
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
