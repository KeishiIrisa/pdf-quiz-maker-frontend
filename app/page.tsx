"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { NewSubjectPopup } from '@/components/new-subject-popup';
import { PlusCircle, Book, FileText } from 'lucide-react'
import { EducationResource } from '@/types/education_resource'
import { getEducationResources, createEducationResources } from '@/api/education_resources'

// Mock data for subjects
export default function Dashboard() {
  const [educationResources, setEducationResources] = useState<EducationResource[]>([]);

  useEffect(() => {
    getEducationResources().then(data => setEducationResources(data)).catch(error => {
      console.error('Error fetching subjects:', error);
    })
  }, []);

  const handleUpdate = async () => {
    const updatedResources = await getEducationResources();
    setEducationResources(updatedResources);
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Your Learning Spaces</h1>
        <NewSubjectPopup onCreate={handleUpdate}/>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {educationResources.map((education_resource) => (
          <Link key={education_resource._id} href={`/subject/${education_resource._id}`} passHref>
            <Card className="cursor-pointer transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
                  <Book className="mr-2 h-5 w-5 text-blue-500" />
                  {education_resource.subject}
                </CardTitle>
                <CardDescription className="mt-2 text-gray-600">
                  {/* TODO */}
                  {education_resource.description}
                </CardDescription>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <FileText className="mr-1 h-4 w-4" />
                  {education_resource.learning_documents_ids.length} documents
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

