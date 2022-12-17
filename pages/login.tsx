import React, { useState } from "react";
import Head from "next/head";
import Button from "../src/components/Button";
import Header from "../src/components/Header";
import TextField from "../src/components/TextField";
import PasswordField from "../src/components/PasswordField";
import Link from "next/link";
import { LOGIN_URL } from "../src/constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../src/store";
import { loginUser } from "../src/store/user/userAction";
import Layout from "../src/components/Layout";

const caption = {
  title: "HoneyBoom.",
  description: "Login",

  email: "Email",
  password: "Password",
  login: "Log In",
  newUser: "New User?",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const onLoginClick = () => {
    if (!password || !email) return alert("all field is required!");
    dispatch(loginUser({ user_name: email, password }));
  };
  return (
    <Layout>
      <div className="relative bg-gradient-default min-h-screen">
        <Head>
          <title>
            {caption.title} - {caption.description}
          </title>
        </Head>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* header */}
          <Header title={caption.title} />

          <main className="mt-[90px]">
            <section
              className="flex flex-col p-4 items-center justify-center min-h-screen
            mt-[-90px]"
            >
              <div className="flex flex-col items-center p-14 w-full rounded-3xl border-[1px] border-full border-gray-200 max-w-7xl">
                <TextField
                  placeholder="ex: name@mail.com"
                  label={caption.email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
                <PasswordField
                  placeholder="your password..."
                  label={caption.password}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
                <Button
                  onClick={onLoginClick}
                  className="mt-6"
                  isLoading={true}
                >
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
    </Layout>
  );
}
