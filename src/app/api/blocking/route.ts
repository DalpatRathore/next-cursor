import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    const { text } = await generateText({
      model: google("gemini-2.5-flash"),
      prompt,
    });
    console.log(text);
    return Response.json({ text });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to generate text" }, { status: 500 });
  }
}
