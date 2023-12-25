import { IQuestion } from "@/models/Question";

export async function getQuestions(
  location: "courses" | "prices" | "contacts"
):Promise<IQuestion> {
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
