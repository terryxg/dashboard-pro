export type SendPasswordResetParams = {
  email: string;
};
export type Login = {
  email: string;
  password: string;
};
export type CreateAdmin = {
  email: string;
  username: string;
  role: string;
  password: string;
};

export interface ApiResponse {
  email: string;
  firstName: string;
  lastName: string;
  verified: boolean;
  _v: number;
  createdAt: string;
  updatedAt: string;
  _id: string;
  meta: {
    affiliateBalance: number;
    taskBalance: number;
    totalRef: number;
  };
}
