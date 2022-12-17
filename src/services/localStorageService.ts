const TOKEN_KEY = "userToken";

const getToken = () => {
  const userToken = localStorage.getItem(TOKEN_KEY);
  if (userToken) {
    return "Bearer " + userToken;
  }
  return null;
};

const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const localStorageService = { getToken, saveToken };

export default localStorageService;
