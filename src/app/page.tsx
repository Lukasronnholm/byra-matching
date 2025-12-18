"use client";

import { useState } from "react";

export default function Home() {
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        console.log({
            description,
            budget,
            city,
            email,
        });

        alert("Formuläret skickat (kolla console)");
    }

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
                <h1 className="text-2xl font-bold mb-2">Hitta rätt webbyrå</h1>

                <p className="text-gray-600 mb-6">
                    Beskriv vad du behöver hjälp med så matchar vi dig med rätt
                    webbyrå.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                        placeholder="Vad behöver du hjälp med?"
                        rows={4}
                        className="w-full border rounded px-3 py-2"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Budget (valfritt)"
                        className="w-full border rounded px-3 py-2"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                    />

                    <input
                        placeholder="Stad"
                        className="w-full border rounded px-3 py-2"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="E‑post"
                        className="w-full border rounded px-3 py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        Få förslag
                    </button>
                </form>
            </div>
        </main>
    );
}
