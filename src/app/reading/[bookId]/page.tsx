
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
  BookOpen,
  Construction,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ReadingFeatureComingSoonPage() {
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
                <SidebarMenuButton>
                  <GitBranch />
                  <span>Grammar</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/reading">
                <SidebarMenuButton isActive>
                  <BookOpen />
                  <span>Reading</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors hover:bg-sidebar-accent/10">
            <Avatar className="size-9">
              <AvatarImage src="https://picsum.photos/100/100" data-ai-hint="person face" />
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
          <h1 className="font-headline text-2xl font-semibold">E-Book Library</h1>
          <Button variant="ghost" size="icon">
            <Settings />
          </Button>
        </header>
        <main className="flex flex-1 items-center justify-center p-6">
           <Card className="w-full max-w-md">
            <CardHeader className="items-center text-center">
              <Construction className="size-16 text-primary" />
              <CardTitle className="text-2xl font-headline">
                Feature Coming Soon!
              </CardTitle>
              <CardDescription>
                Fitur perpustakaan e-book sedang dalam pengembangan. Nantikan pembaruan selanjutnya!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
                <Link href="/reading" passHref>
                    <Button>Kembali ke Library</Button>
                </Link>
            </CardContent>
           </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
