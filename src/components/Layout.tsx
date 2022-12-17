import { useRouter } from "next/router";
import React, { HTMLAttributes, useEffect } from "react";
import { useDispatch } from "react-redux";
import localStorageService from "../services/localStorageService";
import { AppDispatch } from "../store";
import { setAsLoggedIn } from "../store/user/userSlice";

const whenOnAuthPage = (path: string, redirect: () => void) => {
  if (path === "/login" || path == "sign-up") {
    redirect();
  }
};

const Layout = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const token = localStorageService.getToken();
    if (token) {
      dispatch(setAsLoggedIn(token));
      whenOnAuthPage(router.pathname, () => router.push("/"));
    }
  }, []);

  return <div>{children}</div>;
};

export default Layout;
