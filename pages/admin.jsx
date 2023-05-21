import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "tailwindcss/tailwind.css";

const Login = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  if (!session) {
    return (
      <section className="grid w-3/4 h-screen m-auto place-items-center">
        <div>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
          />
        </div>
      </section>
    );
  } else {
    return (
      <section className="w-3/4 m-auto">
        <header className="my-4">
          <h1 className="text-xl font-bold text-center lg:text-3xl lg:text-left">
            Admin Panel
          </h1>
          <p className="text-xs italic lg:text-sm">
            With Great Power Comes Great Responsibility
          </p>
        </header>
        <div className="my-4">
          <label
            htmlFor="YF"
            className="block text-lg font-bold text-center lg:text-2xl lg:text-left"
          >
            Choose YF:
          </label>
          <select
            name="yf"
            id="yfs"
            className="block w-full px-4 py-2 border rounded"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
          </select>
        </div>
        <div className="my-4">
          <label
            htmlFor="points"
            className="block text-lg font-bold text-center lg:text-2xl lg:text-left"
          >
            Input Points
          </label>
          <input
            type="text"
            id="points"
            name="points"
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="my-4">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Submit
          </button>
        </div>
      </section>
    );
  }
};

export default Login;
