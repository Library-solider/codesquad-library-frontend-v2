import axios from "axios";

export async function getDetailBook(url: string) {
  const response = await axios.get<IDetailBook>(url);
  return response.data;
}

export interface IDetailBookData {
  available: boolean;
  title: string;
  author: string;
  imageUrl: string;
  location: string;
  description: string;
  publisher: string;
  publicationDate: string;
  isbn: string;
  recommendCount: number;
  bookBorrower: string;
}

export interface IDetailBook {
  status: boolean;
  statusCode: number;
  statusMessage: string;
  data: IDetailBookData;
}
