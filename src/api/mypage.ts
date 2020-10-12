import axios from "axios";

export async function getMypage(url: string) {
  const response = await axios.get<IMypage>(url, { withCredentials: true });
  return response.data;
}

interface IRentalBookResponses {
  id: number;
  title: string;
  imageUrl: string;
  author: string;
  beginDate: string;
  returnDate: string;
}

interface IMypageData {
  name: string;
  email: string;
  avatarUrl: string;
  role: string;
  requested: boolean;
  rentalBookResponses: Array<IRentalBookResponses>;
}

export interface IMypage {
  status: boolean;
  statusCode: number;
  statusMessage: string;
  data: IMypageData;
}
