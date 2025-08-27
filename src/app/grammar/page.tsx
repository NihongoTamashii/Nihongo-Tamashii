
"use client";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  Home,
  BookText,
  SquarePen,
  GitBranch,
  Settings,
  Volume2,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { grammarSections } from "@/lib/data/grammar";

export default function GrammarPage() {
  const handleSpeak = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text.split(" (")[0]);
      utterance.lang = "ja-JP";
      window.speechSynthesis.speak(utterance);
    }
  };
  
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-3">
            <Logo />
            <h2 className="font-headline text-lg font-semibold text-sidebar-foreground">
              Nihongo Tamashii
            </h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/">
                <SidebarMenuButton>
                  <Home />
                  <span>Home</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/kotoba">
                <SidebarMenuButton>
                  <BookText />
                  <span>Kotoba</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/kanji">
                <SidebarMenuButton>
                  <SquarePen />
                  <span>Kanji</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/grammar">
                <SidebarMenuButton isActive>
                  <GitBranch />
                  <span>Grammar</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors hover:bg-sidebar-accent/10">
            <Avatar className="size-9">
              <AvatarImage src="https://i.ibb.co/svjvCLZL/icon.jpg" data-ai-hint="person face" />
              <AvatarFallback>YT</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-headline font-semibold text-sidebar-foreground">
                Your Name
              </span>
              <span className="text-xs text-sidebar-foreground/70">
                Logout
              </span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-sm">
          <SidebarTrigger />
          <h1 className="font-headline text-2xl font-semibold">Grammar</h1>
          <Button variant="ghost" size="icon">
            <Settings />
          </Button>
        </header>
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {grammarSections.map((section) =>
              section.rules.map((rule, index) => {
                const translationParts = rule.translation.split(" - ");
                const arti = translationParts.find(p => p.startsWith("arti:"))?.replace("arti: ", "");
                const romaji = translationParts.find(p => p.startsWith("romaji:"))?.replace("romaji: ", "");

                return(
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between pb-4">
                    <CardTitle className="text-lg font-semibold leading-none tracking-tight">{rule.format}</CardTitle>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => handleSpeak(e, rule.example)}
                    >
                      <Volume2 />
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-semibold text-foreground/80">Deskripsi:</p>
                      <p>{rule.description}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground/80">Contoh:</p>
                      <p>{rule.example}</p>
                    </div>
                    {arti && (
                        <div>
                          <p className="font-semibold text-foreground/80">Terjemahan:</p>
                          <p>{arti}</p>
                        </div>
                    )}
                    {romaji && (
                        <div>
                          <p className="font-semibold text-foreground/80">Romaji:</p>
                          <p>{romaji}</p>
                        </div>
                    )}
                  </CardContent>
                </Card>
              )})
            )}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
