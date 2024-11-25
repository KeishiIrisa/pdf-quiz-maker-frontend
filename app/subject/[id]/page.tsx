'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DocumentList } from '@/components/document-list'
import { ChevronLeft, MoreHorizontal, Plus } from 'lucide-react'
import Link from 'next/link'

// Mock data for documents
const documents = [
  { id: 1, title: 'Introduction', content: '# Introduction\n\nThis is the introduction to the subject.' },
  { id: 2, title: 'Chapter 1', content: '# Chapter 1\n\nThis is the content of chapter 1.' },
  { id: 3, title: 'Chapter 2', content: '# Chapter 2\n\nThis is the content of chapter 2.' },
]

export default function SubjectPage({ params }: { params: { id: string } }) {
  const [selectedDocument, setSelectedDocument] = useState(documents[0])
  const [quizQuestions, setQuizQuestions] = useState<string[]>([])

  const handleGenerateQuiz = () => {
    // Mock quiz generation
    const newQuestions = [
      'What is the main topic of this document?',
      'Explain the key concepts discussed in this chapter.',
      'How does this information relate to the previous chapter?',
    ]
    setQuizQuestions(newQuestions)
  }

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Left sidebar */}
      <div className="w-64 border-r border-gray-200 bg-white p-4">
        <Link href="/" passHref>
          <Button variant="ghost" size="sm" className="mb-4">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Subjects
          </Button>
        </Link>
        <DocumentList
          documents={documents}
          selectedDocument={selectedDocument}
          onSelectDocument={setSelectedDocument}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="border-b border-gray-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">{selectedDocument.title}</h1>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="p-6">
          <div className="prose max-w-none">
            {selectedDocument.content.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Right sidebar */}
      <div className="w-64 border-l border-gray-200 bg-white p-4">
        <h2 className="text-lg font-semibold mb-4">Quiz</h2>
        <Button onClick={handleGenerateQuiz} className="w-full mb-4">
          <Plus className="h-4 w-4 mr-2" />
          Generate Quiz
        </Button>
        {quizQuestions.length > 0 && (
          <div className="space-y-4">
            {quizQuestions.map((question, index) => (
              <div key={index}>
                <p className="font-medium mb-2">{question}</p>
                <Textarea placeholder="Your answer" className="w-full" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

