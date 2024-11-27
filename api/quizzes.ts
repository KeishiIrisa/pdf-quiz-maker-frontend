import { Quiz } from "@/types/quiz";

export async function getQuizzesByIds(quizzes_ids: string[]): Promise<Quiz[]> {
    const quizzes: Quiz[] = [];

    for (const id of quizzes_ids) {
        try {
            const res = await fetch(`https://pdf-quiz-maker-mef45scida-an.a.run.app/quiz/${id}`, {
                cache: 'no-store'
            });

            if (!res.ok) {
                console.error(`Failed to fetch quiz with id ${id}`);
                continue;
            } 

            const quiz = await res.json();
            quizzes.push(quiz);
        } catch (error) {
            console.error(`Failed to fetch quiz with id ${id}`);
        }
    }

    return quizzes;
}

export async function generateQuiz(education_resources_id: string, learning_content: string): Promise<Quiz> {
    try {
        const res = await fetch(`https://pdf-quiz-maker-mef45scida-an.a.run.app/quiz`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ education_resources_id, learning_content })
        });

        if (!res.ok) {
            throw new Error('Failed to generate quiz');
        }

        const quiz: Quiz = await res.json();
        return quiz;
    } catch (error) {
        console.error('Failed to generate quiz:', error);
        throw error;
    }
}
