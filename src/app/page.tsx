
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
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

export default function HomePage() {
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
              <SidebarMenuButton isActive>
                <Home />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <BookText />
                <span>Kotoba</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SquarePen />
                <span>Kanji</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <GitBranch />
                <span>Grammar</span>
              </SidebarMenuButton>
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
          <h1 className="font-headline text-2xl font-semibold">Dashboard</h1>
          <Button variant="ghost" size="icon">
            <Settings />
          </Button>
        </header>
        <main className="flex-1 space-y-6 p-6">
          <div className="flex items-center justify-between">
            <h1 className="font-headline text-3xl font-bold">Welcome back!</h1>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Selamat Datang di Nihongo Tamashii</CardTitle>
              <CardDescription className="font-body">
                Ini adalah platform pembelajaran resmi untuk Nihongo Tamashii. Perjalanan Anda untuk menguasai bahasa Jepang dimulai di sini. Jelajahi Kotoba (kosakata), Kanji, dan Tata Bahasa untuk membangun keterampilan Anda. Gunakan sidebar untuk bernavigasi antar bagian. Semoga berhasil!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-body">
                Ini adalah area konten utama. Anda dapat menambahkan materi pembelajaran Anda di sini. Mulailah dengan memilih kategori dari sidebar.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-4">Start Learning</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Pilih Kategori Pembelajaran</DialogTitle>
                    <DialogDescription>
                      Pilih salah satu kategori di bawah ini untuk memulai perjalanan belajar bahasa Jepang Anda.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Button variant="outline" className="flex h-24 flex-col items-center justify-center gap-2">
                      <BookText size={24} />
                      <span className="text-lg">Kotoba</span>
                    </Button>
                    <Button variant="outline" className="flex h-24 flex-col items-center justify-center gap-2">
                      <SquarePen size={24} />
                      <span className="text-lg">Kanji</span>
                    </Button>
                    <Button variant="outline" className="flex h-24 flex-col items-center justify-center gap-2">
                      <GitBranch size={24} />
                      <span className="text-lg">Grammar</span>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
