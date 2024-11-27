import { Source } from "./source";

export interface Quiz {
    _id: string;
    question: string;
    answer: string;
    description: string;
    sources: Source[];
}
