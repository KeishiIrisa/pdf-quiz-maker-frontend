import { EducationResource } from "@/types/education_resource";

export async function getEducationResources(): Promise<EducationResource[]> {
    // const res = await fetch('https://pdf-quiz-maker-mef45scida-an.a.run.app/education-resources', {
    //     cache: 'no-store'
    // });

    const res = await fetch('https://pdf-quiz-maker-mef45scida-an.a.run.app/education-resources', {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch education resources');
    }

    return res.json();
}

export async function getEducationResourceById(education_resource_id: string): Promise<EducationResource>  {
    const res = await fetch(`https://pdf-quiz-maker-mef45scida-an.a.run.app/education-resources/${education_resource_id}`, {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch education resources');
    }

    return res.json();
}

export async function createEducationResources(subject: string, description?: string) {
    const res = await fetch('https://pdf-quiz-maker-mef45scida-an.a.run.app/education-resources', {
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

export async function uploadFileToEducationResources(education_resource_id: string, file: File): Promise<void> {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(`https://pdf-quiz-maker-mef45scida-an.a.run.app/education-resources/${education_resource_id}/uploadfile`, {
        method: 'PUT',
        body: formData,
    });

    if (!res.ok) {
        throw new Error('Failed to upload file');
    }
}
