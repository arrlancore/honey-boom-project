import dayjs from "dayjs";

export const handleUnauthorizedRequest = (
  errorCode: string,
  redirectToLogin: () => void
) => {
  if (errorCode === "401") {
    redirectToLogin();
  }
};

export const formatDateTime = (date: string) => {
  return dayjs(date).format("DD-MM-YYYY hh:mm:ss");
};
