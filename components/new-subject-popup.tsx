'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { PlusCircle } from 'lucide-react'

import { createEducationResources } from '@/api/education_resources'

export function NewSubjectPopup({onCreate}: {onCreate: () => void}) {
  const [isOpen, setIsOpen] = useState(false)
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')

  const handleCreate = () => {
    createEducationResources(subject, description);
    setIsOpen(false);
    setSubject('');
    setDescription('');
    onCreate();
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button>
        <PlusCircle className="mr-2 h-4 w-4" />
          New Space
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Card className='rounded-2xl shadow-none border-none'>
          <CardHeader>
            <CardTitle>Create New Space</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Subject</Label>
                  <Input 
                    id="title" 
                    placeholder="Enter subject(necessary)"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Enter space description(optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={handleCreate}>Create</Button>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  )
}

