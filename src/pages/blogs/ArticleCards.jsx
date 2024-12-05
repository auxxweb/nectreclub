"use client"

import * as React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"

const articles = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  title: `Article ${i + 1}`,
  excerpt: "This is a brief excerpt from the article that gives you an idea of what it's about...",
  author: `Author ${i + 1}`,
  readTime: "5 min read",
}))

export function ArticleCards() {
  return (
    <div className="space-y-8 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">{article.excerpt}</p>
            </CardContent>
            <CardFooter className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{article.author}</span>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

