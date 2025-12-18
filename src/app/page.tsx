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
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-lg">
                {/* Hero Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                        Hitta rätt webbyrå
                    </h1>
                    <p className="text-lg text-gray-600 max-w-md mx-auto">
                        Beskriv vad du behöver hjälp med så matchar vi dig med
                        de bästa webbyråerna i din stad.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">
                                Projektbeskrivning *
                            </label>
                            <textarea
                                placeholder="Berätta om ditt projekt, dina mål och vad du behöver hjälp med..."
                                rows={4}
                                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 block">
                                    Budget
                                </label>
                                <input
                                    placeholder="t.ex. 50 000 - 100 000 kr"
                                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                                    value={budget}
                                    onChange={(e) => setBudget(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 block">
                                    Stad *
                                </label>
                                <input
                                    placeholder="t.ex. Stockholm"
                                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">
                                E-postadress *
                            </label>
                            <input
                                type="email"
                                placeholder="din.epost@exempel.se"
                                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                        >
                            Få matchning med webbyråer
                        </button>
                    </form>
                </div>

                {/* Trust indicators */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 mb-4">
                        Kostnadsfritt • Inga förpliktelser • Snabb matchning
                    </p>
                    <div className="flex items-center justify-center space-x-6 text-gray-400">
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-sm">Säkert</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm">Verifierat</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-sm">Kvalitet</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
