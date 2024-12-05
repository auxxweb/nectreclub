import { Search } from 'lucide-react'
import { Input } from "../../components/ui/input"
import * as React from "react"
import { Button } from "../../components/ui/button"
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area"

const categories = [
  "For you",
  "Following",
  "Startup",
  "JavaScript",
  "Self Improvement",
  "Programming",
  "Technology",
  "AI",
  "React",
]

export function Navigation() {
  return (
    <ScrollArea className="w-full whitespace-nowrap border-b">
      <div className="flex w-max space-x-4 p-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant="ghost"
            className="flex-none"
          >
            {category}
          </Button>
        ))}
      {/* <div className="flex-1 flex items-center gap-2">
          <div className="relative flex-1 max-w-sm rounded-md border border-gray-300">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8 rounded-md" />
          </div>
        </div> */}
      <ScrollBar orientation="horizontal" />
      </div>
    </ScrollArea>
  )
}

