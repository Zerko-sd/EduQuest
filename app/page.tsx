'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FileText, Brain } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-primary"
          >
            Learn Smarter, Not Harder
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Experience a new way of learning with our gamified platform. Upload PDFs,
            create quizzes, and earn rewards while mastering new skills.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="group">
              <Link href="/learn">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/pdf-tools">Try PDF Tools</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">Key Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to enhance your learning experience
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: 'Interactive Learning',
                description:
                  'Engage with dynamic content and adaptive quizzes tailored to your progress.',
              },
              {
                icon: FileText,
                title: 'PDF Tools',
                description:
                  'Upload and analyze PDFs to generate summaries and custom quizzes instantly.',
              },
              {
                icon: Brain,
                title: 'AI-Powered',
                description:
                  'Leverage advanced AI to create personalized learning experiences.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute top-0 -translate-y-1/2 bg-primary/10 p-4 rounded-xl">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-4 text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}