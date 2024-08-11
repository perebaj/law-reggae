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
              <SelectItem value="ativos">
                <div className="flex items-center gap-2">
                  <PlugIcon className="h-5 w-5" />
                  Ativos
                </div>
              </SelectItem>
              <SelectItem value="inativos">
                <div className="flex items-center gap-2">
                  <UnplugIcon className="h-5 w-5" />
                  Inativos
                </div>
              </SelectItem>
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
                      <PlugIcon className="h-2 w-2 text-blue-500" />
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

function PlugIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M237.66,18.34a8,8,0,0,0-11.32,0l-52.4,52.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L100,88.69l-6.34-6.35A8,8,0,0,0,82.34,93.66L88.69,100,65.37,123.31a32,32,0,0,0,0,45.26l5.38,5.37-52.41,52.4a8,8,0,0,0,11.32,11.32l52.4-52.41,5.37,5.38a32,32,0,0,0,45.26,0L156,167.31l6.34,6.35a8,8,0,0,0,11.32-11.32L167.31,156l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,52.41-52.4A8,8,0,0,0,237.66,18.34Zm-116.29,161a16,16,0,0,1-22.62,0L76.69,157.25a16,16,0,0,1,0-22.62L100,111.31,144.69,156Zm57.94-57.94L156,144.69,111.31,100l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,179.31,121.37ZM88.57,35A8,8,0,0,1,103.43,29l8,20A8,8,0,0,1,96.57,55ZM24.57,93A8,8,0,0,1,35,88.57l20,8A8,8,0,0,1,49,111.43l-20-8A8,8,0,0,1,24.57,93ZM231.43,163a8,8,0,0,1-10.4,4.46l-20-8A8,8,0,1,1,207,144.57l20,8A8,8,0,0,1,231.43,163Zm-64,58.06A8,8,0,0,1,152.57,227l-8-20A8,8,0,0,1,159.43,201Z"></path>
    </svg>
  );
}

function UnplugIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M149.66,138.34a8,8,0,0,0-11.32,0L120,156.69,99.31,136l18.35-18.34a8,8,0,0,0-11.32-11.32L88,124.69,69.66,106.34a8,8,0,0,0-11.32,11.32L64.69,124,41.37,147.31a32,32,0,0,0,0,45.26l5.38,5.37-28.41,28.4a8,8,0,0,0,11.32,11.32l28.4-28.41,5.37,5.38a32,32,0,0,0,45.26,0L132,191.31l6.34,6.35a8,8,0,0,0,11.32-11.32L131.31,168l18.35-18.34A8,8,0,0,0,149.66,138.34Zm-52.29,65a16,16,0,0,1-22.62,0L52.69,181.25a16,16,0,0,1,0-22.62L76,135.31,120.69,180Zm140.29-185a8,8,0,0,0-11.32,0l-28.4,28.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L124,64.69l-6.34-6.35a8,8,0,0,0-11.32,11.32l80,80a8,8,0,0,0,11.32-11.32L191.31,132l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,28.41-28.4A8,8,0,0,0,237.66,18.34Zm-34.35,79L180,120.69,135.31,76l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,203.31,97.37Z"></path>
    </svg>
  );
}
