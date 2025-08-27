
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
  QrCode,
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
import Link from "next/link";
import Image from "next/image";

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
              <Link href="/">
                <SidebarMenuButton isActive>
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
                <SidebarMenuButton>
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
              <CardTitle className="font-headline">Platform Pembelajaran Resmi Nihongo Tamashii</CardTitle>
              <CardDescription className="font-body">
                Selamat datang di platform pembelajaran resmi Nihongo Tamashii. Perjalanan Anda untuk menguasai bahasa Jepang dimulai di sini. Jelajahi Kotoba (kosakata), Kanji, dan Tata Bahasa untuk membangun keterampilan Anda. Gunakan sidebar untuk bernavigasi antar bagian. Semoga berhasil!
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
                    <Link href="/kotoba">
                      <Button variant="outline" className="flex h-24 w-full flex-col items-center justify-center gap-2">
                        <BookText size={24} />
                        <span className="text-lg">Kotoba</span>
                      </Button>
                    </Link>
                    <Link href="/kanji">
                      <Button variant="outline" className="flex h-24 w-full flex-col items-center justify-center gap-2">
                        <SquarePen size={24} />
                        <span className="text-lg">Kanji</span>
                      </Button>
                    </Link>
                    <Link href="/grammar">
                      <Button variant="outline" className="flex h-24 flex-col items-center justify-center gap-2">
                        <GitBranch size={24} />
                        <span className="text-lg">Grammar</span>
                      </Button>
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Follow Kami di TikTok</CardTitle>
                <CardDescription>Dapatkan konten pembelajaran singkat dan menarik setiap hari!</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://www.tiktok.com/@nihongo.tamashii" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.01.96-.02 1.92-.01 2.88.02 1.68-.08 3.35-.37 5a6.05 6.05 0 01-1.12 2.37c-.67.89-1.57 1.6-2.61 2.14a7.6 7.6 0 01-3.13 1.14c-1.3.16-2.6.09-3.89-.12-1.46-.23-2.84-.71-4.11-1.41a6.03 6.03 0 01-2.5-2.82c-.44-1.28-.6-2.65-.58-4 .02-1.7.09-3.4.2-5.1.05-.78.13-1.56.24-2.34.05-.37.04-.74.08-1.11.04-.37.01-.74-.01-1.11-.02-.37-.02-.74-.02-1.11a22.2 22.2 0 01-.22-3.17C2.69 3.37 3.32 1.87 4.31.79 5.3-.29 6.79-.1 8.28.16c.3.05.6.14.9.25.28.1.55.22.82.36.3.15.58.32.86.51.27.18.52.38.77.62.24.23.47.48.68.74.21.26.4.55.57.85.17.3.3.61.43.93.12.32.23.65.32.98.04.16.08.32.12.48.08.31.15.62.19.93.04.31.07.62.08.93.02.31.02.62.02.93s.01.6-.01.9c-.02.3-.04.6-.08.89-.04.3-.09.59-.16.88-.07.29-.16.58-.26.86-.11.28-.23.56-.37.83-.14.27-.3.54-.47.8-.17.26-.35.52-.55.76-.21.25-.43.49-.67.71-.24.23-.5.44-.76.65-.27.21-.55.41-.85.58-.29.18-.6.34-.91.48-.32.14-.64.26-.97.35-.33.09-.67.16-1.01.21-.34.05-.68.08-1.02.09-.34.01-.68.01-1.02,0-.34,0-.68-.02-1.02-.04a7.6 7.6 0 01-1.01-.21c-.32-.09-.64-.2-.95-.33-.31-.13-.6-.28-.89-.45-.29-.17-.56-.36-.82-.57-.26-.21-.5-.44-.73-.68-.22-.24-.44-.5-.64-.76-.2-.27-.39-.55-.56-.84-.17-.29-.32-.59-.46-.89-.14-.3-.26-.61-.36-.92-.1-.31-.18-.62-.24-.94s-.1-.63-.12-.95c-.02-.31-.03-.63-.03-.94,0-.31.01-.63.02-.94.02-.32.04-.63.07-.95.03-.31.07-.63.12-.94.05-.31.1-.62.17-.93.07-.31.14-.61.23-.91.09-.3.19-.6.31-.89.12-.29.25-.57.4-.85.15-.28.32-.55.5-.81.18-.26.38-.52.59-.76.21-.24.44-.48.68-.7.25-.23.51-.44.78-.64.28-.2.56-.38.86-.54.3-.16.6-.3.92-.42.32-.12.65-.21.98-.28.33-.07.67-.12 1.01-.15.34-.03.68-.04 1.02-.04Z" />
                    </svg>
                    Ikuti di TikTok
                  </Button>
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dukung Kami di Saweria</CardTitle>
                <CardDescription>Bantu kami untuk terus berkembang dan menyediakan konten berkualitas.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <a href="https://saweria.co/nihongotamashii" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full">
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v2h-2zm0 4h2v6h-2z" />
                    </svg>
                    Dukung di Saweria
                  </Button>
                </a>
                 <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <QrCode className="mr-2 h-5 w-5" />
                      Tampilkan QR Code
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-xs">
                    <DialogHeader>
                      <DialogTitle>Pindai untuk Donasi</DialogTitle>
                      <DialogDescription>
                        Gunakan aplikasi perbankan atau e-wallet Anda untuk memindai QR code ini.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center justify-center p-4">
                       <Image 
                        src="https://saweria.co/widgets/qr?streamKey=8783d8a09de548afdcc3b7f9a8bb1681"
                        alt="QR Code Saweria"
                        width={250}
                        height={250}
                        className="rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
