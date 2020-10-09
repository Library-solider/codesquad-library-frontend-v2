import axios from "axios";

export async function getUserProfile(url: string) {
  const response = await axios.get<ILogin>(url, { withCredentials: true });
  return response.data;
}

export interface ILogin {
  status: boolean;
  statusCode: number;
  statusMessage: string;
  data: ILoginData;
}

export interface ILoginData {
  name: string;
  avatarUrl: string;
}
