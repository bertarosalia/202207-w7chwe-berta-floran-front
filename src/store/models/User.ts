export interface ProtoUser {
  userName: string;
  password: string;
  image?: string;
}

export interface User {
  id: string;
  userName: string;
  token: string;
  image?: string;
}
