
"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { adjectives } from "@/lib/data/adjectives";
import { Separator } from "@/components/ui/separator";

export default function AdjectivePage() {
  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/grammar" passHref>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-headline text-2xl font-semibold">
            Kata Sifat (形容詞)
          </h1>
        </div>
      </header>

      <main className="flex-1 space-y-6 overflow-y-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Keiyōshi (形容詞)</CardTitle>
            <CardDescription>
              Sering disebut sebagai i-adjective. Kata sifat golongan 1, ciri-cirinya berakhiran huruf い (i).
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
            {adjectives.iAdjectives.map((adj, index) => (
              <div key={index} className="flex items-baseline">
                <span className="w-1/2 font-semibold">{adj.romaji}</span>
                <span className="w-1/2 text-muted-foreground">
                  {adj.kanji} = {adj.meaning}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Keiyō Dōshi (形容動詞)</CardTitle>
            <CardDescription>
              Sering disebut sebagai na-adjective. Ciri-cirinya tidak berakhiran い (i), meskipun ada beberapa pengecualian.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
            {adjectives.naAdjectives.map((adj, index) => (
              <div key={index} className="flex items-baseline">
                <span className="w-1/2 font-semibold">{adj.romaji}</span>
                <span className="w-1/2 text-muted-foreground">
                  {adj.kanji} = {adj.meaning}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-amber-500/50 bg-amber-500/5">
          <CardHeader>
            <CardTitle className="font-headline text-xl text-amber-700">Perhatikan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-foreground/80">
              Kata-kata di bawah ini termasuk **Keiyō Dōshi (na-adjective)** walaupun berakhiran **い (i)**.
            </p>
             <Separator className="my-4"/>
            <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
              {adjectives.naExceptions.map((adj, index) => (
                <div key={index} className="flex items-baseline">
                  <span className="w-1/2 font-semibold">{adj.romaji}</span>
                  <span className="w-1/2 text-muted-foreground">
                    {adj.kanji} = {adj.meaning}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-foreground/70">
              Selain itu, kata <span className="font-semibold">kirei (きれい)</span> dan <span className="font-semibold">teinei (ていねい)</span> juga merupakan na-adjective meskipun berakhiran suara 'e panjang' yang terdengar seperti 'i'.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
