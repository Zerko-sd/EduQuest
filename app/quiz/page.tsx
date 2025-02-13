'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Brain, CheckCircle, XCircle } from 'lucide-react';

export default function QuizPage() {
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizData, setQuizData] = useState<any>(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showExplanation, setShowExplanation] = useState(false);

  const startQuiz = async () => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const mockQuizData = {
        explanation: 'This is a sample explanation of the topic.',
        quiz: [
          {
            question: 'What is the capital of France?',
            options: {
              A: 'London',
              B: 'Paris',
              C: 'Berlin',
              D: 'Madrid'
            },
            answer: 'B'
          },
          // Add more mock questions as needed
        ]
      };
      setQuizData(mockQuizData);
      setCurrentQuestion(0);
      setScore({ correct: 0, total: 0 });
    } catch (error) {
      console.error('Error starting quiz:', error);
    }
    setIsLoading(false);
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === quizData.quiz[currentQuestion].answer;
    setScore(prev => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      total: prev.total + 1
    }));
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.quiz.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer('');
      setShowExplanation(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Interactive Quiz</h1>
          <p className="text-lg text-muted-foreground">
            Test your knowledge on any topic
          </p>
        </motion.div>

        {!quizData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Enter a topic
                  </label>
                  <Input
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Ancient Rome, Quantum Physics"
                    className="mb-4"
                  />
                </div>
                <Button
                  onClick={startQuiz}
                  disabled={!topic || isLoading}
                  className="w-full"
                >
                  {isLoading ? 'Generating Quiz...' : 'Start Quiz'}
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {quizData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Question {currentQuestion + 1}</h3>
                    <p className="text-sm text-muted-foreground">
                      Score: {score.correct}/{score.total}
                    </p>
                  </div>
                </div>
                <Progress
                  value={(currentQuestion / quizData.quiz.length) * 100}
                  className="w-24"
                />
              </div>
              
              <div className="space-y-6">
                <p className="text-lg font-medium">
                  {quizData.quiz[currentQuestion].question}
                </p>
                
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(quizData.quiz[currentQuestion].options).map(([key, value]) => (
                    <Button
                      key={key}
                      variant={selectedAnswer === key ? "default" : "outline"}
                      className="justify-start text-left"
                      onClick={() => !selectedAnswer && handleAnswer(key)}
                      disabled={!!selectedAnswer}
                    >
                      <span className="mr-2">{key}.</span> {value as string}
                      {selectedAnswer === key && (
                        <span className="ml-auto">
                          {key === quizData.quiz[currentQuestion].answer ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </span>
                      )}
                    </Button>
                  ))}
                </div>

                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4"
                  >
                    <Card className="p-4 bg-primary/5">
                      <p className="text-sm">
                        {quizData.explanation}
                      </p>
                    </Card>
                    {currentQuestion < quizData.quiz.length - 1 && (
                      <Button
                        onClick={nextQuestion}
                        className="w-full mt-4"
                      >
                        Next Question
                      </Button>
                    )}
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}