import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" passHref>
          <Button variant="ghost" className="text-xl font-semibold text-gray-800">LearnSpace</Button>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 w-64"
            />
          </div>
          <Button variant="ghost" size="sm">
            + New Subject
          </Button>
        </div>
      </div>
    </header>
  )
}

