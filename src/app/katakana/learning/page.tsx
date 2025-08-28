
"use client";

import React from "react";
import { ArrowLeft, BookOpenCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

type KanaType = {
  id: string;
  title: string;
  description: string;
};

const kanaTypes: KanaType[] = [
  { id: 'gojuon', title: 'Gojuon (Vokal Dasar)', description: 'Karakter dasar dalam Katakana.' },
  { id: 'dakuon', title: 'Dakuon', description: 'Karakter dengan tanda tenten (").' },
  { id: 'handakuon', title: 'Handakuon', description: 'Karakter dengan tanda maru (°).' },
  { id: 'youon', title: 'Youon', description: 'Karakter gabungan dengan ヤ, ユ, ヨ kecil.' },
];


export default function KatakanaLearningSelectionPage() {
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
            Pilih Tipe Katakana
          </h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tips Belajar</AlertTitle>
          <AlertDescription>
            Mulailah dari Gojuon untuk membangun fondasi yang kuat sebelum melanjutkan ke tipe lainnya.
          </AlertDescription>
        </Alert>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {kanaTypes.map((type) => (
             <Link key={type.id} href={`/katakana/learning/${type.id}`} passHref>
                <Card className="flex h-full transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <BookOpenCheck className="size-8 text-primary" />
                    <CardTitle>{type.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {type.description}
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
