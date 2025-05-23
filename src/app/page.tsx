"use client";
import UsinasTable, { Usina } from "@/app/usinas-table";
import { Button } from "@/components/ui/button";
import { Loader2, Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [usinas, setUsinas] = useState<Usina[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsinas = async () => {
    setLoading(true);
    const response = await fetch(
      "https://api-ralie.pegorari.tech/api/v1/usinas/top"
    );
    const data: Usina[] = await response.json();
    setUsinas(data);
    setLoading(false);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="flex text-4xl w-full font-bold justify-center items-center text-center ">
          RALIE
        </h1>

        <div className="text-center max-w-4xl">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            Relatório de Acompanhamento da Expansão da Oferta de Geração de
            Energia Elétrica
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            ralie-usina.csv - Dados Abertos - Agência Nacional de Energia
            Elétrica
          </p>
        </div>
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
