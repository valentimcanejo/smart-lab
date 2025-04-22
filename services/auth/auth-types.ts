export interface LoginProps {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterProps {
  email: string;
  senha: string;
}
