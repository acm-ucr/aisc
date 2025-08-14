"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

function GithubStarsVanilla() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch("https://api.github.com/repos/acm-ucr/aurora");
        const data = await res.json();
        setStars(data.stargazers_count);
      } catch (err) {
        console.error("Failed to fetch star count:", err);
      }
    };
    fetchStars();
  }, []);

  return (
    <div>
      <p>Vanilla Fetch</p>
      {stars === null ? <p>Loading...</p> : <p>Stars: {stars}</p>}
    </div>
  );
}

async function fetchRepoStats() {
  const res = await fetch("https://api.github.com/repos/acm-ucr/aurora");
  const data = await res.json();
  return { stars: data.size };
}

function GithubStarsReactQuery() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["repoStats"],
    queryFn: fetchRepoStats,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading with React Query...</p>;
  if (isError) return <p>Error loading stars.</p>;

  return (
    <div>
      <p>React Query</p>
      <p>Stars: {data?.stars}</p>
    </div>
  );
}

export default function DemoPage() {
  return (
    <div className="font-aisc-alt">
      <p className="text-2xl">GitHub Stars Demo</p>
      <GithubStarsVanilla />
      <GithubStarsReactQuery />
    </div>
  );
}
