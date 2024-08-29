import { Author } from "./Author"
import { Content } from "./Content";

export interface PostProps {
    id: string;
    author: Author;
    content: Array<Content>;
    publishedAt: Date
}