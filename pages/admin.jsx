import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

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
  }, []);

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
        <div className="my-4">
          <h1 className="text-xl font-bold text-center lg:text-3xl lg:text-left">
            Admin Panel
          </h1>
          <p className="text-xs italic lg:text-sm">
            With Great Power Comes Great Responsibility
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold text-center lg:text-2xl lg:text-left">
            Select YA
          </h1>
        </div>
        <div>
          <h1 className="text-lg font-bold text-center lg:text-2xl lg:text-left">
            Input Points
          </h1>
        </div>
      </section>
    );
  }
};

export default Login;
