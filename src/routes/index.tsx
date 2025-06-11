import { A } from "@solidjs/router";
import Counter from "~/components/Counter";
import Productcard from "~/components/Productcard";
import liff from "@line/liff";

export default function Home() {
  liff.init({
    liffId: "2007558678-yD8zXvb6", // Use own liffId
  });
  console.log(liff)
  return (

    <main class="text-center mx-auto p-4">
      
    </main>
  );
}
