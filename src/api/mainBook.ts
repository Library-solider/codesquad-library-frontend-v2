export interface IBooks {
  author: string;
  id: number;
  imageUrl: string;
  publicationDate: string;
  publisher: string;
  recommendCount: number;
  title: string;
}

export interface IMainResponseData {
  bookCount: number;
  books: Array<IBooks>;
  categoryId: number;
  categoryTitle: string;
}

export interface IMainBookCarousel {
  key?: number;
  categoryTitle: string;
  books: Array<IBooks>;
}
