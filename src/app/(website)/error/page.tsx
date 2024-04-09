"use client";

import ErrorPage from "../error";

export default function Home() {
  const error = new Error("Custom error");

  return (
    <ErrorPage
      error={error}
      reset={() => {
        window.location.reload();
      }}
    />
  );
}
