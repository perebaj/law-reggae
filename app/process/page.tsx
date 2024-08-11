import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "../header";

export default function Component() {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Processos</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="p-2">
              <RefreshCwIcon className="h-5 w-5" />
            </Button>
            <Button variant="default" className="p-2">
              <PlusIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="mb-4 flex items-center space-x-2">
          <Select>
            <SelectTrigger aria-label="Filter" className="px-3 py-2 text-sm">
              <SelectValue placeholder="Ativos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ativos">Ativos</SelectItem>
              <SelectItem value="inativos">Inativos</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span>15 de 15 processos e casos</span>
          <Button variant="outline" className="p-2">
            <ListIcon className="h-5 w-5" />
          </Button>
        </div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead>Título</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Ação / Foro</TableHead>
                <TableHead>Últ. Mov</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  title: "Carlos Eduardo Gonzales Lobo x Hurb Technologies S A",
                  status: "Processo ativo",
                  code: "1009585-60.2024.8.26.0344",
                  client: "Carlos Eduardo Gonzales Lobo",
                  action: "Procedimento do Juizado Especial C\u00EDvel",
                  court: "Vara Do Juizado Especial C\u00EDvel",
                  date: "02/08/2024",
                },
                {
                  title:
                    "Diego Pereira de Almeida x Salmour\u00E3o Urbanizadora Spe Ltda",
                  status: "Processo ativo",
                  code: "1002482-07.2024.8.26.0407",
                  client: "Diego Pereira de Almeida",
                  action:
                    "Rescis\u00E3o do contrato e devolu\u00E7\u00E3o do dinheiro",
                  court: "2\u00AA Vara",
                  date: "02/08/2024",
                },
                {
                  title:
                    "Graciele Cristina Campanari De Oliveira x Instituto Nacional Do Seguro Social Inss",
                  status: "Processo ativo",
                  code: "5001668-33.2024.4.03.6345",
                  client: "Graciele Cristina Campanari De Oliveira",
                  action: "Procedimento do Juizado Especial C\u00EDvel",
                  court: "1\u00AA Vara",
                  date: "02/08/2024",
                },
                {
                  title: "Elisa Regina Tanaka Pereira x Banco Pan Sa",
                  status: "Processo ativo",
                  code: "1010372-89.2024.8.26.0344",
                  client: "Elisa Regina Tanaka Pereira",
                  action: "Procedimento Comum C\u00EDvel",
                  court: "4\u00AA Vara C\u00EDvel",
                  date: "29/07/2024",
                },
                {
                  title: "Banco Bradesco Sa x Renato Sergio Serafim",
                  status: "Processo ativo",
                  code: "0001984-98.2019.8.26.0407",
                  client: "Banco Bradesco Sa",
                  action: "Contratos Banc\u00E1rios",
                  court: "2\u00AA Vara",
                  date: "23/07/2024",
                },
              ].map((caseInfo, index) => (
                <TableRow key={index}>
                  <TableCell className="w-12">
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <RssIcon className="h-5 w-5 text-blue-500" />
                      <span className="font-medium">{caseInfo.title}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {caseInfo.status}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {caseInfo.code}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{caseInfo.client}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{caseInfo.action}</div>
                    <div className="text-sm text-muted-foreground">
                      {caseInfo.court}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{caseInfo.date}</div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}

function DownloadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function ListIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function PrinterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  );
}

function RefreshCwIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}

function RssIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-bar-chart-2"
    >
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  );
}
