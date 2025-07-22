export interface userObj {
  _id: string;
  name: string;
  slug: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  active: boolean;
  wishlist: [];
  addresses: [];
  createdAt: string;
  updatedAt: string;
}

export interface dataUser {
  results: number;
  paginationResult: {
    currentPage:number;
    numberOfPages:number;
    limit:number;
  };
  data: userObj;
}
