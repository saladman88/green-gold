import { createSignal } from "solid-js";
import liff from "@line/liff";


export default function Hero() {
  const [count, setCount] = createSignal(0);
    liff.init({
      liffId: "2007558678-yD8zXvb6", // Use own liffId
    });
  return (
    <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            </div>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div class="card-body">
                <fieldset class="fieldset">
                <label class="label">Email</label>
                <input type="email" class="input" placeholder="Email" />
                <label class="label">Password</label>
                <input type="password" class="input" placeholder="Password" />
                <div><a class="link link-hover">Forgot password?</a></div>
                <button class="btn btn-neutral mt-4" on:click={()=>liff.login()}>Login</button>
                </fieldset>
            </div>
            </div>
        </div>
    </div>
  );
}