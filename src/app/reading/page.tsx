
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
  FileUp,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

export default function ReadingPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      setFile(null);
      toast({
        title: "File Tidak Valid",
        description: "Silakan pilih file dengan format PDF.",
        variant: "destructive",
      });
    }
  };

  const handleViewBook = useCallback(() => {
    if (!file) {
      toast({
        title: "Tidak Ada File",
        description: "Silakan pilih file PDF terlebih dahulu.",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const pdfData = reader.result as string;
      try {
        localStorage.setItem("pdfData", pdfData);
        router.push(`/reading/view`);
      } catch (error) {
        toast({
          title: "Gagal Membuka File",
          description: "Ukuran file PDF terlalu besar untuk dibuka di browser.",
          variant: "destructive",
        });
      }
    };
    reader.onerror = () => {
      toast({
        title: "Gagal Membaca File",
        description: "Terjadi kesalahan saat membaca file PDF.",
        variant: "destructive",
      });
    };
  }, [file, router, toast]);

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
          <h1 className="font-headline text-2xl font-semibold">Reading Books</h1>
          <Button variant="ghost" size="icon">
            <Settings />
          </Button>
        </header>
        <main className="flex-1 p-6">
          <div className="flex h-[calc(100vh-10rem)] items-center justify-center">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileUp className="size-6" />
                  <span>Unggah E-Book Anda</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Pilih file PDF dari komputer Anda untuk mulai membaca.
                </p>
                <Input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="file:text-foreground"
                />
                {file && (
                  <div className="text-sm text-muted-foreground">
                    File terpilih:{" "}
                    <span className="font-medium text-foreground">
                      {file.name}
                    </span>
                  </div>
                )}
                <Button
                  onClick={handleViewBook}
                  disabled={!file}
                  className="w-full"
                >
                  <BookOpen className="mr-2" />
                  Mulai Membaca
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
