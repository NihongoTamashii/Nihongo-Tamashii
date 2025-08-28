
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { katakana, Kana } from "@/lib/data/kana";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

const NUM_CHOICES = 4;

type QuizCard = {
  question: string;
  correctAnswer: string;
  choices: string[];
};

export default function KatakanaPracticePage() {
  const router = useRouter();
  const [quizCards, setQuizCards] = useState<QuizCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const allKatakana = useMemo(() => {
    return [
      ...katakana.gojuon,
      ...katakana.dakuon,
      ...katakana.handakuon,
      ...katakana.youon,
    ].filter((k) => k.character);
  }, []);

  const generateQuiz = () => {
    // Fisher-Yates shuffle
    const shuffled = [...allKatakana];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const generatedQuizCards = shuffled.map((card) => {
      const incorrectAnswers = allKatakana
        .filter((h) => h.romaji !== card.romaji)
        .sort(() => 0.5 - Math.random())
        .slice(0, NUM_CHOICES - 1)
        .map((h) => h.romaji);
      
      const choices = [card.romaji, ...incorrectAnswers].sort(() => 0.5 - Math.random());

      return {
        question: card.character,
        correctAnswer: card.romaji,
        choices: choices,
      };
    });

    setQuizCards(generatedQuizCards);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setShowResults(false);
  };
  
  useEffect(() => {
    generateQuiz();
  }, [allKatakana]);

  const handleAnswer = (choice: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(choice);
    if (choice === quizCards[currentIndex].correctAnswer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      if (currentIndex < quizCards.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowResults(true);
      }
    }, 1500);
  };
  
  if (quizCards.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        Memuat kuis...
      </div>
    );
  }

  const progress = ((currentIndex + 1) / quizCards.length) * 100;
  const currentCard = quizCards[currentIndex];

  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-sm">
        <Link href="/katakana">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
        </Link>
        <h1 className="font-headline text-xl font-semibold md:text-2xl">
          Latihan Katakana
        </h1>
        <div className="w-9"></div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-2xl space-y-8">
          <div className="space-y-2">
            <Progress value={progress} />
            <p className="text-center text-sm text-muted-foreground">
              Soal {currentIndex + 1} dari {quizCards.length}
            </p>
          </div>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-7xl font-bold md:text-8xl">
                {currentCard.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {currentCard.choices.map((choice) => {
                  const isSelected = selectedAnswer === choice;
                  const isTheCorrectAnswer = choice === currentCard.correctAnswer;

                  return (
                    <Button
                      key={choice}
                      onClick={() => handleAnswer(choice)}
                      disabled={!!selectedAnswer}
                      className={cn(
                        "h-auto py-4 text-lg",
                        isSelected && isCorrect === true && "bg-green-500 hover:bg-green-600",
                        isSelected && isCorrect === false && "bg-red-500 hover:bg-red-600",
                        selectedAnswer && isTheCorrectAnswer && "bg-green-500 hover:bg-green-600",
                        selectedAnswer && !isTheCorrectAnswer && !isSelected && "opacity-50"
                      )}
                    >
                      {choice}
                       {selectedAnswer && isTheCorrectAnswer && (
                        <CheckCircle className="ml-2" />
                      )}
                      {isSelected && isCorrect === false && (
                        <XCircle className="ml-2" />
                      )}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

       <AlertDialog open={showResults}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-2xl font-bold">Hasil Latihan</AlertDialogTitle>
            <AlertDialogDescription className="text-center text-lg">
              Skor Anda:
              <p className="text-5xl font-bold text-primary my-4">{Math.round((score / quizCards.length) * 100)}</p>
              Benar {score} dari {quizCards.length} pertanyaan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col gap-2 sm:flex-row">
             <Button variant="outline" onClick={() => router.push('/katakana')}>
              Kembali
            </Button>
            <Button onClick={generateQuiz}>
              Coba Lagi
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
