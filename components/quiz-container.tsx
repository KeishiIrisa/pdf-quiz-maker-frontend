'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { Quiz } from '@/types/quiz'
import { QuizDetail } from './quiz-detail'
import { generateQuiz, getQuizzesByIds } from '@/api/quizzes'
import { EducationResource } from '@/types/education_resource'

export function QuizContainer({ educationResource }: { educationResource: EducationResource}) {
  const [learningContent, setLearningContent] = useState<string>('')
  const [quizzes, setQuizzes] = useState<Quiz[]>([])

  useEffect(() => {
    const fetchQuizzes = async () => {
      if (educationResource?.quizzes_ids) {
        try {
          const data = await getQuizzesByIds(educationResource.quizzes_ids);
          setQuizzes(data);
        } catch (error) {
          console.error('Error fetching quizzes:', error);
        }
      }
    };

    fetchQuizzes();
  }, [educationResource]);

  const handleGenerateQuiz = async () => {
    const newQuiz: Quiz = await generateQuiz(educationResource._id, learningContent)
    setQuizzes([newQuiz, ...quizzes])
    setLearningContent("")
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Generate Quiz</h2>
        <div className="flex flex-col space-y-2">
          <Input
            placeholder="Enter quiz topic"
            value={learningContent}
            onChange={(e) => setLearningContent(e.target.value)}
          />
          <Button onClick={handleGenerateQuiz} className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Generate Quiz
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {quizzes.map((quiz) => (
            <QuizDetail quiz={quiz} />
        ))}
      </div>
    </div>
  )
}

