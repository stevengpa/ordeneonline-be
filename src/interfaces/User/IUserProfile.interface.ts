export interface IUserProfile {
  id?: string;
  userId: string;
  name: string;
  phone: string;
  address?: string;
  country: string;
  province?: string;
  canton?: string;
  district?: string;
}
