
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
  GitBranch,
  Settings,
  BookOpenCheck,
  FileText,
  ClipboardCheck,
  AlertTriangle,
  BookOpen,
  LogOut,
  LogIn,
  ChevronDown,
  Book,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { ThemeToggle } from "@/components/theme-toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function KanjiPage() {
  const { user, logout } = useAuth();
  
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
              <Link href="/home">
                <SidebarMenuButton>
                  <Home />
                  <span>Home</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/hiragana">
                <SidebarMenuButton>
                  <Book />
                  <span>Hiragana</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <Link href="/katakana">
                <SidebarMenuButton>
                  <Book />
                  <span>Katakana</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/kanji">
                <SidebarMenuButton isActive>
                  <Book />
                  <span>Kanji</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/kotoba">
                <SidebarMenuButton>
                  <Book />
                  <span>Kotoba</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/grammar">
                <SidebarMenuButton>
                  <Book />
                  <span>Grammar</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/reading">
                <SidebarMenuButton>
                  <BookOpen />
                  <span>Reading Book</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
           <div className="flex flex-col gap-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-auto justify-start gap-3 px-2">
                    <Avatar className="size-9">
                      <AvatarImage src={user.photoURL ?? "https://picsum.photos/100/100"} data-ai-hint="person face" />
                      <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start truncate">
                      <span className="font-headline font-semibold text-sidebar-foreground truncate">
                          {user.displayName ?? user.email}
                      </span>
                      <span className="text-xs text-sidebar-foreground/70">
                          Nihongo Member
                      </span>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.displayName ?? "Pengguna"}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <ThemeToggle />
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
                <Link href="/login" passHref>
                <Button variant="ghost" className="w-full justify-start gap-2">
                    <LogIn />
                    <span>Login / Signup</span>
                </Button>
                </Link>
            )}
           </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-sm">
          <SidebarTrigger />
          <h1 className="font-headline text-2xl font-semibold">Kanji</h1>
          <div />
        </header>
        <main className="flex-1 space-y-6 p-6">
          <Card className="border-primary/50 bg-primary/5">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <AlertTriangle className="size-8 text-primary" />
              <CardTitle>Sebuah Catatan untuk Anda</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                Jika Anda telah mempelajari dan menguasai semua materi yang tersedia di platform ini, kemampuan Anda sudah lebih dari cukup untuk menghadapi tes JLPT N5, bahkan mendekati level N4. Teruslah berlatih secara konsisten untuk mencapai hasil terbaik!
              </p>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex transform flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <BookOpenCheck className="size-8 text-primary" />
                  <CardTitle>Learning Kanji</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Pelajari karakter Kanji satu per satu untuk membangun fondasi yang kuat.
                </p>
                <Link href="/kanji/learning" passHref>
                  <Button className="w-full">Mulai Belajar</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="flex transform flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <FileText className="size-8 text-primary" />
                  <CardTitle>Reading Kanji</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Latih kemampuan membaca Anda dengan teks yang menggunakan Kanji.
                </p>
                <Link href="/kanji/reading" passHref>
                  <Button className="w-full">Mulai Membaca</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="flex transform flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <ClipboardCheck className="size-8 text-primary" />
                  <CardTitle>Practice Kanji</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Uji pemahaman Kanji Anda dengan berbagai latihan interaktif.
                </p>
                <Link href="/kanji/practice" passHref>
                  <Button className="w-full">Mulai Latihan</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

    
