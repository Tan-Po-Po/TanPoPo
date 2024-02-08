import { StartSelfEducation } from "@/components";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Розпочати навчання | Tanpopo',
}

export default function Page() {
  return (
    <main style={{ padding: "0 10px" }}>
      <StartSelfEducation />
    </main>
  );
}
