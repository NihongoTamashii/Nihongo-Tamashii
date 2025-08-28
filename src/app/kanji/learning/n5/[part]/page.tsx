
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
import { kanjiN5 } from "@/lib/data/kanji";
import { Separator } from "@/components/ui/separator";

const ITEMS_PER_PART = 30;

export default function LearningKanjiPage({ params }: { params: Promise<{ part: string }> }) {
  const { part: partString } = React.use(params);
  const part = parseInt(partString, 10);
  
  const kanjiFlashcards = useMemo(
    () => kanjiN5,
    []
  );

  const startIndex = (part - 1) * ITEMS_PER_PART;
  const endIndex = startIndex + ITEMS_PER_PART;
  
  const currentFlashcards = useMemo(() => kanjiFlashcards.slice(startIndex, endIndex), [kanjiFlashcards, startIndex, endIndex]);

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

  const handleSpeak = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    if (speech && text) {
      const utterance = new SpeechSynthesisUtterance(text);
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
          <Link href="/kanji/learning/n5" passHref>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-headline text-2xl font-semibold">
            Learning Kanji
          </h1>
        </div>
        <Button variant="ghost" size="icon">
          <Settings />
        </Button>
      </header>
        <main className="flex flex-1 items-center justify-center">
            <p>Tidak ada kartu Kanji yang tersedia.</p>
        </main>
        </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/kanji/learning/n5" passHref>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-headline text-2xl font-semibold">
            Learning Kanji N5 - Bagian {part}
          </h1>
        </div>
        <Button variant="ghost" size="icon">
          <Settings />
        </Button>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center space-y-8 p-6">
        <div className="w-full max-w-3xl space-y-2">
          <Progress value={progress} />
          <p className="text-center text-sm text-muted-foreground">
            {currentIndex + 1} / {currentFlashcards.length}
          </p>
        </div>

        <div className="relative h-[22rem] w-full max-w-3xl [perspective:1000px] md:h-96">
          <Card
            onClick={handleFlip}
            className={cn(
              "absolute h-full w-full cursor-pointer rounded-xl border-2 shadow-xl transition-transform duration-700 [transform-style:preserve-3d]",
              isFlipped ? "[transform:rotateY(180deg)]" : ""
            )}
          >
            {/* Front of the card */}
            <CardContent className="absolute flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl bg-card [backface-visibility:hidden]">
              <h2 className="text-8xl font-bold text-card-foreground">
                {currentCard.character}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                className="absolute bottom-4 right-4 rounded-full"
                onClick={(e) => handleSpeak(e, currentCard.character)}
              >
                <Volume2 />
              </Button>
            </CardContent>

            {/* Back of the card */}
            <CardContent className="absolute flex h-full w-full flex-col items-start justify-center gap-2 overflow-y-auto rounded-xl bg-card p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="grid w-full grid-cols-2 gap-x-6 gap-y-3">
                  <div className="col-span-2 space-y-1 sm:col-span-1">
                      <h4 className="text-sm font-medium leading-none text-primary">Arti</h4>
                      <p className="text-lg text-foreground">{currentCard.meaning}</p>
                  </div>
                   <Separator className="col-span-2 sm:hidden"/>
                  <div className="space-y-1">
                      <h4 className="text-sm font-medium leading-none text-primary">On'yomi</h4>
                      <p className="text-lg text-foreground">{currentCard.onyomi}</p>
                  </div>
                  <div className="space-y-1">
                      <h4 className="text-sm font-medium leading-none text-primary">Kun'yomi</h4>
                      <p className="text-lg text-foreground">{currentCard.kunyomi}</p>
                  </div>
              </div>

              <Separator className="my-3 w-full" />
              
              <div className="w-full space-y-3">
                <h4 className="text-sm font-medium leading-none text-primary">Contoh Kata</h4>
                <div className="space-y-2">
                {currentCard.examples.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-baseline gap-3">
                            <p className="text-xl font-bold text-foreground">{item.japanese}</p>
                            <p className="text-muted-foreground">{item.reading}</p>
                        </div>
                        <p className="text-sm">{item.meaning}</p>
                    </div>
                ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex w-full max-w-3xl items-center justify-between">
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

