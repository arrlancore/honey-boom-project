import { LOGIN_URL, SIGNUP_URL } from "../constants";

export interface ILoginPayload {
  user_name: string;
  password: string;
}

function login(payload: ILoginPayload) {
  const headers = new Headers();
  headers.append(
    "Authorization",
    "Basic " + btoa(payload.user_name + ":" + payload.password)
  );
  return fetch(LOGIN_URL, { method: "post", headers });
}

export interface ISignUpPayload {
  name: string;
  email: string;
  password: string;
}

function signUp(payload: ISignUpPayload) {
  return fetch(SIGNUP_URL, { method: "post", body: JSON.stringify(payload) });
}

const authService = {
  login,
  signUp,
};

export default authService;
