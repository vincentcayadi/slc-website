import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

export default function Leaderboard() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const [score, setScore] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from("yfpoints").select();
      setScore(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <pre>{JSON.stringify(score, null, 2)}</pre>;
}
