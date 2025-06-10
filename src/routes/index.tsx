import { A } from "@solidjs/router";
import Counter from "~/components/Counter";
import Productcard from "~/components/Productcard";

export default function Home() {
  return (

    <main class="text-center mx-auto text-gray-700 p-4">
      <Productcard/>
    </main>
  );
}
