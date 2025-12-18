import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/app/lib/supabase-server";
import type { Lead } from "@/lib/supabase";

export async function POST(request: NextRequest) {
    try {
        const body: Lead = await request.json();
        console.log("Received data:", body);

        // Validera obligatoriska fält
        if (!body.name || !body.email || !body.need) {
            console.log("Validation failed:", {
                name: body.name,
                email: body.email,
                company: body.company || null,
                need: body.need,
            });
            return NextResponse.json(
                { error: "Namn, e-post och behov är obligatoriska fält" },
                { status: 400 }
            );
        }

        // Debug: Kontrollera vilken roll vi använder
        const { data: sessionData, error: sessionError } =
            await supabaseServer.auth.getSession();
        console.log(
            "Current session:",
            sessionData?.session?.user?.role || "anon"
        );

        // Spara till Supabase
        const { data, error } = await supabaseServer
            .from("Leads")
            .insert({
                name: body.name,
                email: body.email,
                company: body.company || null,
                need: body.need,
            })
            .select();

        if (error) {
            console.error("Supabase error:", error);
            return NextResponse.json(
                { error: "Kunde inte spara data" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Lead sparad framgångsrikt", data },
            { status: 201 }
        );
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Serverfel" }, { status: 500 });
    }
}
