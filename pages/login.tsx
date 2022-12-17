import React, { useState } from "react";
import Head from "next/head";
import Button from "../src/components/Button";
import Header from "../src/components/Header";
import TextField from "../src/components/TextField";
import PasswordField from "../src/components/PasswordField";
import Link from "next/link";
import { LOGIN_URL } from "../src/constants";

const caption = {
  title: "HoneyBoom.",
  description: "Login",

  email: "Email",
  password: "Password",
  login: "Log In",
  newUser: "New User?",
};

function login(payload: { user_name: string; password: string }) {
  const headers = new Headers();
  headers.append(
    "Authorization",
    "Basic " + btoa(payload.user_name + ":" + payload.password)
  );
  return fetch(LOGIN_URL, { method: "post", headers });
}

export default function Login() {
  const onLogin = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    login({ user_name: "ana@Mail.com", password: "12323" })
      .then(console.log)
      .catch((err) => {
        console.log("ERRORRR");
        console.log(err.message, err.code, err.status);
      });
  };
  return (
    <div className="relative bg-gradient-default min-h-screen">
      <Head>
        <title>
          {caption.title} - {caption.description}
        </title>
      </Head>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* header */}
        <Header title={caption.title} />

        <main className="mt-8">
          <section
            className="flex flex-col p-4 items-center justify-center min-h-screen
            mt-[-90px]"
          >
            <div className="flex flex-col items-center p-14 w-full rounded-3xl border-[1px] border-full border-gray-200 max-w-7xl">
              <TextField
                placeholder="ex: name@mail.com"
                label={caption.email}
                id="email"
              />
              <PasswordField
                placeholder="your password..."
                label={caption.password}
                id="password"
              />
              <Button onClick={onLogin} className="mt-6" isLoading={true}>
                {caption.login}
              </Button>

              <Link
                className="block mt-6 text-gray-400 text-center hover:text-white"
                href={"/sign-up"}
              >
                {caption.newUser}
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
