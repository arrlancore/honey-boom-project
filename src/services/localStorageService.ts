const TOKEN_KEY = "userToken";

const getToken = () => {
  const userToken = JSON.parse(localStorage.getItem(TOKEN_KEY) || "");

  return userToken;
};

const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const localStorageService = { getToken, saveToken };

export default localStorageService;
