import { Search } from 'lucide-react'
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Bell } from 'lucide-react'
import './searchHeader.css'

export function SearchHeader() {
  return (
    <header className="sticky top-0 mt-5 z-50 h-15 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex  items-center gap-4">
      <a href="#" className="logo flex items-center space-x-2">
        <span className="logo-text text-3xl font-bold text-black duration-200">
          NectereClub  
        </span>
        {/* Arrow icon */}
        <span className="text-xl text-black transform transition-all duration-200">
          &#8658; 
        </span>
      </a>
      <a href="#" className="logo">
        <span className="logo-text text-center text-2xl font-semibold text-gray-800 duration-200">
          Blogs
        </span>
      </a>
  
      {/* Move search to the right side */}
      <div className="ml-auto flex items-center gap-2 mb-4">
        <div className="relative max-w-sm rounded-md border border-gray-300">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-8 rounded-md" />
        </div>
      </div>
    </div>
  </header>
  
  )
}

