import React from "react";
import Head from "next/head";
import Button from "../src/components/Button";
import Header from "../src/components/Header";
import TextField from "../src/components/TextField";
import PasswordField from "../src/components/PasswordField";

const caption = {
  title: "HoneyBoom.",
  description: "Register",

  name: "Name",
  email: "Email",
  password: "Password",
  register: "Register",
};

export default function Register() {
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
              <TextField placeholder="ex: John Wick" label={caption.name} />
              <TextField
                placeholder="ex: name@mail.com"
                label={caption.email}
              />
              <PasswordField
                placeholder="your password..."
                label={caption.password}
              />
              <Button className="mt-6" isLoading={false}>
                {caption.register}
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
