declare interface IUser {
  username: string;
  password_hash: string;
  role: Array<string>;
}

declare interface IUserWithoutPass {
  username: string;
  role: Array<string>;
}

declare interface ICredentials{
  username: string;
  password: string;
}
declare interface IUserWithToken {
  user: IUserWithoutPass;
  token: string;
}
