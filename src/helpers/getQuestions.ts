import { SERVER_URL } from "@/config/config";
import { IQuestion } from "@/models/Question";

export async function getQuestions(
  location: "courses" | "prices" | "contacts"
):Promise<IQuestion> {
  const response = await fetch(`${SERVER_URL}/api/questions`, {
    method: "POST",
    body: JSON.stringify({ location }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    next: { revalidate: 86400 },
  });

  return response.json();
}
