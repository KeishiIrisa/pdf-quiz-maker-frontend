import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, ChevronRight, ChevronDown, Plus } from 'lucide-react'

interface Document {
  id: number
  title: string
}

interface DocumentListProps {
  documents: Document[]
  selectedDocument: Document
  onSelectDocument: (doc: Document) => void
}

export function DocumentList({ documents, selectedDocument, onSelectDocument }: DocumentListProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="font-semibold text-gray-700"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <ChevronDown className="h-4 w-4 mr-1" /> : <ChevronRight className="h-4 w-4 mr-1" />}
          Documents
        </Button>
        <Button variant="ghost" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      {isExpanded && (
        <ul className="space-y-1">
          {documents.map((doc) => (
            <li key={doc.id}>
              <Button
                variant="ghost"
                size="sm"
                className={`w-full justify-start ${selectedDocument.id === doc.id ? 'bg-gray-100 font-medium' : ''}`}
                onClick={() => onSelectDocument(doc)}
              >
                <FileText className="h-4 w-4 mr-2" />
                {doc.title}
              </Button>
            </li>
          ))}
        </ul>
      )}
      <Input
        type="file"
        className="hidden"
        id="document-upload"
      />
      <label htmlFor="document-upload" className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
        <Plus className="h-4 w-4 mr-2" />
        Upload Document
      </label>
    </div>
  )
}

