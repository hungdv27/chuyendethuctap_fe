// export interface UserModel {
//   id: number;
//   name: string;
//   username: string;
//   password: string;
//   roles: string[];
//   token: string;
// }
export interface ORDER {
  totalPages: number;
  totalElements: number;
  currentPage: any;
  size: number;
  first: number;
  numberOfElements: number;
  content: any[];
  checkOrg?: number;
}
