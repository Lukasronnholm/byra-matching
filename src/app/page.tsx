"use client";

import { useState } from "react";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const form = e.currentTarget; // Spara referens till formuläret
        const formData = new FormData(form);

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    company: formData.get("company"),
                    need: formData.get("need"),
                }),
            });

            console.log("Response status:", response.status);

            if (!response.ok) {
                const errorText = await response.text();
                console.error("Response error:", errorText);
                setMessage(`❌ Kunde inte skicka formuläret`);
                return;
            }

            const result = await response.json();
            console.log("Success result:", result);

            setMessage("✅ Tack! Vi kommer att kontakta dig inom kort.");
            form.reset(); // Använd den sparade referensen
        } catch (error) {
            console.error("Network error:", error);
            setMessage("❌ Nätverksfel. Försök igen senare.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <main className="max-w-2xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Hitta rätt byrå
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Vi matchar dig med den perfekta webbyrån för ditt
                        projekt
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {message && (
                            <div
                                className={`p-4 rounded-xl border-l-4 font-medium ${
                                    message.includes("✅")
                                        ? "bg-green-50 text-green-700 border-green-500"
                                        : "bg-red-50 text-red-700 border-red-500"
                                }`}
                            >
                                {message}
                            </div>
                        )}

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Namn *
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                    placeholder="Ditt fullständiga namn"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    E-post *
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                    placeholder="din@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Företag
                                </label>
                                <input
                                    name="company"
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                    placeholder="Ditt företags namn (valfritt)"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Vad behöver du hjälp med? *
                                </label>
                                <textarea
                                    name="need"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                                    placeholder="Berätta om ditt projekt... t.ex. ny webbsida, e-handel, digital marknadsföring"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform ${
                                loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02] hover:shadow-lg"
                            } focus:ring-4 focus:ring-blue-200 focus:outline-none`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            className="opacity-25"
                                        ></circle>
                                        <path
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            className="opacity-75"
                                        ></path>
                                    </svg>
                                    Skickar förfrågan...
                                </span>
                            ) : (
                                "Hitta min byrå"
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-center text-sm text-gray-500">
                            🔒 Dina uppgifter behandlas säkert och delas endast
                            med matchade byråer
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
