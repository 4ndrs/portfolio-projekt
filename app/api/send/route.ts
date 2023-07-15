import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";
import { NextResponse, type NextRequest } from "next/server";

import { DataSchema } from "../../../interfaces";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) => {
  const body: unknown = await request.json();

  try {
    const data = DataSchema.parse(body);

    const response = await resend.emails.send({
      from: "Miku <miku@updates.4ndrs.dev>",
      to: ["me@4ndrs.dev"],
      subject: `${data.name.first}からの新メッセージ`,
      react: EmailTemplate(data),
    });

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }
};
