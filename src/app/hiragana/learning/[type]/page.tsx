
"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { hiragana, Kana } from "@/lib/data/kana";

const kanaTypes: { [key: string]: { title: string; list: Kana[] } } = {
  gojuon: { title: "Gojuon (Vokal Dasar)", list: hiragana.gojuon.filter(k => k.character) },
  dakuon: { title: "Dakuon", list: hiragana.dakuon },
  handakuon: { title: "Handakuon", list: hiragana.handakuon },
  youon: { title: "Youon", list: hiragana.youon },
};

export default function LearningHiraganaPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = React.use(params);
  
  const { title, list: flashcards } = useMemo(() => {
    return kanaTypes[type] || { title: 'Hiragana', list: [] };
  }, [type]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [speech, setSpeech] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    setSpeech(window.speechSynthesis);
  }, []);

  useEffect(() => {
    if (flashcards.length > 0) {
      setProgress(((currentIndex + 1) / flashcards.length) * 100);
    }
  }, [currentIndex, flashcards]);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSpeak = (text: string) => {
    if (speech && text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      speech.speak(utterance);
    }
  };

  const currentCard = useMemo(() => {
    if (flashcards.length > 0) {
      return flashcards[currentIndex];
    }
    return null;
  }, [currentIndex, flashcards]);

  if (!currentCard) {
    return (
        <div className="flex h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/hiragana/learning" passHref>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-headline text-2xl font-semibold">
            Learning Hiragana
          </h1>
        </div>
      </header>
        <main className="flex flex-1 items-center justify-center">
            <p>Tidak ada kartu yang tersedia untuk tipe ini.</p>
        </main>
        </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/hiragana/learning" passHref>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-headline text-2xl font-semibold">
            {title}
          </h1>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center space-y-8 p-6">
        <div className="w-full max-w-2xl space-y-2">
          <Progress value={progress} />
          <p className="text-center text-sm text-muted-foreground">
            {currentIndex + 1} / {flashcards.length}
          </p>
        </div>

        <Card className="flex h-64 w-full max-w-sm flex-col items-center justify-center gap-4 rounded-xl border-2 shadow-xl">
           <h2 className="text-8xl font-bold text-card-foreground">
              {currentCard.character}
            </h2>
            <p className="text-3xl text-muted-foreground">
              {currentCard.romaji}
            </p>
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-4 right-4 rounded-full"
              onClick={() => handleSpeak(currentCard.character)}
            >
              <Volume2 />
            </Button>
        </Card>
      
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
            disabled={currentIndex === flashcards.length - 1}
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
