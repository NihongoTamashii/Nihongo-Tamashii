
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
  Type,
  Atom,
  BookOpen,
  LogOut,
  LogIn,
  ChevronDown,
  SpellCheck,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { ThemeToggle } from "@/components/theme-toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function GrammarPage() {
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
                  <Type />
                  <span>Hiragana</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <Link href="/katakana">
                <SidebarMenuButton>
                  <SpellCheck />
                  <span>Katakana</span>
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
              <Link href="/kotoba">
                <SidebarMenuButton>
                  <BookText />
                  <span>Kotoba</span>
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
                <>
                <div className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors hover:bg-sidebar-accent/10">
                    <Avatar className="size-9">
                    <AvatarImage src={user.photoURL ?? "https://picsum.photos/100/100"} data-ai-hint="person face" />
                    <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                    <span className="font-headline font-semibold text-sidebar-foreground">
                        {user.displayName ?? user.email}
                    </span>
                    <span className="text-xs text-sidebar-foreground/70">
                        Nihongo Member
                    </span>
                    </div>
                </div>
                <Button variant="ghost" className="w-full justify-start gap-2" onClick={logout}>
                    <LogOut />
                    <span>Logout</span>
                </Button>
                </>
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
          <h1 className="font-headline text-2xl font-semibold">Grammar</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <Settings />
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <ThemeToggle />
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/grammar/kata-sifat">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Type className="size-8 text-primary" />
                    <CardTitle>Kata Sifat</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari tentang kata sifat i-keiyōshi dan na-keiyōshi dalam bahasa Jepang.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/grammar/partikel-de">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Atom className="size-8 text-primary" />
                    <CardTitle>Partikel DE で</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari penggunaan partikel DE untuk menandakan alat, tempat, sebab, dan lainnya.
                  </p>
                </CardContent>
              </Card>
            </Link>
             <Link href="/grammar/partikel-e">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Atom className="size-8 text-primary" />
                    <CardTitle>Partikel E へ</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari penggunaan partikel E untuk menandakan arah dan penerima.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/grammar/partikel-ga">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Atom className="size-8 text-primary" />
                    <CardTitle>Partikel GA が</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari berbagai fungsi partikel GA, dari penanda subjek hingga penegas.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/grammar/partikel-ka">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Atom className="size-8 text-primary" />
                    <CardTitle>Partikel KA か</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari penggunaan partikel KA untuk bertanya atau menunjukkan pilihan.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/grammar/partikel-kara">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Atom className="size-8 text-primary" />
                    <CardTitle>Partikel KARA から</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari penggunaan partikel KARA untuk menandakan 'dari' atau 'karena'.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/grammar/partikel-made">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Atom className="size-8 text-primary" />
                    <CardTitle>Partikel MADE まで</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari penggunaan partikel MADE untuk menandakan 'sampai'.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/grammar/partikel-mo">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Atom className="size-8 text-primary" />
                    <CardTitle>Partikel MO も</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari penggunaan partikel MO untuk menandakan 'juga' atau 'pun'.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/grammar/partikel-ni">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Atom className="size-8 text-primary" />
                    <CardTitle>Partikel NI に</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari penggunaan partikel NI untuk menandakan 'di', 'pada', 'ke', dan 'untuk'.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/grammar/partikel-no">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Atom className="size-8 text-primary" />
                    <CardTitle>Partikel NO の</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari penggunaan partikel NO untuk menandakan 'punya', 'milik', dan lainnya.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/grammar/partikel-o">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Atom className="size-8 text-primary" />
                    <CardTitle>Partikel O を</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari penggunaan partikel O sebagai kata bantu untuk kata kerja.
                  </p>
                </CardContent>
              </Card>
            </Link>
             <Link href="/grammar/partikel-to">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Atom className="size-8 text-primary" />
                    <CardTitle>Partikel TO と</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari penggunaan partikel TO untuk menandakan 'dan' atau 'dengan'.
                  </p>
                </CardContent>
              </Card>
            </Link>
             <Link href="/grammar/partikel-wa">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Atom className="size-8 text-primary" />
                    <CardTitle>Partikel WA は</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari penggunaan partikel WA sebagai kata bantu subjek.
                  </p>
                </CardContent>
              </Card>
            </Link>
             <Link href="/grammar/partikel-ya">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Atom className="size-8 text-primary" />
                    <CardTitle>Partikel YA や</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari penggunaan partikel YA untuk menyebutkan contoh dan lainnya.
                  </p>
                </CardContent>
              </Card>
            </Link>
             <Link href="/grammar/partikel-yori">
              <Card className="flex transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Atom className="size-8 text-primary" />
                    <CardTitle>Partikel YORI より</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelajari penggunaan partikel YORI untuk perbandingan.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
