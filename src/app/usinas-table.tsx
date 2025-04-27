import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export interface Usina {
  id: number;
  codCEG: string;
  nomeEmpreendimento: string;
  potenciaOutorgadaKw: number;
  uf: string;
  tipoGeracao: string;
  origemCombustivel: string;
  situacaoObra: string;
}

interface UsinasTableProps {
  usinas: Usina[];
}

const UsinasTable = ({ usinas }: UsinasTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nome</TableHead>
          <TableHead>Potência Outorgada (kw)</TableHead>
          <TableHead>Origem Combustível</TableHead>
          <TableHead>Sit. Obra</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {usinas.length === 0 && (
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              Clique em <span className="font-bold">buscar usinas</span>.
            </TableCell>
          </TableRow>
        )}
        {usinas.map((usina) => (
          <TableRow key={usina.id}>
            <TableCell className="flex items-center font-medium gap-1">
            {usina.nomeEmpreendimento}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger><Info size={8} strokeWidth={2.75}/></TooltipTrigger>
                  <TooltipContent>
                    <p>Código CEG: {usina.codCEG}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>              
            </TableCell>
            <TableCell>
              {usina.potenciaOutorgadaKw.toLocaleString("pt-BR")}
            </TableCell>
            <TableCell>{usina.origemCombustivel}</TableCell>
            <TableCell>{usina.situacaoObra}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsinasTable;
