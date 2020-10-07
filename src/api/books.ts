import axios from "axios";

export async function getBooks(url: string) {
  const response = await axios.get<IBooks>(url);
  return response.data;
}

export interface IBookCard {
  id: number;
  imageUrl: string;
  title: string;
  author: string;
  publisher: string;
  preferenceCount: number;
  publicationDate: string;
}

interface IBookData {
  bookCount: number;
  books: Array<IBookCard>;
  categoryId: number;
  categoryTitle: string;
}

interface IBooks {
  status: boolean;
  statusCode: number;
  statusMessage: string;
  data: IBookData | null;
}

export default IBooks;
