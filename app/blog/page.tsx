"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CalendarDays, Clock, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Ultimate Guide to Natural Skincare",
      excerpt: "Discover the power of natural ingredients and how they can transform your skincare routine.",
      author: "Emma Watson",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Understanding Your Skin Type",
      excerpt: "Learn how to identify your skin type and choose the right products for your needs.",
      author: "Sarah Johnson",
      date: "March 12, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Sustainable Beauty: Making Better Choices",
      excerpt: "How to build an eco-friendly beauty routine without compromising on quality.",
      author: "Lisa Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1556228578-c5b2222270b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">Beauty <span className="font-medium">Blog</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the latest trends, tips, and insights in sustainable beauty and skincare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer">
                <div className="aspect-video relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}