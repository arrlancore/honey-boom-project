import React, { useEffect, useState } from "react";
import Head from "next/head";
import Button from "../src/components/Button";
import Header from "../src/components/Header";
import TextField from "../src/components/TextField";
import PasswordField from "../src/components/PasswordField";
import Alert from "../src/components/Alert";
import gpsService from "../src/services/gpsService";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../src/store/user/userAction";
import { ISignUpPayload } from "../src/services/authService";
import { AppDispatch, RootState } from "../src/store";
import Layout from "../src/components/Layout";

const caption = {
  title: "HoneyBoom.",
  description: "Register",

  name: "Name",
  email: "Email",
  password: "Password",
  register: "Sign Up",

  errorRequiredAll: "All fields is required",
  successSignUp: "Your account has been created, you can login now",
};

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const [errorMsg, setErrorMsg] = useState("");
  const error = errorMsg || user.error;
  const [successMsg, setSuccessMsg] = useState("");

  const onSignupClick = () => {
    if (!name || !email || !password) {
      return setErrorMsg(caption.errorRequiredAll);
    } else if (errorMsg) {
      setErrorMsg("");
    }

    dispatch(signUpUser({ name, email, password }));
  };

  useEffect(() => {
    if (user.signUpSuccess && !successMsg) {
      setSuccessMsg(caption.successSignUp);
      setErrorMsg("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.signUpSuccess]);

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
                {error ? <Alert variant="error">{errorMsg}</Alert> : null}
                {successMsg ? (
                  <Alert variant="success">{successMsg}</Alert>
                ) : null}
                <TextField
                  placeholder="ex: John Wick"
                  label={caption.name}
                  onChange={(e: any) => setName(e.target.value)}
                />
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
                  className="mt-6"
                  isLoading={user.loading}
                  onClick={onSignupClick}
                >
                  {caption.register}
                </Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
