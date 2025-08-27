
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
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
                <Card key={index} className="overflow-hidden">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`item-${index}`} className="border-b-0">
                      <AccordionTrigger className="relative p-4 text-left font-semibold hover:no-underline">
                        {rule.format}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-12 top-1/2 -translate-y-1/2"
                          onClick={(e) => handleSpeak(e, rule.example)}
                        >
                          <Volume2 />
                        </Button>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 px-4 pb-4">
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
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              )})
            )}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
