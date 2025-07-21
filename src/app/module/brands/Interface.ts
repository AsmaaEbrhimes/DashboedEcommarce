export interface brandObj {
  _id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface brandData {
  results: number;
  paginationResult: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  data: brandObj[];
}
