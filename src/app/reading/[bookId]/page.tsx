
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Loader2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ebooks } from "@/lib/data/books";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PageCover = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="flex items-center justify-center rounded-md border bg-card shadow-md"
      >
        <h2 className="py-4 text-center font-headline text-2xl font-bold text-card-foreground">
          {props.children}
        </h2>
      </div>
    );
  }
);
PageCover.displayName = "PageCover";

const PageContent = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="flex items-center justify-center rounded-md border bg-background shadow-md"
      >
        {props.children}
      </div>
    );
  }
);
PageContent.displayName = "PageContent";

export default function FlipBookViewer() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const flipBookRef = useRef<any>(null);

  const bookId = params.bookId as string;
  const book = ebooks.find(b => b.id === bookId);
  
  useEffect(() => {
    if (!book) {
      toast({
        title: "Buku Tidak Ditemukan",
        description: "E-book yang Anda cari tidak ada di perpustakaan.",
        variant: "destructive",
      });
      router.push("/reading");
    }
  }, [book, router, toast]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };
  
  const onFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
  }, []);

  const goToNextPage = () => {
    flipBookRef.current?.pageFlip()?.flipNext();
  };

  const goToPrevPage = () => {
    flipBookRef.current?.pageFlip()?.flipPrev();
  };
  
  if (!book) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="ml-4 text-lg">Mencari buku...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-sm">
        <Button variant="ghost" size="icon" onClick={() => router.push('/reading')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="text-center">
            <h1 className="font-headline text-lg font-semibold">
              {book.title}
            </h1>
            {numPages && (
                <p className="text-sm text-muted-foreground">
                    Halaman {currentPage * 2} dari {numPages}
                </p>
            )}
        </div>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setZoom(z => Math.max(0.5, z-0.1))}>
                <ZoomOut className="h-5 w-5" />
            </Button>
            <span className="text-sm font-semiboldtabular-nums">{(zoom*100).toFixed(0)}%</span>
             <Button variant="ghost" size="icon" onClick={() => setZoom(z => Math.min(2, z+0.1))}>
                <ZoomIn className="h-5 w-5" />
            </Button>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center overflow-hidden p-4">
        <div className="relative flex items-center">
             <Button variant="outline" size="icon" className="absolute -left-12 z-10 rounded-full" onClick={goToPrevPage} disabled={currentPage === 0}>
                <ChevronLeft/>
            </Button>
          <Document
            file={book.filePath}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => {
                toast({ title: "Gagal memuat PDF", description: error.message, variant: "destructive" });
            }}
            loading={
              <div className="flex items-center">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                <p className="ml-2">Memuat E-Book...</p>
              </div>
            }
          >
            <HTMLFlipBook
              width={400 * zoom}
              height={565 * zoom}
              size="stretch"
              minWidth={315}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1533}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={onFlip}
              className="mx-auto"
              ref={flipBookRef}
            >
              <PageCover>{book.title}</PageCover>
              {Array.from(new Array(numPages || 0), (el, index) => (
                <PageContent key={`page_${index + 1}`}>
                  <Page pageNumber={index + 1} scale={zoom} renderTextLayer={false}/>
                </PageContent>
              ))}
              <PageCover>Selesai</PageCover>
            </HTMLFlipBook>
          </Document>
           <Button variant="outline" size="icon" className="absolute -right-12 z-10 rounded-full" onClick={goToNextPage} disabled={!numPages || currentPage >= numPages - 1}>
                <ChevronRight/>
            </Button>
        </div>
      </main>
    </div>
  );
}
