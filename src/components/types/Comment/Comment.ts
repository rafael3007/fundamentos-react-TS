import { Author } from "../Post/Author";

export interface Comment {
  id: string;
  author: Author;
  content: string;
  publishedAt: Date;
}
