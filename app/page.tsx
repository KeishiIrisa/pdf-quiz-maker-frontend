import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PlusCircle, Book, FileText } from 'lucide-react'

// Mock data for subjects
const subjects = [
  { id: 1, title: 'Mathematics', description: 'Advanced calculus and algebra', documentCount: 5 },
  { id: 2, title: 'Physics', description: 'Classical mechanics and thermodynamics', documentCount: 3 },
  { id: 3, title: 'Computer Science', description: 'Data structures and algorithms', documentCount: 7 },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Your Learning Spaces</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Subject
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <Link key={subject.id} href={`/subject/${subject.id}`} passHref>
            <Card className="cursor-pointer transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
                  <Book className="mr-2 h-5 w-5 text-blue-500" />
                  {subject.title}
                </CardTitle>
                <CardDescription className="mt-2 text-gray-600">
                  {subject.description}
                </CardDescription>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <FileText className="mr-1 h-4 w-4" />
                  {subject.documentCount} documents
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

