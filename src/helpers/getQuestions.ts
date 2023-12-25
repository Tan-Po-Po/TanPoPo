import { IQuestion } from "@/models/Question";

export async function getQuestions(
  location: "courses" | "prices" | "contacts"
):Promise<IQuestion> {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await fetch("http://localhost:3000/api/questions", {
    method: "POST",
    body: JSON.stringify({ location }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return response.json();
}
