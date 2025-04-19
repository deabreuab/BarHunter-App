export type RegisterFormData = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

export type LoginFormData = {
  email: string;
  password: string;
};