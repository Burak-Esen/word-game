export type UserLocalStorage = {
  user: {
    username: string;
    role: Array<string>;
  };
  token: string;
  loginDate: string;
}

const LOCAL_STORAGE_USER_KEY = 'word-game-dt-user';

export const savedUserStorage: UserLocalStorage =
  typeof window !== 'undefined' && localStorage.getItem(LOCAL_STORAGE_USER_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY) as string)
    : { user: null, token: null, loginDate: null };

export function setAllUserData(data: UserLocalStorage) {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(data));
}

export function setFieldOfUserData(field: string, value: any) {
  const store = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY) as string);
  store[field] = value;
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(store));
}

export function removeUserData() {
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
}
