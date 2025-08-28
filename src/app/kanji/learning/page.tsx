
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

export default function KanjiLevelSelectionPage() {
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
            Pilih Level Kanji
          </h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tips Belajar</AlertTitle>
          <AlertDescription>
            Mulailah dari level N5 untuk membangun fondasi yang kuat sebelum
            melanjutkan ke level yang lebih tinggi.
          </AlertDescription>
        </Alert>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Link href="/kanji/learning/n5" passHref>
            <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <BookOpenCheck className="size-8 text-primary" />
                  <CardTitle>Kanji N5</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dasar-dasar Kanji yang wajib dikuasai untuk pemula.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/kanji/learning/n4" passHref>
            <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <BookOpenCheck className="size-8 text-primary" />
                  <CardTitle>Kanji N4</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lanjutkan perjalanan Kanji Anda ke level
                  berikutnya.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  );
}
