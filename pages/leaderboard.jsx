import { supabase } from "../lib/supabaseClient";

function Page({ yf }) {
  return (
    <div className="w-3/4 m-auto text-center">
      <h1 className="my-4 text-xl font-bold text-center lg:text-3xl">
        YF Leaderboard
      </h1>
      <ul>
        {yf
          .sort((a, b) => b.points - a.points)
          .map((e) => (
            <li key={e.id} className="text-xl">
              YF {e.id} : {e.points}
            </li>
          ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("yfpoints").select();
  return {
    props: {
      yf: data,
    },
  };
}

export default Page;
