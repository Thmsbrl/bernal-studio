import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();

    const { name, email, business, projectType, goal, timeline, message } = body;

    if (!name || !email || !projectType || !goal || !message) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Bernal Studio <onboarding@resend.dev>",
      to: "bernalstudio2@gmail.com",
      replyTo: email,
      subject: `Nouvelle demande - ${name}`,
      html: `
        <h2>Nouvelle demande depuis ton site</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Business :</strong> ${business || "-"}</p>
        <p><strong>Projet :</strong> ${projectType}</p>
        <p><strong>Objectif :</strong> ${goal}</p>
        <p><strong>Délai :</strong> ${timeline || "-"}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
