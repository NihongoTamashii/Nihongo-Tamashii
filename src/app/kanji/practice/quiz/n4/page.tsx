
"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { kanjiN4 } from "@/lib/data/kanjiN4";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";

const ITEMS_PER_PART = 30;
const NUM_CHOICES = 4;

type QuizCard = {
  question: string;
  correctAnswer: string;
  choices: string[];
};

function KanjiQuizComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const partsQuery = searchParams.get("parts");

  const [quizCards, setQuizCards] = useState<QuizCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const allKanjiCards = useMemo(
    () => kanjiN4.filter((card) => card.character && card.character.trim() !== ""),
    []
  );

  const selectedParts = useMemo(() => {
    return partsQuery ? partsQuery.split(",").map(Number) : [];
  }, [partsQuery]);

  useEffect(() => {
    if (selectedParts.length > 0) {
      let questions: typeof allKanjiCards = [];
      selectedParts.forEach((part) => {
        const startIndex = (part - 1) * ITEMS_PER_PART;
        const endIndex = startIndex + ITEMS_PER_PART;
        questions = [...questions, ...allKanjiCards.slice(startIndex, endIndex)];
      });

      for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
      }

      const generatedQuizCards = questions.map((card) => {
        const incorrectAnswers = allKanjiCards
          .filter((f) => f.character !== card.character)
          .sort(() => 0.5 - Math.random())
          .slice(0, NUM_CHOICES - 1)
          .map((f) => f.character!);
        
        const choices = [card.character!, ...incorrectAnswers].sort(() => 0.5 - Math.random());

        return {
          question: card.meaning,
          correctAnswer: card.character!,
          choices: choices,
        };
      });

      setQuizCards(generatedQuizCards);
    }
  }, [selectedParts, allKanjiCards]);

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
  
  const handleRetry = () => {
    setShowResults(false);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
     if (selectedParts.length > 0) {
      let questions: typeof allKanjiCards = [];
      selectedParts.forEach((part) => {
        const startIndex = (part - 1) * ITEMS_PER_PART;
        const endIndex = startIndex + ITEMS_PER_PART;
        questions = [...questions, ...allKanjiCards.slice(startIndex, endIndex)];
      });

      for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
      }

      const generatedQuizCards = questions.map((card) => {
        const incorrectAnswers = allKanjiCards
          .filter((f) => f.character !== card.character)
          .sort(() => 0.5 - Math.random())
          .slice(0, NUM_CHOICES - 1)
          .map((f) => f.character!);
        
        const choices = [card.character!, ...incorrectAnswers].sort(() => 0.5 - Math.random());

        return {
          question: card.meaning,
          correctAnswer: card.character!,
          choices: choices,
        };
      });

      setQuizCards(generatedQuizCards);
    }
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
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="font-headline text-xl font-semibold md:text-2xl">
          Latihan Kanji N4
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
              <CardTitle className="text-3xl font-bold md:text-4xl">
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
            <Button variant="outline" onClick={() => router.push('/kanji/practice/n4')}>
              Pilih Bagian Lain
            </Button>
            <Button onClick={handleRetry}>
              Coba Lagi
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}


function LoadingSkeleton() {
    return (
        <div className="flex h-screen w-full flex-col bg-background">
            <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-sm">
                <Skeleton className="h-9 w-9" />
                <Skeleton className="h-6 w-48" />
                <div className="w-9"></div>
            </header>
            <main className="flex flex-1 flex-col items-center justify-center p-4 md:p-6">
                <div className="w-full max-w-2xl space-y-8">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="mx-auto h-4 w-32" />
                    </div>
                    <Card className="text-center">
                        <CardHeader>
                            <Skeleton className="mx-auto h-10 w-3/4" />
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <Skeleton className="h-14 w-full" />
                                <Skeleton className="h-14 w-full" />
                                <Skeleton className="h-14 w-full" />
                                <Skeleton className="h-14 w-full" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}

export default function KanjiQuizPage() {
    return (
        <Suspense fallback={<LoadingSkeleton />}>
            <KanjiQuizComponent />
        </Suspense>
    );
}
