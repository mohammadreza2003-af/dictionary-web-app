"use client";

import { FontProvider } from "@/contexts/font-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" enableSystem>
        <FontProvider>{children}</FontProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
