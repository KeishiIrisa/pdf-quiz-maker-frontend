import { LearningDocument } from "@/types/learning_document";

export async function getLearningDocumentByIds(learning_documents_ids: string[]): Promise<LearningDocument[]> {
    const learning_documents: LearningDocument[] = [];
    
    for (const id of learning_documents_ids) {
        try {
            const res = await fetch(`http://localhost:9090/learning-document/${id}`, {
                cache: 'no-store'
            });

            if (!res.ok) {
                console.error(`Failed to fetch learning document with id ${id}`);
                continue;
            }

            const document = await res.json();
            learning_documents.push(document);
        } catch (error) {
            console.error(`Error fetching learning document with id ${id}:`, error);
        }
    }

    return learning_documents;
}
