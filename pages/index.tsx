import Profile from "../public/profile.svg";
import Footer from "../components/footer";
const Home = () => {
  return (
    <>
      <div className="w-3/4 m-auto font-sans text-center">
        <div className="grid h-screen place-items-center">
          <div>
            <h1 className="mb-8 font-bold text-8xl ">28th SLC</h1>
            <p className="text-3xl">Change or continuity, a false dichotomy</p>
          </div>
        </div>

        <div>
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
      </div>
      <Footer />
    </>
  );
};

export default Home;
