export interface LearningDocument {
    _id: string;
    title: string;
    content: string;
    metadata: { [key: string]: any };
}
