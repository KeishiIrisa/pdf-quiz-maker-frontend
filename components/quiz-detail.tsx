'use client'

import { useState } from 'react'
import { Quiz } from "@/types/quiz";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, ChevronDown, ChevronUp } from 'lucide-react'

export function QuizDetail({quiz}: {quiz: Quiz}) {
    const [IsExpanded, setIsExpanded] = useState<Boolean>(false);

    const toggleQuizExpansion = () => {
        setIsExpanded(!IsExpanded);
    }

    return (
    <div key={quiz._id} className="p-4 border-b border-gray-200">
        <h3 className="font-medium mb-2">{quiz.question}</h3>
        <Textarea
          placeholder="Your answer"
          className="w-full mb-2"
          rows={3}
        />
        <Button
          variant="outline"
          className="w-full justify-between"
          onClick={() => toggleQuizExpansion()}
        >
          {IsExpanded ? 'Hide Answer' : 'Show Answer'}
          {IsExpanded ? (
            <ChevronUp className="h-4 w-4 ml-2" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-2" />
          )}
        </Button>
        {IsExpanded && (
          <div className="mt-2 p-2 bg-gray-50 rounded-md">
            <p className="font-medium">Answer:</p>
            <p>{quiz.answer}</p>
            <p className="font-medium mt-2">Explanation:</p>
            <p>{quiz.description}</p>
          </div>
        )}
    </div>
    )
}
