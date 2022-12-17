import dayjs from "dayjs";

export const handleUnauthorizedRequest = (
  errorCode: number,
  redirectToLogin: () => void
) => {
  if (errorCode === 401) {
    setTimeout(() => {
      redirectToLogin();
    }, 100);
  }
};

export const formatDateTime = (date: string) => {
  return dayjs(date).format("DD-MM-YYYY hh:mm:ss");
};
