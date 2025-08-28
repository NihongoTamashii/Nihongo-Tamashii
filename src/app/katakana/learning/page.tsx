
"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { katakana } from "@/lib/data/kana";

const KanaTable = ({ title, kanaList }: { title: string; kanaList: { character: string; romaji: string }[] }) => {
  const [speech, setSpeech] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    setSpeech(window.speechSynthesis);
  }, []);

  const handleSpeak = (text: string) => {
    if (speech) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      speech.speak(utterance);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-2 text-center">
          {kanaList.map((kana, index) => (
            <div
              key={index}
              className="flex cursor-pointer flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-muted/50"
              onClick={() => handleSpeak(kana.character)}
            >
              <span className="text-3xl font-bold">{kana.character}</span>
              <span className="text-sm text-muted-foreground">{kana.romaji}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default function LearningKatakanaPage() {
  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/katakana" passHref>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-headline text-2xl font-semibold">
            Learning Katakana
          </h1>
        </div>
      </header>

      <main className="flex-1 space-y-6 overflow-y-auto p-6">
        <KanaTable title="Gojuon (Vokal Dasar)" kanaList={katakana.gojuon} />
        <KanaTable title="Dakuon" kanaList={katakana.dakuon} />
        <KanaTable title="Handakuon" kanaList={katakana.handakuon} />
        <KanaTable title="Youon" kanaList={katakana.youon} />
      </main>
    </div>
  );
}
