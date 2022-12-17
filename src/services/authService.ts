import { LOGIN_URL, SIGNUP_URL } from "../constants";
import axios from "axios";

export interface ILoginPayload {
  user_name: string;
  password: string;
}

async function login(payload: ILoginPayload) {
  return axios.post(LOGIN_URL, undefined, {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + btoa(payload.user_name + ":" + payload.password),
    },
  });
}

export interface ISignUpPayload {
  name: string;
  email: string;
  password: string;
}

function signUp(payload: ISignUpPayload) {
  return axios.post(SIGNUP_URL, payload, {
    headers: { "Content-Type": "application/json" },
  });
}

const authService = {
  login,
  signUp,
};

export default authService;
