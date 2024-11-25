import { EducationResource } from "@/types/education_resource";

export async function getEducationResources(): Promise<EducationResource[]> {
    // const res = await fetch('https://pdf-quiz-maker-mef45scida-an.a.run.app/education-resources', {
    //     cache: 'no-store'
    // });

    const res = await fetch('http://localhost:9090/education-resources', {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch subjects');
    }

    return res.json();
}

export async function createEducationResources(subject: string, description?: string) {
    const res = await fetch('http://localhost:9090/education-resources', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subject, description })
    });

    if (res.status !== 201) {
        throw new Error('Failed to create subject');
    }
}
