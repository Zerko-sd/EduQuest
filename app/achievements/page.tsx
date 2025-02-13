'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Trophy,
  Star,
  Zap,
  BookOpen,
  Brain,
  Target,
  Award,
  Crown,
} from 'lucide-react';

export default function AchievementsPage() {
  const achievements = [
    {
      title: 'First Steps',
      description: 'Complete your first lesson',
      progress: 100,
      icon: BookOpen,
      completed: true,
    },
    {
      title: 'Quick Learner',
      description: 'Complete 5 lessons in one day',
      progress: 60,
      icon: Zap,
      completed: false,
    },
    {
      title: 'Knowledge Seeker',
      description: 'Study for 7 days in a row',
      progress: 40,
      icon: Brain,
      completed: false,
    },
    {
      title: 'Perfect Score',
      description: 'Get 100% on a quiz',
      progress: 100,
      icon: Target,
      completed: true,
    },
    {
      title: 'Rising Star',
      description: 'Earn 1000 points',
      progress: 75,
      icon: Star,
      completed: false,
    },
    {
      title: 'Champion',
      description: 'Complete all beginner courses',
      progress: 30,
      icon: Trophy,
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Achievements</h1>
          <p className="text-lg text-muted-foreground">
            Track your progress and unlock rewards
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-12"
        >
          {[
            {
              label: 'Total Achievements',
              value: '8/24',
              icon: Award,
              color: 'text-yellow-500',
            },
            {
              label: 'Current Rank',
              value: 'Gold',
              icon: Crown,
              color: 'text-yellow-500',
            },
            {
              label: 'Points Earned',
              value: '1,250',
              icon: Star,
              color: 'text-yellow-500',
            },
          ].map((stat) => (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`p-6 ${
                  achievement.completed
                    ? 'bg-primary/5'
                    : 'hover:shadow-lg transition-shadow'
                }`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`p-2 rounded-lg ${
                      achievement.completed
                        ? 'bg-primary/20'
                        : 'bg-primary/10'
                    }`}
                  >
                    <achievement.icon
                      className={`h-6 w-6 ${
                        achievement.completed
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                <Progress
                  value={achievement.progress}
                  className={achievement.completed ? 'bg-primary/20' : ''}
                />
                <p className="text-sm text-muted-foreground mt-2">
                  {achievement.progress}% Complete
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}