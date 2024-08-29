export interface Content {
    id: string;
    type: "link" | "paragraph";
    content?: string;
    link?: string;
}