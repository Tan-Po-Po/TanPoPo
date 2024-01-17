export interface IPolicy {
  _id: string;
  content: { id: string; title?: string; text: string }[];
}
