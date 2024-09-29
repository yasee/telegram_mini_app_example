"use client";

import { useState } from "react";

declare global {
    interface Window {
        Telegram: any;
    }
}

export default function Top() {
    const [message, setMessage] = useState("");
    const handleValidationTest = () => {
        fetch("/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                initData: window.Telegram.WebApp.initData,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setMessage(data.message);
                } else {
                    alert(data.message);
                }
            });
    };
    return (
        <>
            <h1 className="text-2xl">Telegram mini app sample</h1>
            <div className="text-lg text-cyan-500">{message}</div>
            <button
                onClick={handleValidationTest}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                validation test
            </button>
        </>
    );
}
