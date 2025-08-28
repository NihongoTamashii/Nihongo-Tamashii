
"use client";

import React, { useMemo } from "react";
import { ArrowLeft, BookOpenCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { kanjiN5 } from "@/lib/data/kanji";

const ITEMS_PER_PART = 30;

export default function LearningKanjiSelectionPage() {
  const kanjiFlashcards = useMemo(
    () => kanjiN5.filter((card) => card.frontSub && card.frontSub.trim() !== ""),
    []
  );

  const totalParts = Math.ceil(kanjiFlashcards.length / ITEMS_PER_PART);

  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/kanji/learning" passHref>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-headline text-2xl font-semibold">
            Pilih Bagian Kanji N5
          </h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: totalParts }, (_, i) => i + 1).map((part) => (
            <Link key={part} href={`/kanji/learning/n5/${part}`} passHref>
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <BookOpenCheck className="size-8 text-primary" />
                    <CardTitle>Bagian {part}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Kanji {(part - 1) * ITEMS_PER_PART + 1} - {Math.min(part * ITEMS_PER_PART, kanjiFlashcards.length)}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
