
"use client";

import React, { useState, useMemo } from "react";
import { ArrowLeft, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { flashcards } from "@/lib/data/data";

const ITEMS_PER_PART = 30;

export default function PracticeKanjiSelectionPage() {
  const router = useRouter();
  const kanjiFlashcards = useMemo(
    () =>
      flashcards.filter((card) => card.frontSub && card.frontSub.trim() !== ""),
    []
  );

  const totalParts = Math.ceil(kanjiFlashcards.length / ITEMS_PER_PART);
  const [selectedParts, setSelectedParts] = useState<number[]>([]);

  const handlePartSelection = (part: number) => {
    setSelectedParts((prev) =>
      prev.includes(part)
        ? prev.filter((p) => p !== part)
        : [...prev, part]
    );
  };

  const startPractice = () => {
    if (selectedParts.length > 0) {
      const partsQuery = selectedParts.join(",");
      router.push(`/kanji/practice/quiz?parts=${partsQuery}`);
    }
  };

  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/kanji" passHref>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-headline text-2xl font-semibold">
            Pilih Bagian Latihan Kanji
          </h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: totalParts }, (_, i) => i + 1).map((part) => (
            <Card
              key={part}
              onClick={() => handlePartSelection(part)}
              className={`flex transform cursor-pointer flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                selectedParts.includes(part)
                  ? "scale-105 border-primary shadow-lg"
                  : "hover:scale-105"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <ClipboardCheck className="size-8 text-primary" />
                    <CardTitle>Bagian {part}</CardTitle>
                  </div>
                  <Checkbox
                    checked={selectedParts.includes(part)}
                    onCheckedChange={() => handlePartSelection(part)}
                    aria-label={`Select part ${part}`}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kanji {(part - 1) * ITEMS_PER_PART + 1} -{" "}
                  {Math.min(part * ITEMS_PER_PART, kanjiFlashcards.length)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            onClick={startPractice}
            disabled={selectedParts.length === 0}
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            Mulai Latihan ({selectedParts.length} bagian dipilih)
          </Button>
        </div>
      </main>
    </div>
  );
}
