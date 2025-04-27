"use client";
import UsinasTable, { Usina } from "@/app/usinas-table";
import { Button } from "@/components/ui/button";
import { Loader2, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [usinas, setUsinas] = useState<Usina[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsinas = async () => {
    setLoading(true);
    const response = await fetch(
      "https://boltenergy.pegorari.tech/api/v1/usinas/top"
    );
    const data: Usina[] = await response.json();
    setUsinas(data);
    setLoading(false);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="flex text-4xl font-bold justify-center items-center">
          <Image src="/image.jpg" alt="Bolt Energy" width={100} height={100} />
          Energy</h1>

        <div className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Clique no botão abaixo para visualizar as <br />
          <span className="font-bold">Top 5 usinas de Energia do Brasil.</span>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button
            disabled={usinas.length > 0}
            onClick={() => {
              fetchUsinas();
            }}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Search size={16} />
            )}
            Buscar Usinas
          </Button>
        </div>
        <UsinasTable usinas={usinas} />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Built with ❤️ by PegorariDev
      </footer>
    </div>
  );
}
