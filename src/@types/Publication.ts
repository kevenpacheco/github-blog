import { ProfileType } from "./Profile";

export interface PublicationType {
  id: number;
  title: string;
  created_at: string;
  body: string;
  number: number;
  user: ProfileType;
  comments: number;
}
