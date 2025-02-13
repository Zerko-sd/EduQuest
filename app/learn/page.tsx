'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Award, BookOpen, Clock, Trophy } from 'lucide-react';

export default function LearnPage() {
  const courses = [
    {
      title: 'Introduction to AI',
      progress: 75,
      duration: '2 hours',
      level: 'Beginner',
      icon: BookOpen,
    },
    {
      title: 'Machine Learning Basics',
      progress: 30,
      duration: '4 hours',
      level: 'Intermediate',
      icon: BookOpen,
    },
    {
      title: 'Neural Networks',
      progress: 0,
      duration: '6 hours',
      level: 'Advanced',
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: 'Current Streak', value: '5 days', icon: Trophy },
            { label: 'Total Points', value: '1,250', icon: Award },
            { label: 'Hours Learned', value: '24', icon: Clock },
            { label: 'Courses Completed', value: '3', icon: BookOpen },
          ].map((stat, index) => (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Your Courses</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <course.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">{course.level}</p>
                  </div>
                </div>
                <Progress value={course.progress} className="mb-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{course.progress}% Complete</span>
                  <span>{course.duration}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}