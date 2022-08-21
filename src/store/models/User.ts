export interface ProtoUser {
  userName: string;
  password: string;
  eMail?: string;
  dateOfBirth?: string;
}

export interface User {
  id: string;
  userName: string;
  token: string;
  image?: string;
}
