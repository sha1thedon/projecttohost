import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { content } = await req.json();
  const response = await openai.chat.completions.create({
    model: "ft:gpt-3.5-turbo-1106:personal::8tkGgCXQ",
    messages: 
    [
      {role: "system", content: "Your AI assistant for computer science questions who provides solutions"},
      { role: "user", content: content }
    ],
      temperature:1,
      max_tokens:256,
      top_p:1,
      frequency_penalty:0,
      presence_penalty:0
  });

  const data = response.choices[0].message.content;

  return Response.json(data);
}