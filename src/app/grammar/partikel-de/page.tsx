
"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { deParticle } from "@/lib/data/particles";
import { Separator } from "@/components/ui/separator";

export default function ParticleDePage() {
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
            {deParticle.title}
          </h1>
        </div>
      </header>

      <main className="flex-1 space-y-6 overflow-y-auto p-6">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">{deParticle.title}</CardTitle>
                <CardDescription>
                {deParticle.meaning}
                </CardDescription>
            </CardHeader>
        </Card>
        
        {deParticle.usages.map((usage, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="font-headline text-xl">{usage.title} <span className="font-mono text-primary">{usage.description}</span></CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {usage.examples.map((ex, exIndex) => (
                <div key={exIndex}>
                  <div className="space-y-1 rounded-lg border bg-muted/30 p-4">
                    <p className="font-semibold">{ex.romaji}</p>
                    <p className="text-lg">{ex.japanese}</p>
                    <p className="text-sm text-muted-foreground">{ex.translation}</p>
                  </div>
                   {exIndex < usage.examples.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
