
"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  Settings,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { flashcards } from "@/lib/data/kotoba";

const ITEMS_PER_PART = 30;

export default function LearningKotobaPage({ params }: { params: Promise<{ part: string }> }) {
  const { part: partString } = React.use(params);
  const part = parseInt(partString, 10);

  const startIndex = (part - 1) * ITEMS_PER_PART;
  const endIndex = startIndex + ITEMS_PER_PART;
  
  const currentFlashcards = useMemo(() => flashcards.slice(startIndex, endIndex), [startIndex, endIndex]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speech, setSpeech] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    setSpeech(window.speechSynthesis);
  }, []);

  useEffect(() => {
    if (currentFlashcards.length > 0) {
      setProgress(((currentIndex + 1) / currentFlashcards.length) * 100);
    }
    setIsFlipped(false);
  }, [currentIndex, currentFlashcards]);

  const handleNext = () => {
    if (currentIndex < currentFlashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (speech && currentFlashcards.length > 0) {
      const utterance = new SpeechSynthesisUtterance(currentFlashcards[currentIndex].front);
      utterance.lang = "ja-JP";
      speech.speak(utterance);
    }
  };

  const currentCard = useMemo(() => {
    if (currentFlashcards.length > 0) {
      return currentFlashcards[currentIndex];
    }
    return null;
  }, [currentIndex, currentFlashcards]);


  if (!currentCard) {
    return (
        <div className="flex h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/kotoba/learning" passHref>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-headline text-2xl font-semibold">
            Learning Kotoba
          </h1>
        </div>
        <Button variant="ghost" size="icon">
          <Settings />
        </Button>
      </header>
        <main className="flex flex-1 items-center justify-center">
            <p>Tidak ada kartu Kotoba yang tersedia.</p>
        </main>
        </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/kotoba/learning" passHref>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-headline text-2xl font-semibold">
            Learning Kotoba - Bagian {part}
          </h1>
        </div>
        <Button variant="ghost" size="icon">
          <Settings />
        </Button>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center space-y-8 p-6">
        <div className="w-full max-w-2xl space-y-2">
          <Progress value={progress} />
          <p className="text-center text-sm text-muted-foreground">
            {currentIndex + 1} / {currentFlashcards.length}
          </p>
        </div>

        <div className="relative h-64 w-full max-w-2xl [perspective:1000px]">
          <Card
            onClick={handleFlip}
            className={cn(
              "absolute h-full w-full cursor-pointer rounded-xl border-2 shadow-xl transition-transform duration-700 [transform-style:preserve-3d]",
              isFlipped ? "[transform:rotateY(180deg)]" : ""
            )}
          >
            {/* Front of the card */}
            <CardContent className="absolute flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl bg-card [backface-visibility:hidden]">
               <p className="text-2xl text-muted-foreground">
                {currentCard.front}
              </p>
              <h2 className="text-5xl font-bold text-card-foreground">
                {currentCard.frontSub}
              </h2>
              <p className="text-xl text-muted-foreground">
                {currentCard.romaji}
              </p>
              <Button
                variant="ghost"
                size="icon"
                className="absolute bottom-4 right-4 rounded-full"
                onClick={handleSpeak}
              >
                <Volume2 />
              </Button>
            </CardContent>

            {/* Back of the card */}
            <CardContent className="absolute flex h-full w-full items-center justify-center rounded-xl bg-card [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <h3 className="text-4xl font-semibold text-card-foreground">
                {currentCard.back}
              </h3>
            </CardContent>
          </Card>
        </div>

        <div className="flex w-full max-w-2xl items-center justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            variant="outline"
            size="lg"
          >
            <ChevronLeft className="mr-2" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentIndex === currentFlashcards.length - 1}
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            Next
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
}
