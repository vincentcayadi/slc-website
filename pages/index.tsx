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
        <div className="mb-12">
          <h1 className="mb-12 text-4xl font-bold text-center underline">
            Theme Rationale
          </h1>
        </div>
        <div className="mb-12">
          <h1 className="mt-4 mb-12 text-4xl font-bold underline">Guests</h1>
          <div className="md:grid md:gap-12 md:grid-cols-3">
            <div className="h-screen md:h-full">
              <Profile className="mx-auto mb-12" />
              <h1 className="mb-4 text-2xl font-bold underline">
                Name of person
              </h1>
              <p>
                Vivamus fringilla diam id velit sodales, a tincidunt lacus
                ultricies. Sed tincidunt cursus malesuada. Quisque facilisis
                pulvinar dolor faucibus consequat. Duis at nunc a orci lacinia
                placerat id eu risus. Nam pharetra efficitur faucibus. Etiam
                quis felis eu elit porta tempus quis in augue. Curabitur et
                commodo justo. Nunc sollicitudin quam nisi, sed hendrerit felis
                feugiat eget. Mauris rhoncus diam vel quam aliquet tincidunt.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vel iaculis leo. Mauris elementum lacus nec tellus
                mattis semper sed et ante.
              </p>
            </div>
            <div className="h-screen md:h-full">
              <Profile className="mx-auto mb-12" />
              <h1 className="mb-4 text-2xl font-bold underline">
                Name of person
              </h1>
              <p>
                Nunc accumsan nisl eu dictum tincidunt. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aenean blandit accumsan nibh,
                sit amet pretium nisi cursus nec. Nam turpis sem, sollicitudin
                sed nulla quis, commodo lobortis eros. Aliquam erat nulla,
                fringilla ut urna ac, condimentum vehicula metus. Aliquam
                facilisis, augue quis commodo lobortis, erat ante tincidunt
                nulla, in dapibus purus diam id diam. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Sed pretium nunc vitae metus convallis, quis congue
                quam luctus.
              </p>
            </div>
            <div className="h-screen md:h-full">
              <Profile className="mx-auto mb-12 " />
              <h1 className="mb-4 text-2xl font-bold underline">
                Name of person
              </h1>
              <p>
                Cras dapibus tellus quis neque tincidunt, id auctor justo
                tristique. Fusce diam lorem, tincidunt id urna a, laoreet
                vestibulum orci. Proin a est et ante laoreet viverra. Ut sed
                sollicitudin ipsum. Sed aliquet sem in neque dapibus, in commodo
                ex volutpat. Vivamus sodales nulla et nibh tristique vestibulum.
                Maecenas ultrices sapien eget nunc rhoncus, ut rutrum enim
                faucibus. Maecenas ut lorem at odio dictum egestas. Quisque
                hendrerit ullamcorper mi, vel vestibulum felis convallis quis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
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
