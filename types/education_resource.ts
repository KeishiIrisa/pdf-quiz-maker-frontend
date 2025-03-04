import { LearningDocument } from "./learning_document";

export interface EducationResource {
    _id: string;
    subject: string;
    description?: string;
    learning_documents_ids: string[];
    quizzes_ids: string[];
}

