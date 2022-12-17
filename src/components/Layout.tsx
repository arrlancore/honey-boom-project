import { useRouter } from "next/router";
import React, { HTMLAttributes, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import localStorageService from "../services/localStorageService";
import { AppDispatch, RootState } from "../store";
import { setAsLoggedIn } from "../store/user/userSlice";

const whenOnAuthPage = (path: string, redirect: () => void) => {
  if (path === "/login" || path == "sign-up") {
    redirect();
  }
};

const Layout = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const token = localStorageService.getToken();
    if (token || user.isLoggedIn) {
      dispatch(setAsLoggedIn(token));
      whenOnAuthPage(router.pathname, () => router.push("/"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.isLoggedIn]);

  return <div>{children}</div>;
};

export default Layout;
