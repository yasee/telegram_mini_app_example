"use client";

import { useState } from "react";
import WebApp from "@twa-dev/sdk";

export default function Home() {
  const [message, setMessage] = useState("");
  const handleGetUser = async () => {
    fetch("/api/user", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        initData: WebApp.initData,
      })
    }).then((res) => res.json()).then((data) => {
      if (data.success) {
        setMessage(data.message);
      } else {
        alert(data.message);
      }
    });
  };
  return (
    <div className="h-screen">
      <main className="flex flex-col gap-y-5 justify-center items-center h-full">
        <h1 className="text-2xl">Telegram mini app sample</h1>
        <div className="text-lg text-cyan-500">{message}</div>
        <button onClick={handleGetUser} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">get profile</button>
      </main>
    </div>
  );
}
