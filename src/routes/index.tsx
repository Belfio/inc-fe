import { A } from "@solidjs/router";
import Counter from "@/components/Counter";
import Landing from "@/pages/landing";

export default function Home() {
  return (
    <main>
      <Landing />
      <p>
        <A href="/search" class="text-sky-600 hover:underline">
          About Page
        </A>{" "}
      </p>
    </main>
  );
}
