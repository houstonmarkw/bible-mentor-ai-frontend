// app/dailyword/page.js
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function DailyWord() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .post("https://us-central1-bible-mentor-ai-app.cloudfunctions.net/getDailyWord", {
        uid: "ARK9FDB86hven65lEZMr"
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching daily word:", err);
        setError("Could not load today's devotional.");
      });
  }, []);

  if (error) return <div className="p-8 text-red-600">{error}</div>;
  if (!data) return <div className="p-8">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Day {data.day}: {data.title}</h1>
      <div className="text-sm text-gray-500 text-center">Track: {data.trackName || data.trackId}</div>
      <div className="space-y-4">
        <p><span className="font-semibold">Focus Verse:</span> {data.focusVerse}</p>
        {data.recap && <p><span className="font-semibold">Recap:</span> {data.recap}</p>}
        <p><span className="font-semibold">Main Reading:</span> {data.mainReading}</p>
        {data.furtherStudyVerses && <p><span className="font-semibold">Further Study:</span> {data.furtherStudyVerses}</p>}
        <p><span className="font-semibold">Action Challenge:</span> {data.actionChallenge}</p>
        <p><span className="font-semibold">Applications:</span> {data.applications}</p>
        <p><span className="font-semibold">Reflection Prompt:</span> {data.reflectionPrompt}</p>
        <p><span className="font-semibold">Opening Prayer:</span> {data.openingPrayer}</p>
      </div>
    </div>
  );
}
