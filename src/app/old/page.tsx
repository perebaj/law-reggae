import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
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
import {
  RefreshCwIcon,
  PlugIcon,
  UnplugIcon,
  PlusIcon,
  ListIcon,
} from "@/components/icons";

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
                  status: "Processo inativo",
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
                    <Checkbox id={index.toString()} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {caseInfo.status === "Processo ativo" ? (
                        <PlugIcon />
                      ) : (
                        <UnplugIcon />
                      )}
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
