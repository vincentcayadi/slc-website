import OneTeam from "../public/one.svg";
import Footer from "../components/footer";
/* later i change this to a pop up */
function About() {
  return (
    <>
      <div className="grid md:h-screen place-items-center">
        
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
